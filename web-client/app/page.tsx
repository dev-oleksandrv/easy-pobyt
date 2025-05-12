import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { HomeHeader } from "@/components/home/home-header";
import { HomeHero } from "@/components/home/home-hero";
import { HomeFeatures } from "@/components/home/home-features";
import { HomePricing } from "@/components/home/home-pricing";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeCta } from "@/components/home/home-cta";
import { HomeFooter } from "@/components/home/home-footer";

export const metadata: Metadata = {
  title: "Easy Pobyt - Ace Your Karta Pobytu Test & Interview",
  description:
    "Prepare for your Karta Pobytu with interactive mock interviews and practice tests. Start for free today!",
};

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      <HomeHero />
      <HomeFeatures />
      <HomePricing />
      <HomeFaq />
      <HomeCta />
      <HomeFooter />
    </div>
  );
}
