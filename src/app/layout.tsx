import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Jay | Fullstack Developer",
  description: "Portfolio of Jay, a Fullstack Developer building clean, performant digital products across the stack.",
  metadataBase: new URL("https://my-portfolio-six-amber.vercel.app"),
  openGraph: {
    title: "Jay | Fullstack Developer",
    description: "Portfolio of Jay, a Fullstack Developer building clean, performant digital products.",
    type: "website",
    images: ["https://i.ibb.co/rfxpL2VK/My-Passport.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay | Fullstack Developer",
    description: "Portfolio of Jay, a Fullstack Developer.",
    images: ["https://i.ibb.co/rfxpL2VK/My-Passport.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-inter bg-[#0a0a0a] text-white antialiased">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
