import type { Metadata } from "next";
import { Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";
import { twMerge } from "tailwind-merge";

const kantumruy_Pro = Kantumruy_Pro({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Kayafit",
  description: "find fitness and balance your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body
        className={twMerge(kantumruy_Pro.className, "antialiased bg-black")}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}