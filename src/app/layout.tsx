import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./loader.css";
import ThemeProviderWrapper from "./_components/ThemeProviderWraper";
import MyNavbar from "./_components/MyNavbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeSlu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} darkTheme ` }>
        <ThemeProviderWrapper>
          <MyNavbar />
          <div className="mt-28">
        {children}
        </div>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
