import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header";

// Add Helvetica Neue LT Std
const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeueLTStd-Lt.woff",
  variable: "--font-helvetica-neue",
  weight: "100 900",
});

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
  title: "Optiwyse",
  description: "Optiwyse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <header className="p-4 text-center">
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
