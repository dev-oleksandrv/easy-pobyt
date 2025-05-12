"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HomeCta() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0C3B5F] to-[#1A5B8F] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E12D39]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Poppins']">
              Ready to Ace Your Karta Pobytu?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of successful applicants who prepared with Easy Pobyt. Start practicing
              today and increase your chances of success!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#0C3B5F] py-6 px-8 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow">
                  Start Practicing for Free
                </Button>
              </Link>
              <Link href="/register?plan=premium">
                <Button
                  variant="outline"
                  className="bg-white/10 text-white border-white/20 py-6 px-8 rounded-full text-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Get Premium
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-white">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="text-white">7-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
