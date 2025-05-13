import type { Metadata } from "next";
import { HomeHeader } from "@/components/home/home-header";
import { HomeFooter } from "@/components/home/home-footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Easy Pobyt - Ace Your Karta Pobytu Test & Interview",
  description:
    "Prepare for your Karta Pobytu with interactive mock interviews and practice tests. Start for free today!",
};

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />

      {children}

      <HomeFooter />
    </div>
  );
}
