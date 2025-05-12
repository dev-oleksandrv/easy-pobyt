"use client";

import { motion } from "framer-motion";

export function HomeFeatures() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: "AI-Powered Mock Interviews",
      description:
        "Practice with realistic interview simulations that adapt to your responses and provide detailed feedback on your performance.",
      color: "#E12D39",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
      ),
      title: "Comprehensive Test Practice",
      description:
        "Access hundreds of questions about Polish history, culture, and government that are likely to appear on your Karta Pobytu test.",
      color: "#0C3B5F",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: "Multilingual Support",
      description:
        "Practice in your preferred language with support for English, Polish, Ukrainian, and Belarusian.",
      color: "#FFD700",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      ),
      title: "Energy-Based System",
      description:
        "Start with 10 free energy points to explore the platform. Each test costs 1 point, and each interview costs 5 points.",
      color: "#E12D39",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.68 2.75a2.6 2.6 0 0 1 4.64 0l4.24 8.6c.22.46.32.96.28 1.47l-.45 5.79a2.75 2.75 0 0 1-2.52 2.52l-8.4.65a2.75 2.75 0 0 1-2.95-2.26l-1.29-6.11a2.75 2.75 0 0 1 .06-1.34l3.04-8.87c.36-1.05 1.36-1.77 2.47-1.77"></path>
        </svg>
      ),
      title: "Premium Benefits",
      description:
        "Upgrade to Premium for unlimited energy, priority support, and exclusive content for just $2.99 per month.",
      color: "#FFD700",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-9"></path>
          <path d="M14 17H5"></path>
          <circle cx="17" cy="17" r="3"></circle>
          <circle cx="7" cy="7" r="3"></circle>
        </svg>
      ),
      title: "Performance Tracking",
      description:
        "Monitor your progress with detailed statistics and identify areas where you need more practice.",
      color: "#0C3B5F",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C3B5F] mb-4 font-['Poppins']">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Easy Pobyt provides all the tools and resources you need to prepare for your Karta
            Pobytu application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0C3B5F] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-[#F8F9FA] rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0C3B5F] mb-4 font-['Poppins']">
                  How It Works
                </h3>
                <p className="text-gray-600 mb-6">
                  Easy Pobyt makes preparing for your Karta Pobytu simple and effective. Follow
                  these steps to maximize your chances of success.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C3B5F] mb-1">Create a Free Account</h4>
                      <p className="text-gray-600">
                        Sign up and get 10 energy points to start practicing immediately.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C3B5F] mb-1">Take Practice Tests</h4>
                      <p className="text-gray-600">
                        Test your knowledge of Polish history, culture, and government.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C3B5F] mb-1">Practice Mock Interviews</h4>
                      <p className="text-gray-600">
                        Simulate real interview scenarios and get feedback on your responses.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C3B5F] mb-1">Track Your Progress</h4>
                      <p className="text-gray-600">
                        Monitor your improvement and focus on areas that need more practice.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0 font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0C3B5F] mb-1">Ace Your Karta Pobytu</h4>
                      <p className="text-gray-600">
                        Feel confident and prepared for your actual test and interview.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0C3B5F] p-8 md:p-12 flex items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-['Poppins']">
                    Why Users Love Easy Pobyt
                  </h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="text-white">
                        <p>
                          Realistic interview questions that actually appeared in my Karta Pobytu
                          interview
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="text-white">
                        <p>Detailed feedback that helped me improve my answers and confidence</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="text-white">
                        <p>
                          Being able to practice in my native language made preparation much easier
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#E12D39] text-white flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="text-white">
                        <p>
                          The free version gave me enough practice to pass my test on the first try
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
