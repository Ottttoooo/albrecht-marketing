import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ['latin'], // Choose subsets as needed
  variable: '--font-inter', // Optional: custom CSS variable name
})


export const metadata: Metadata = {
  title: "Albrecht Marketing",
  description: "Empowering businesses with modern marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <header><NavBar/></header>
        <main>{children}</main>
        <footer><Footer/></footer>
      </body>
    </html>
  );
}
