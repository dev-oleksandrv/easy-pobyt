"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";

export default function PublicAuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <main className="flex-1 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Tabs
            defaultValue="login"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="px-6 pt-6">
              <TabsList className="grid grid-cols-2 w-full rounded-full bg-gray-100 p-1">
                <TabsTrigger
                  value="login"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#0C3B5F] data-[state=active]:shadow-sm"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-[#0C3B5F] data-[state=active]:shadow-sm"
                >
                  Register
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="login" className="p-6">
              <LoginForm />
            </TabsContent>

            <TabsContent value="register" className="p-6">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-6 text-gray-600">
          <p>
            By continuing, you agree to Easy Pobyt's{" "}
            <Link href="/terms" className="text-[#E12D39] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#E12D39] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </main>
  );
}
