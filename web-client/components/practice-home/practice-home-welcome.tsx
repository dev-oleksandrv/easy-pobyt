"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GraduationCapIcon, XIcon } from "lucide-react";

export function PracticeHomeWelcome() {
  const [showWelcome, setShowWelcome] = useState(true);

  const closeWelcomeHandler = () => {
    setShowWelcome(false);
  };

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md p-6 mb-8 relative overflow-hidden"
        >
          <button
            onClick={closeWelcomeHandler}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center transition-colors"
          >
            <XIcon className="size-4" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-[#E12D39] flex items-center justify-center">
              <GraduationCapIcon className="text-white size-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0C3B5F] mb-2 font-['Poppins']">
                Welcome to <span className="text-[#E12D39]">Easy Pobyt</span>
              </h1>
              <p className="text-gray-600 max-w-3xl">
                Prepare for your Karta Pobytu test and interview with interactive practice sessions.
                Choose an activity below to get started.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
