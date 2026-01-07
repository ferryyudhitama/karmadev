"use client";

import React, { useState, useRef } from 'react';
import { Check, Loader2, X, Send } from 'lucide-react';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';

// Zod Schema for validation
const contactSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  memberId: z.string().min(1, 'Member ID is required'),
  mobile: z.string().min(5, 'Valid mobile number is required'),
  email: z.string().email('Invalid email format'),
  country: z.string().min(1, 'Please select a country'),
  reason: z.string().min(1, 'Please select a reason'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy')
});

type FormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    memberId: '',
    mobile: '',
    email: '',
    country: '',
    reason: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const countries = ["Australia", "Bali", "Germany", "Greece", "India", "Indonesia", "Maldives", "Thailand", "UK", "USA", "Other"];
  const reasons = ["General Enquiry", "Membership", "Reservation", "Feedback", "Events"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: val }));
    // Clear specific error
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) setErrors(prev => ({ ...prev, robot: undefined } as any));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: any = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    if (!captchaToken) {
      setErrors(prev => ({ ...prev, robot: 'Please verify you are not a robot' } as any));
      return;
    }

    setIsSubmitting(true);

    // Simulate API Call
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ ...formData, captchaToken }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });

      if (response.ok) {
        console.log("Form successfully sent to API:", await response.json());
        setShowPopup(true);
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          memberId: '',
          mobile: '',
          email: '',
          country: '',
          reason: '',
          message: '',
          consent: false,
        });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#Fdfbf7] text-gray-800 py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roxborough italic text-6xl md:text-8xl text-gray-200 font-light mb-4 select-none">
             Get in touch
          </h2>
          <p className="text-gray-500 font-light font-basis tracking-widest text-sm mt-2">
            Our award-winning Karma Concierge is at your service.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12 font-basis">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className={`w-full bg-transparent border-b ${errors.firstName ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E8B62] transition-colors`}
              />
              {errors.firstName && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.firstName}</span>}
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name*"
                className={`w-full bg-transparent border-b ${errors.lastName ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E8B62] transition-colors`}
              />
              {errors.lastName && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.lastName}</span>}
            </div>
            <div className="relative">
              <input
                type="text"
                name="memberId"
                value={formData.memberId}
                onChange={handleChange}
                placeholder="Member ID*"
                className={`w-full bg-transparent border-b ${errors.memberId ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E8B62] transition-colors`}
              />
              {errors.memberId && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.memberId}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            <div className="relative">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number*"
                className={`w-full bg-transparent border-b ${errors.mobile ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E8B62] transition-colors`}
              />
              {errors.mobile && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.mobile}</span>}
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID*"
                className={`w-full bg-transparent border-b ${errors.email ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E8B62] transition-colors`}
              />
              {errors.email && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.email}</span>}
            </div>
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full bg-transparent border-b ${errors.country ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 focus:outline-none focus:border-[#9E8B62] transition-colors appearance-none cursor-pointer`}
              >
                <option value="" disabled className="text-gray-400">Country of Residence*</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.country && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.country}</span>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative">
             <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className={`w-full bg-transparent border-b ${errors.reason ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 focus:outline-none focus:border-[#9E8B62] transition-colors appearance-none cursor-pointer`}
              >
                <option value="" disabled className="text-gray-400">Reason for Enquiry</option>
                {reasons.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              {errors.reason && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.reason}</span>}
          </div>

          {/* Row 4: Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message*"
              className={`w-full bg-transparent border-b ${errors.message ? 'border-red-400' : 'border-gray-300'} py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#9E8B62] transition-colors resize-none`}
            />
            {errors.message && <span className="text-red-400 text-[10px] mt-1 absolute left-0 -bottom-5  font-semibold">{errors.message}</span>}
          </div>

          {/* Privacy & ReCAPTCHA */}
          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-3 group">
              <div className="relative flex items-center mt-1">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  id="consent"
                  className="peer h-4 w-4 opacity-0 absolute cursor-pointer z-10"
                />
                <div className={`h-4 w-4 border border-[#9E8B62] flex items-center justify-center transition-all ${formData.consent ? 'bg-[#9E8B62]' : 'bg-transparent'}`}>
                  {formData.consent && <Check size={10} className="text-white" strokeWidth={4} />}
                </div>
              </div>
              <label htmlFor="consent" className="text-[11px] text-gray-500 leading-relaxed pt-0.5 cursor-pointer select-none">
                I agree to authorise Karma Club to process my data and to contact me in compliance with the Karma Group <span className="underline decoration-[#9E8B62] underline-offset-2">Privacy Policy</span>
              </label>
            </div>
            {errors.consent && <p className="text-red-400 text-[10px]  font-semibold">{errors.consent}</p>}

            {/* Google ReCAPTCHA */}
            <div className="mt-8">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdtuEIsAAAAAL4KB_J5gS5j712MzEKMnFOkgdaX" // Google Test Key
                onChange={onCaptchaChange}
                theme="light"
              />
              {(errors as any).robot && <p className="text-red-400 text-[10px] mt-2  font-semibold">{(errors as any).robot}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative px-16 py-4 bg-[#9E8B62] text-white rounded-full  text-xs font-bold tracking-[0.2em] hover:bg-[#8A7952] transition-all shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-3 overflow-hidden cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  <span>Processing</span>
                </>
              ) : (
                <>
                  <span>Submit </span>
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          <div className="relative bg-white w-full max-w-lg rounded-[2rem] p-12 text-center shadow-2xl animate-fade-in-scale">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="w-24 h-24 bg-[#9E8B62] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#9E8B62]/30">
              <Check size={48} className="text-white" strokeWidth={3} />
            </div>

            <h3 className="font-serif italic text-4xl text-gray-900 mb-6">Enquiry Received</h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
              Thank you for reaching out. Our dedicated <span className="font-medium text-[#9E8B62]">Karma Concierge</span> team has been notified and will contact you within 24 hours.
            </p>

            <button 
              onClick={() => setShowPopup(false)}
              className="w-full py-4 border-2 border-[#9E8B62] text-[#9E8B62] rounded-full  text-xs font-bold tracking-widest hover:bg-[#9E8B62] hover:text-white transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;