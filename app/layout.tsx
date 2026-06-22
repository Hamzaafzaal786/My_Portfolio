import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Syed Hamza Afzaal | Software Engineer Portfolio",
  description: "Software Engineering student passionate about building innovative solutions with Flutter, MERN Stack, and C#.",
  keywords: "Syed Hamza Afzaal, Software Engineer, Portfolio, Flutter, MERN Stack, C#, Developer",
  authors: [{ name: "Syed Hamza Afzaal" }],
  openGraph: {
    title: "Syed Hamza Afzaal | Software Engineer Portfolio",
    description: "Software Engineering student passionate about building innovative solutions with Flutter, MERN Stack, and C#.",
    url: "https://portfolio.vercel.app",
    siteName: "Syed Hamza Afzaal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Hamza Afzaal Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}