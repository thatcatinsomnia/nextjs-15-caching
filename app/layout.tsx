import type { Metadata } from "next";
import localFont from "next/font/local";
import HelperMenu from "./HelperMenu";
import "./globals.css";

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
  title: "Next 15 Caching",
  description: "Next 15 Caching Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto px-6 pb-12 max-w-3xl bg-[#1f1f29] text-white antialiased`}
      >
        {children}

        <HelperMenu />
      </body>
    </html>
  );
}

