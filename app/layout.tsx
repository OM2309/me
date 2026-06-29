import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Oneko } from "@/components/Oneko";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
  fallback: ["monospace"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

const siteUrl = "https://anurag-uat.vercel.app";
const siteDescription =
  "I build full stack web and mobile apps with React and Next.js. Based in India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anurag Sharma",
  description: siteDescription,
  openGraph: {
    title: "Anurag Sharma",
    description: siteDescription,
    url: siteUrl,
    siteName: "Anurag Sharma",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anurag Sharma portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Sharma",
    description: siteDescription,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark" suppressHydrationWarning>
        <body
          className={`${jetbrainsMono.variable} ${dmSans.variable} ${instrumentSerif.variable} ${geist.variable} antialiased`}
        >
          <Analytics />
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Toaster
              position="bottom-right"
              richColors
              closeButton
              toastOptions={{
                duration: 5000,
                style: {
                  fontFamily: "var(--font-dm-sans)",
                },
              }}
            />

            <Oneko />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
