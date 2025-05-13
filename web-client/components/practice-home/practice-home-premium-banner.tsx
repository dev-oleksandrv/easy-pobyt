"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { XIcon } from "lucide-react";

export default function PracticeHomePremiumBanner() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-[#0C3B5F] to-[#1A5B8F] text-white p-5 rounded-2xl relative overflow-hidden shadow-lg mt-8"
        >
          <button
            className="absolute top-3 right-3 text-white/70 hover:text-white bg-black/20 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => setShowBanner(false)}
          >
            <XIcon className="size-4" />
          </button>

          <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#FFD700]/20"></div>
          <div className="absolute -left-6 -bottom-6 w-16 h-16 rounded-full bg-[#E12D39]/20"></div>

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0C3B5F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.68 2.75a2.6 2.6 0 0 1 4.64 0l4.24 8.6c.22.46.32.96.28 1.47l-.45 5.79a2.75 2.75 0 0 1-2.52 2.52l-8.4.65a2.75 2.75 0 0 1-2.95-2.26l-1.29-6.11a2.75 2.75 0 0 1 .06-1.34l3.04-8.87c.36-1.05 1.36-1.77 2.47-1.77" />
              </svg>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold font-['Poppins']">Unlock Premium!</h3>
              <p className="text-white/80 mt-1">Get unlimited energy and ace your Karta Pobytu!</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0C3B5F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Unlimited mock interviews
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0C3B5F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Unlimited tests
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FFD700] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0C3B5F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  Priority support
                </li>
              </ul>
            </div>

            <div className="flex-shrink-0 text-center">
              <div className="text-3xl font-bold font-['Poppins']">$2.99</div>
              <div className="text-white/80 text-sm">per month</div>
              <motion.button
                className="mt-3 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#0C3B5F] py-2.5 px-8 rounded-full font-medium shadow-md border border-[#FFD700]/20 flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBanner(false)}
              >
                <span>Get Premium</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
