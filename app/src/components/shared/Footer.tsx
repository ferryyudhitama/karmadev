export default function Footer() {
  return (
    <footer className="border-t bg-black">
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white ">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Karma Group</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
