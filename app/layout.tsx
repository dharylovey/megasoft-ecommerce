import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopProvider from "@/components/ShopProvider";
import ShoppingCart from "@/components/ShoppingCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Megasoft Ecommerce",
  description: "Hygienic Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <ShopProvider>
          <Navbar />
          <ShoppingCart />
          {children}
        </ShopProvider>
        <Footer />
      </body>
    </html>
  );
}
