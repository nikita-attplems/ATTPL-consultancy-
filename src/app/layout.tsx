import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from "next-intl";
import ReduxProvider from "@/redux/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "ATTPL Consultancy Marketplace | India's Integrated Enterprise Consulting Marketplace",
  description:
    "Discover verified consultants, legal professionals, chartered accountants, startup advisors, compliance experts, and technology partners through ATTPL Consultancy Marketplace. Explore enterprise consulting, registrations, certifications, legal, compliance, and business growth services across India.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = (await import("../../messages/en.json")).default;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <Navbar />
          <NextIntlClientProvider locale="en" messages={messages}>
            <ReduxProvider>{children}</ReduxProvider>
          </NextIntlClientProvider>

          <Footer />
        </div>
      </body>
    </html>
  );
}
