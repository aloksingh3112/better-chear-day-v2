"use client";
import React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Pizza, Coffee, Salad } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-4xl">
        <Card className="p-4 sm:p-8 md:p-12 bg-white/80 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <Pizza className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              <Salad className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fast Food Nutrition Calculator
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
              Your ultimate tool for making informed fast food choices is almost
              here. Track macros, compare meals, and build your perfect
              combination.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
            <div className="space-y-2 px-2 sm:px-0">
              <h3 className="text-base sm:text-lg font-semibold text-blue-600">
                Coming Features
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span>Real-time macro tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span>Multiple restaurant comparison</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <span>Customizable meal builder</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2 px-2 sm:px-0">
              <h3 className="text-base sm:text-lg font-semibold text-purple-600">
                Supported Restaurants
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                  <span>McDonald's India</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                  <span>Burger King India</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></div>
                  <span>Starbucks & More</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto text-center px-2 sm:px-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Get Notified When We Launch
            </h3>
            {isSubscribed ? (
              <div className="text-green-600 font-medium text-sm sm:text-base">
                Thanks for subscribing! We'll notify you when we launch.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ComingSoon;
