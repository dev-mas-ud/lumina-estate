import { DefaultSeo } from "next-seo";

export default function GlobalMetaTags() {
  return (
    <DefaultSeo
      defaultTitle="Lumina Properties Nigeria - Buy, Sell & Rent Real Estate"
      description="Lumina Properties Nigeria helps you find your dream home, investment property, or rental apartment. Explore verified listings of houses, lands, and commercial real estate across Nigeria."
      canonical="https://lumina-estate.vercel.app/"
      additionalMetaTags={[
        {
          name: "keywords",
          content:
            "real estate Nigeria, houses for sale Lagos, rent apartments Abuja, buy land Nigeria, luxury homes Lagos, affordable housing Nigeria, property investment Nigeria, commercial real estate Nigeria",
        },
        {
          name: "charset",
          content: "utf-8",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "preload",
          href: "/fonts/poppins-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/poppins-semibold.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-bold.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href: "/fonts/roboto-regular.woff2",
          as: "font",
          type: "font/woff2",
          crossOrigin: "anonymous",
        },
      ]}
      openGraph={{
        type: "website",
        url: "https://lumina-estate.vercel.app/",
        title: "Lumina Properties Nigeria - Buy, Sell & Rent Real Estate",
        description:
          "Discover houses, apartments, lands, and commercial real estate across Nigeria. Buy, sell, or rent with confidence through Lumina Properties Nigeria.",
        locale: "en_NG",
        images: [
          {
            url: "https://lumina-estate.vercel.app/hero-img.webp",
            width: 1200,
            height: 630,
            alt: "Lumina Properties Nigeria - Real Estate Listings",
          },
          {
            url: "https://lumina-estate.vercel.app/hero-img.webp",
            width: 2400,
            height: 1260,
            alt: "Lumina Properties Nigeria - Real Estate Listings",
          },
        ],
        site_name: "Lumina Properties Nigeria",
      }}
    />
  );
}
