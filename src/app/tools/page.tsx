"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Pizza, Coffee, Salad } from "lucide-react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Countdown timer

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email subscription
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="p-8 sm:p-12 bg-white/80 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center gap-6 mb-6">
              <Pizza className="w-8 h-8 text-purple-500" />

              <Coffee className="w-8 h-8 text-orange-500" />
              <Salad className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fast Food Nutrition Calculator
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Your ultimate tool for making informed fast food choices is almost
              here. Track macros, compare meals, and build your perfect
              combination.
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-blue-600">
                Coming Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Real-time macro tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Multiple restaurant comparison
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Customizable meal builder
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-purple-600">
                Supported Restaurants
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  McDonald's India
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  Burger King India
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  Starbucks & More
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">
              Get Notified When We Launch
            </h3>
            {isSubscribed ? (
              <div className="text-green-600 font-medium">
                Thanks for subscribing! We'll notify you when we launch.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
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
