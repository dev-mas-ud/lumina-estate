"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { Provider } from "@/components/ui/provider";
import { FullPageLoader } from "@/components/Loader";
import { useRouteChangeHandler } from "hooks/useRouteChangeHandler";
import GlobalMetaTags from "@/components/app/GlobalMetaTags";
import Head from "next/head";
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
          content="Lumina Properties Nigeria - Buy, Sell & Rent Real Estate"
        />
        <meta
          name="twitter:description"
          content="Discover houses, apartments, lands, and commercial real estate across Nigeria. Buy, sell, or rent with confidence through Lumina Properties Nigeria."
        />
        <meta
          name="twitter:image"
          content="https://lumina-estate.vercel.app/featured-1.png"
        />
      </Head>
      {renderContent()}
    </Provider>
  );
}
