import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aura Gym | Best Gym in Ludhiana",
    template: "%s | Aura Gym",
  },

  description:
    "Aura Gym is a premium fitness center in Ludhiana offering strength training, personal training, weight loss programs, CrossFit, yoga and group classes across multiple locations.",

  keywords: [
    "best gym in Ludhiana",
    "gym in Ludhiana",
    "fitness center in Ludhiana",
    "personal training Ludhiana",
    "crossfit Ludhiana",
    "gym in BRS Nagar",
    "gym in Ansal Plaza",
    "gym in 32 Sector Ludhiana",
  ],

  metadataBase: new URL("https://auragym.in"),

  openGraph: {
    title: "Aura Gym | Best Gym in Ludhiana",
    description:
      "Premium fitness facilities across Ludhiana with expert trainers and modern equipment.",
    url: "https://auragym.in",
    siteName: "Aura Gym",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aura Gym | Best Gym in Ludhiana",
    description: "Premium fitness facilities across Ludhiana.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            name: "Aura Gym",
            url: "https://auragym.in",
            telephone: "+91 90147 00005",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ludhiana",
              addressRegion: "Punjab",
              addressCountry: "IN",
            },
          }),
        }}
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
