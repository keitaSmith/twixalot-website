import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = new URL("https://twixalot.com");
const siteTitle = "Twixalot | Premium Websites, Web Apps and Digital Systems";
const siteDescription =
  "Twixalot is a Zurich, Switzerland-based freelance software studio building polished websites, web apps, CMS platforms and automations.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  applicationName: "Twixalot",
  authors: [{ name: "Twixalot" }],
  creator: "Twixalot",
  publisher: "Twixalot",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logos/twixalot-logo-icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: [{ url: "/logos/twixalot-logo-icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Twixalot",
    images: [
      {
        url: "/twixalot-og.png",
        width: 1200,
        height: 630,
        alt: "Twixalot logo on a dark blue, magenta and electric blue branded background",
      },
      {
        url: "/twixalot-icon-preview.png",
        width: 1200,
        height: 1200,
        alt: "Twixalot wizard hat logo icon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twixalot-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#010613] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
