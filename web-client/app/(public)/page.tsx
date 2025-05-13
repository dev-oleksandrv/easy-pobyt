import { HomeHero } from "@/components/home/home-hero";
import { HomeFeatures } from "@/components/home/home-features";
import { HomePricing } from "@/components/home/home-pricing";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeCta } from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomePricing />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
