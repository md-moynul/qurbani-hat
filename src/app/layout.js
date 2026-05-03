import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";
import NextThemeprovider from "@/providers/NextThemeprovider";

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} `}
    >
      <body className="bg-background text-foreground  transition-all duration-500 ">
        <NextThemeprovider>


          <Navbar />
          <main className="px-5 lg:px-0">
            <ToastContainer />
            {children}
          </main>
          <Footer />
        </NextThemeprovider>
      </body>
    </html >
  );
}
