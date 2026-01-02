import type { Metadata } from "next";
import Header from "./src/components/shared/Header";
import Footer from "./src/components/shared/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Karma Dev",
  description: "Karma Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://karmagroup.com/wp-content/themes/karma/vendor/font-awesome-6/pro/css/all.min.css"
        />
      </head>
      <body
        className={`antialiased`}
      >
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
