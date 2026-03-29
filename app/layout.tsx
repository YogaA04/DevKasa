import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/molecules/layout/navbar";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevKasa",
  description: "Personal Knowledge & Code Snippet Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans",)}
    >
      <body className="h-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
