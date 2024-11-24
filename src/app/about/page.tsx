import React from 'react';
import { Scale, Heart, Brain, Calculator, Utensils, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Understanding Your
              <span className="text-pink-600"> Cheat Meals</span> Better
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Making informed choices about your favorite restaurant meals without compromising on enjoyment.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Better Cheat Days was founded with a simple goal: to help people enjoy their favorite restaurant meals while staying mindful of their nutritional choices. We believe that knowledge is power, and understanding what's in your food leads to better decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Nutrition Data</h3>
              <p className="text-gray-600">
                Access detailed nutritional information from major restaurant chains, verified and updated regularly for accuracy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conscious Choices</h3>
              <p className="text-gray-600">
                Make informed decisions about your cheat meals by understanding their nutritional impact on your diet.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Balance & Enjoyment</h3>
              <p className="text-gray-600">
                Learn how to balance your favorite meals with your health goals without sacrificing enjoyment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Helps Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Better Cheat Days Helps You</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="h-5 w-5 text-pink-600" />
                For Mindful Eaters
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500 shrink-0 mt-1" />
                  <span>Detailed nutritional breakdowns of menu items</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500 shrink-0 mt-1" />
                  <span>Easy comparison between different menu options</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500 shrink-0 mt-1" />
                  <span>Make informed choices while dining out</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                For Health Enthusiasts
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500 shrink-0 mt-1" />
                  <span>Track macros and calories accurately</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500 shrink-0 mt-1" />
                  <span>Find healthier alternatives at your favorite restaurants</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="h-5 w-5 text-pink-500 shrink-0 mt-1" />
                  <span>Balance your fitness goals with social life</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-pink-500 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make Smarter Choices?
          </h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Start exploring nutritional information from your favorite restaurants and make every cheat meal count.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-pink-50 transition-colors duration-300"
          >
            Get Started
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;