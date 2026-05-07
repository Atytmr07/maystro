import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maystro Hair & Nail | Lara, Antalya",
  description:
    "Lara'nın kalbinde premium güzellik deneyimi. Saç tasarımı, manikür, ipek kirpik ve daha fazlası.",
  keywords: ["güzellik salonu", "kuaför", "manikür", "ipek kirpik", "Lara", "Antalya"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Maystro Hair & Nail",
  description:
    "Lara'nın kalbinde premium güzellik deneyimi. Saç tasarımı, manikür, pedikür, ipek kirpik, kaş ve kirpik lifting.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1968. Sk. 14B",
    addressLocality: "Lara",
    addressRegion: "Antalya",
    postalCode: "07160",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.852868,
    longitude: 30.749547,
  },
  telephone: "+905558770407",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/maystro.studioo/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-[#F2EFE6] text-[#1C1917] antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
