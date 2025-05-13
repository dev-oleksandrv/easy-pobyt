"use client";

import { motion } from "framer-motion";

export function PracticeHeaderEnergy() {
  // TODO
  const isPremium = false;
  // TODO
  const energy = 5;

  if (isPremium) {
    return (
      <motion.div
        className="flex items-center gap-1.5 bg-[#FFD700]/20 px-3 py-1.5 rounded-full"
        whileHover={{ scale: 1.05 }}
      >
        <div className="w-5 h-5 text-[#FFD700]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.68 2.75a2.6 2.6 0 0 1 4.64 0l4.24 8.6c.22.46.32.96.28 1.47l-.45 5.79a2.75 2.75 0 0 1-2.52 2.52l-8.4.65a2.75 2.75 0 0 1-2.95-2.26l-1.29-6.11a2.75 2.75 0 0 1 .06-1.34l3.04-8.87c.36-1.05 1.36-1.77 2.47-1.77" />
          </svg>
        </div>
        <span className="font-medium text-[#0C3B5F]">Premium</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-5 h-5 text-[#E12D39]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <div className="flex items-center">
        <span className="font-medium text-[#0C3B5F]">{energy}</span>
        <span className="text-gray-500">/10</span>
      </div>
    </motion.div>
  );
}
