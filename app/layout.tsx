import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './assets/Header'
import { AppWrapper } from "./assets/Context/page";
import Footer from "./assets/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Header />
          {children}
          <Footer/>
        </AppWrapper>
      </body>
    </html>
  );
}
