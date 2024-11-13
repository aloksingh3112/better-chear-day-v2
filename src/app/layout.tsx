import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from 'react'
import GoogleAnalytics from "@/components/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Better Cheat Days",
  description: "India's No.1 Cheat day design app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="bettercheatday" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white  top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="mt-10">
                <a href="/">
                  <img src="/images/logo.png"   
                  className="w-30 h-24 object-cover "/>
                </a>
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">ABOUT</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 font-medium">TOOLS & RESOURCES</a>
              <a href="#" className="text-pink-500 hover:text-pink-600 px-3 py-2 font-medium">NUTRITION GUIDES</a>
              <a href="https://www.buymeacoffee.com/bettercheatday" target="_blank">
              

              </a>
            </div>
          </div>
        </div>
      </nav>

       {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}

        

           {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2024 Better Cheat Days! All rights reserved.</p>
        </div>
      </footer>
    </div>
      </body>
    </html>
  );
}
