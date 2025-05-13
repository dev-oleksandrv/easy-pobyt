"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data - in a real app, this would come from an API or database
const mockResults = [
  { id: 1, type: "interview", score: 85, date: "2025-05-10", title: "General Interview" },
  { id: 2, type: "test", score: 90, date: "2025-05-09", title: "Polish History" },
  { id: 3, type: "interview", score: 72, date: "2025-05-08", title: "Personal Background" },
  { id: 4, type: "test", score: 95, date: "2025-05-07", title: "Polish Culture" },
];

export default function PracticeHomeResults() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredResults = mockResults.filter((result) => {
    if (activeTab === "all") return true;
    return result.type === activeTab;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden mt-8"
    >
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-[#0C3B5F] font-['Poppins']">Latest Results</h2>
      </div>

      <div className="p-5">
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-5 rounded-full bg-gray-100 p-1">
            <TabsTrigger
              value="all"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#0C3B5F] data-[state=active]:shadow-sm"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="interview"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#0C3B5F] data-[state=active]:shadow-sm"
            >
              Interviews
            </TabsTrigger>
            <TabsTrigger
              value="test"
              className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#0C3B5F] data-[state=active]:shadow-sm"
            >
              Tests
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            {filteredResults.length > 0 ? (
              <div className="space-y-3">
                {filteredResults.map((result) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          result.type === "interview" ? "bg-[#E12D39]" : "bg-[#0C3B5F]"
                        }`}
                      >
                        {result.type === "interview" ? (
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
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                          </svg>
                        ) : (
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
                            <path d="M9 11l3 3L22 4"></path>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{result.title}</div>
                        <div className="text-sm text-gray-500">{result.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`text-lg font-bold ${
                          result.score >= 90
                            ? "text-green-600"
                            : result.score >= 70
                              ? "text-amber-600"
                              : "text-red-600"
                        }`}
                      >
                        {result.score}%
                      </div>
                      <div className="w-8 h-8">
                        {result.score >= 90 ? (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                            <path
                              d="M8 12L11 15L16 9"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : result.score >= 70 ? (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="#FF9800" />
                            <path
                              d="M12 8V12"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <circle cx="12" cy="16" r="1" fill="white" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="#E12D39" />
                            <path
                              d="M15 9L9 15"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M9 9L15 15"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500">
                <div className="w-16 h-16 mx-auto mb-3 opacity-50">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 9H9.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 9H15.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 14H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p>No results found. Complete some tests or interviews to see your results here.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
