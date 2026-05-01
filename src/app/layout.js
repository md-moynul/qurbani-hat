import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qurbani Hat",
  description: "The Smartest Way to Book Your Qurbani.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={`${geistSans.variable} ${geistMono.variable} light `}
    >
      <body className="bg-background text-foreground">
        <Navbar/>
        <main className="px-5 md:px-0">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
