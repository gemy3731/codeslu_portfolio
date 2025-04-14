import { Big_Shoulders_Inline_Text, Geist, Geist_Mono, Orbitron } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const bigShouldersInline = Big_Shoulders_Inline_Text({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
});