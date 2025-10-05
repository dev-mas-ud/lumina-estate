"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Provider } from "@/components/ui/provider";
import { FullPageLoader } from "@/components/Loader";
import { useRouteChangeHandler } from "hooks/useRouteChangeHandler";
import GlobalMetaTags from "@/components/app/GlobalMetaTags";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useRouteChangeHandler(router, setLoading, setError);

  const renderContent = () => {
    if (loading) return <FullPageLoader />;
    if (!Component)
      return (
        <h1>
          Unable to render page component. HINT: Check whether PageProps is
          provided.
        </h1>
      );
    return <Component {...pageProps} />;
  };

  if (error) {
    return (
      <Provider>
        <h1>{error}</h1>
      </Provider>
    );
  }

  return (
    <Provider p={0} m={0}>
      <GlobalMetaTags />
      <Head>
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devmasud" />
        <meta name="twitter:creator" content="@devmasud" />
        <meta
          name="twitter:title"
          content="Websites by Masud - Affordable Web Design & Development in Nigeria"
        />
        <meta
          name="twitter:description"
          content="Websites by Masud helps Nigerian businesses grow online with modern, mobile-friendly, and affordable websites."
        />
        <meta
          name="twitter:image"
          content="https://bytedesign.com.ng/images/me.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://bytedesign.com.ng/#organization",
              name: "ByteDesign",
              url: "https://bytedesign.com.ng",
              image: "https://bytedesign.com.ng/images/me.jpg",
              description:
                "Websites by Masud creates affordable, mobile-friendly websites and web apps for Nigerian businesses.",
              telephone: "+2347065656558",
              email: "contact@bytedesign.com.ng",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Allen Avenue", // update with real
                addressLocality: "Ikeja",
                addressRegion: "Lagos",
                postalCode: "100001",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.6018, // update with your coordinates
                longitude: 3.3515,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: [
                "https://twitter.com/devmasud",
                "https://web.facebook.com/profile.php?id=61581299132973",
                "https://www.instagram.com/dev__masud",
                "https://www.linkedin.com/in/dev-masud",
              ],
              areaServed: [
                {
                  "@type": "Place",
                  name: "Nigeria",
                },
                {
                  "@type": "Place",
                  name: "Lagos",
                },
                {
                  "@type": "Place",
                  name: "Abuja",
                },
              ],
              serviceType: [
                "Web Design",
                "Web Development",
                "Landing Pages",
                "Custom Web Apps",
              ],
            }),
          }}
        />
      </Head>
      {renderContent()}
      <Analytics />
    </Provider>
  );
}
