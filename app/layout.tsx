import type { Metadata } from "next";
import { Raleway, Fjalla_One } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });

export const metadata: Metadata = {
  metadataBase: new URL('https://tiger365play.com'),
  verification: {
    google: "9jPgSqTrsVjJmMlesug1jkjnR6oRixaAU2E5wsfm4hI",
  },
  title: "Tiger365 Platform Ultimate Guide For Indian Players",
  description: "Welcome to Tiger365, India's premier online sports and gaming platform. Get your official Tiger365 ID instantly on WhatsApp, log in securely, and enjoy high-stakes live casino and sportsbooks.",
  keywords: ["tiger365", "tiger365 login", "tiger365 register", "tiger365 id", "tiger365 exchange", "tiger 365", "tiger365 official ID"],
  applicationName: 'Tiger365',
  authors: [{ name: 'Tiger365' }],
  creator: 'Tiger365',
  publisher: 'Tiger365',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tiger365 Platform Ultimate Guide For Indian Players",
    description: "Welcome to Tiger365, India's premier online sports and gaming platform. Get your official Tiger365 ID instantly on WhatsApp, log in securely, and enjoy high-stakes live casino and sportsbooks.",
    url: "https://tiger365play.com",
    siteName: "Tiger365",
    images: [
      {
        url: "https://tiger365com.com/wp-content/uploads/2025/04/logo-text-768x134.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official Logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tiger365 Platform Ultimate Guide For Indian Players",
    description: "Welcome to Tiger365, India's premier online sports and gaming platform. Get your official Tiger365 ID instantly on WhatsApp, log in securely, and enjoy high-stakes live casino and sportsbooks.",
    images: ["https://tiger365com.com/wp-content/uploads/2025/04/logo-text-768x134.png"],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${raleway.variable} ${fjallaOne.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
          '--footer-bg': SITE_CONFIG.theme.footerBg,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
