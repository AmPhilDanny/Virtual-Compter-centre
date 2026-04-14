import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fhinovax AI System",
  description: "Advanced AI Service Delivery platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-['Inter'] relative min-h-screen">
        {/* Ambient background active globally */}
        <div className="fixed inset-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-brand-blue-dark rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-brand-gold/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
