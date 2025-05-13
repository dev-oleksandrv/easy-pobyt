"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function PracticeHomeNavigation() {
  const router = useRouter();

  const handleNavigation = (path: string, energyCost: number) => {
    router.push(path);
  };

  const MotionCard = motion.div;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <MotionCard
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-to-br from-[#E12D39]/95 to-[#FF4D58]/95 text-white rounded-2xl shadow-lg cursor-pointer overflow-hidden relative hover:shadow-xl transition-all"
        onClick={() => handleNavigation("/practice/interview", 5)}
      >
        <div className="absolute top-3 right-3 bg-white text-[#E12D39] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          <span>5</span>
        </div>

        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-6 bg-white/20 rounded-full p-4">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M140 80C140 102.091 122.091 120 100 120C77.9086 120 60 102.091 60 80C60 57.9086 77.9086 40 100 40C122.091 40 140 57.9086 140 80Z"
                fill="white"
              />
              <path
                d="M60 140C60 117.909 77.9086 100 100 100C122.091 100 140 117.909 140 140V160H60V140Z"
                fill="white"
              />
              <path
                d="M100 120C122.091 120 140 102.091 140 80H160C160 113.137 133.137 140 100 140C66.8629 140 40 113.137 40 80H60C60 102.091 77.9086 120 100 120Z"
                fill="white"
                fillOpacity="0.5"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold font-['Poppins'] mb-2">Mock Interview</h2>
          <p className="text-white/80 mb-6">
            Practice your interview skills with AI-powered simulations
          </p>

          <div className="mt-auto bg-white text-[#E12D39] py-3 px-8 rounded-full font-medium shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all">
            <span>Start Interview</span>
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
          </div>
        </div>
      </MotionCard>

      <MotionCard
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-gradient-to-br from-[#0C3B5F]/95 to-[#1A5B8F]/95 text-white rounded-2xl shadow-lg cursor-pointer overflow-hidden relative hover:shadow-xl transition-all"
        onClick={() => handleNavigation("/practice/tests", 1)}
      >
        <div className="absolute top-3 right-3 bg-white text-[#0C3B5F] px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          <span>1</span>
        </div>

        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-6 bg-white/20 rounded-full p-4">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect x="50" y="60" width="100" height="80" rx="8" fill="white" />
              <rect x="60" y="80" width="80" height="10" rx="5" fill="#E12D39" fillOpacity="0.7" />
              <rect x="60" y="100" width="80" height="10" rx="5" fill="#E12D39" fillOpacity="0.7" />
              <rect x="60" y="120" width="40" height="10" rx="5" fill="#E12D39" fillOpacity="0.7" />
              <circle cx="150" cy="50" r="20" fill="#FFD700" />
              <path
                d="M145 50L150 55L155 45"
                stroke="#0C3B5F"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold font-['Poppins'] mb-2">Tests</h2>
          <p className="text-white/80 mb-6">
            Test your knowledge with questions about Polish history and culture
          </p>

          <div className="mt-auto bg-white text-[#0C3B5F] py-3 px-8 rounded-full font-medium shadow-md flex items-center justify-center gap-2 hover:shadow-lg transition-all">
            <span>Start Test</span>
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
          </div>
        </div>
      </MotionCard>
    </div>
  );
}
