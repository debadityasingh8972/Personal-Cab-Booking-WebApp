import type { Metadata } from "next";
import { Inter, Outfit, Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cab GO - Your Trusted cab Booking Platform",
  description:
    "Book cabs easily with CABGO. Reliable service, affordable prices.",
  keywords: "CABGO, CAB booking, transportation, taxi, travel",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
