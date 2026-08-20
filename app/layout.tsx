import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Singh — ECE Engineer & Software Developer",
  description:
    "Final-year Electronics & Communication Engineering student in Bengaluru. Builder of EduNite — an alumni-student mentorship platform with real-time messaging.",
  openGraph: {
    title: "Harsh Singh — ECE Engineer & Software Developer",
    description:
      "Building software, studying signals, solving hard problems. Featured work: EduNite mentorship platform.",
    url: "https://harshsingh.dev",
    siteName: "Harsh Singh",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}