import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PracticeHeader } from "@/components/practice-common/practice-header";

export const metadata: Metadata = {
  title: "Easy Pobyt - Ace Your Karta Pobytu Test & Interview",
  description:
    "Prepare for your Karta Pobytu with interactive mock interviews and practice tests. Start for free today!",
};

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PracticeLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PracticeHeader />

      <main className="flex-1 container mx-auto py-8" style={{ paddingBottom: "4rem" }}>
        {children}
      </main>

      <footer className="bg-[#0C3B5F] text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2025 Easy Pobyt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
