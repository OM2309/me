import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { Oneko } from "@/components/Oneko";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: true,
  fallback: ['monospace'],
});


export const metadata: Metadata = {
  title: 'Anurag Sharma - Full Stack Developer',
  description:
    'Full Stack Developer from India specializing in React, Next.js, and TypeScript. Find me on GitHub as [your-github-username]. Building scalable web applications with modern technologies.',
  openGraph: {
    title: 'Anurag Sharma - Full Stack Developer',
    description:
      'Full Stack Developer from India specializing in React, Next.js, and TypeScript. Find me on GitHub as [your-github-username]. Building scalable web applications with modern technologies.',
    url: 'https://anurag-uat.vercel.app',
    siteName: 'Anurag Sharma Portfolio',
    images: [
      {
        url: 'https://anurag-uat.vercel.app/og?title=Anurag%20Sharma%20-%20Full%20Stack%20Developer&description=Building%20scalable%20web%20applications%20with%20modern%20technologies',
        width: 1200,
        height: 630,
        alt: 'Anurag Sharma Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anurag Sharma - Full Stack Developer',
    description:
      'Full Stack Developer from India specializing in React, Next.js, and TypeScript.',
    images: [
      'https://anurag-uat.vercel.app/og?title=Anurag%20Sharma%20-%20Full%20Stack%20Developer&description=Building%20scalable%20web%20applications%20with%20modern%20technologies',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            toastOptions={{
              duration: 5000,
              style: {
                fontFamily: 'var(--font-dm-sans)',
              },
            }}
          />

          <Oneko />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
