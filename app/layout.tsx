import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntelliMock",
  description: "AI Powered Mock Interview Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // set className="dark" in html tag
    <html lang="en">
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
