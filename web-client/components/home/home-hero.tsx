"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8F9FA] py-16 md:py-24">
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#E12D39]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#0C3B5F]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-[#0C3B5F]/10 text-[#0C3B5F] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Your path to successful Karta Pobytu
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C3B5F] leading-tight font-['Poppins'] mb-6">
              Ace Your Karta Pobytu <span className="text-[#E12D39]">Test & Interview</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Interactive mock interviews and practice tests designed to help you prepare for your
              Karta Pobytu application. Start practicing today and increase your chances of success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/register">
                <Button className="bg-gradient-to-r from-[#E12D39] to-[#FF4D58] text-white py-6 px-8 rounded-full text-lg font-medium shadow-lg border border-[#E12D39]/20 hover:shadow-xl transition-all">
                  Start Practicing for Free
                </Button>
              </Link>
              <a href="#features">
                <Button
                  variant="outline"
                  className="py-6 px-8 rounded-full text-lg font-medium border-[#0C3B5F] text-[#0C3B5F]"
                >
                  Learn More
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#0C3B5F] flex items-center justify-center text-white text-xs">
                  PL
                </div>
                <div className="w-10 h-10 rounded-full bg-[#E12D39] flex items-center justify-center text-white text-xs">
                  UA
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0C3B5F] flex items-center justify-center text-white text-xs">
                  BY
                </div>
                <div className="w-10 h-10 rounded-full bg-[#E12D39] flex items-center justify-center text-white text-xs">
                  EN
                </div>
              </div>
              <span className="text-gray-600">Available in 4 languages</span>
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                <div className="bg-[#0C3B5F] text-white p-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E12D39]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-sm">Easy Pobyt - Mock Interview</div>
                </div>
                <div className="p-6">
                  <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0C3B5F] flex items-center justify-center text-white flex-shrink-0">
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
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#0C3B5F] mb-1">Interviewer</div>
                        <p className="text-gray-600">
                          Dlaczego chcesz mieszkać w Polsce? Opowiedz o swoich planach na
                          przyszłość.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F8F9FA] rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E12D39] flex items-center justify-center text-white flex-shrink-0">
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
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-[#0C3B5F] mb-1">You</div>
                        <p className="text-gray-600">Chcę mieszkać w Polsce, ponieważ...</p>
                        <div className="flex items-center gap-1 mt-2">
                          <div className="h-5 w-5 rounded-full bg-[#0C3B5F] flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span className="text-xs text-[#0C3B5F]">Recording your answer...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 bg-[#FFD700] rounded-lg p-3 shadow-lg rotate-6">
                <div className="text-[#0C3B5F] font-medium">Polish History Test</div>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-4 h-4 rounded-full bg-[#0C3B5F]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#0C3B5F]"></div>
                  <div className="w-4 h-4 rounded-full bg-[#0C3B5F]"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                </div>
                <div className="text-xs text-[#0C3B5F] mt-1">3/5 correct</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg -rotate-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#E12D39] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#0C3B5F] font-medium">Energy</div>
                    <div className="text-gray-600 text-sm">7/10 remaining</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="text-3xl font-bold text-[#E12D39] mb-2">500+</div>
            <div className="text-[#0C3B5F]">Practice Questions</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-[#E12D39] mb-2">10k+</div>
            <div className="text-[#0C3B5F]">Happy Users</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="text-3xl font-bold text-[#E12D39] mb-2">92%</div>
            <div className="text-[#0C3B5F]">Success Rate</div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <div className="text-3xl font-bold text-[#E12D39] mb-2">4</div>
            <div className="text-[#0C3B5F]">Languages</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
