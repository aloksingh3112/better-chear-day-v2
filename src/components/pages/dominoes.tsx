// dominoes.tsx
"use client"
import React, { useState } from 'react';


const DominosGuide = () => {
  const [activeTab, setActiveTab] = useState('pizzas');

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Domino's Nutrition Guide</h1>
        <p className="text-gray-600">
          An average active adult requires 2,000 kcal energy per day, however, calorie needs may vary
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b">
        {['pizzas', 'pizza-mania', 'sides', 'beverages', 'allergens'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Core Pizzas Table */}
        {activeTab === 'pizzas' && (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Core Pizzas</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">Pizza Name</th>
                  <th className="p-3 text-left border">Size</th>
                  <th className="p-3 text-left border">Crust Type</th>
                  <th className="p-3 text-left border">Calories</th>
                  <th className="p-3 text-left border">Protein (g)</th>
                  <th className="p-3 text-left border">Carbs (g)</th>
                  <th className="p-3 text-left border">Fat (g)</th>
                  <th className="p-3 text-left border">Sodium (mg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Margherita</td>
                  <td className="p-3 border">Regular</td>
                  <td className="p-3 border">New Hand Tossed</td>
                  <td className="p-3 border">688</td>
                  <td className="p-3 border">24</td>
                  <td className="p-3 border">88</td>
                  <td className="p-3 border">26</td>
                  <td className="p-3 border">1367</td>
                </tr>
                {/* Add more pizza rows here */}
              </tbody>
            </table>
          </div>
        )}

        {/* Pizza Mania Table */}
        {activeTab === 'pizza-mania' && (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Pizza Mania</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">Item</th>
                  <th className="p-3 text-left border">Hand Tossed (kcal)</th>
                  <th className="p-3 text-left border">Pan (kcal)</th>
                  <th className="p-3 text-left border">Protein (g)</th>
                  <th className="p-3 text-left border">Carbs (g)</th>
                  <th className="p-3 text-left border">Fat (g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Onion</td>
                  <td className="p-3 border">547</td>
                  <td className="p-3 border">684</td>
                  <td className="p-3 border">17</td>
                  <td className="p-3 border">82</td>
                  <td className="p-3 border">16</td>
                </tr>
                {/* Add more pizza mania rows */}
              </tbody>
            </table>
          </div>
        )}

        {/* Sides Table */}
        {activeTab === 'sides' && (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Sides</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">Item</th>
                  <th className="p-3 text-left border">Serves</th>
                  <th className="p-3 text-left border">Calories</th>
                  <th className="p-3 text-left border">Protein (g)</th>
                  <th className="p-3 text-left border">Carbs (g)</th>
                  <th className="p-3 text-left border">Fat (g)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Garlic Bread</td>
                  <td className="p-3 border">2</td>
                  <td className="p-3 border">288</td>
                  <td className="p-3 border">5</td>
                  <td className="p-3 border">34</td>
                  <td className="p-3 border">14</td>
                </tr>
                {/* Add more sides rows */}
              </tbody>
            </table>
          </div>
        )}

        {/* Beverages Table */}
        {activeTab === 'beverages' && (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Beverages</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">Beverage</th>
                  <th className="p-3 text-left border">Calories</th>
                  <th className="p-3 text-left border">Sugar (g)</th>
                  <th className="p-3 text-left border">Sodium (mg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Fountain Pepsi</td>
                  <td className="p-3 border">43</td>
                  <td className="p-3 border">11</td>
                  <td className="p-3 border">11</td>
                </tr>
                {/* Add more beverage rows */}
              </tbody>
            </table>
          </div>
        )}

        {/* Allergens Table */}
        {activeTab === 'allergens' && (
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Allergen Information</h2>
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border">Product</th>
                  <th className="p-3 text-left border">Milk</th>
                  <th className="p-3 text-left border">Gluten</th>
                  <th className="p-3 text-left border">Soya</th>
                  <th className="p-3 text-left border">Nuts</th>
                  <th className="p-3 text-left border">Fish</th>
                  <th className="p-3 text-left border">Crustaceans</th>
                  <th className="p-3 text-left border">Sulphite</th>
                  <th className="p-3 text-left border">Egg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Margherita</td>
                  <td className="p-3 border">YES</td>
                  <td className="p-3 border">YES</td>
                  <td className="p-3 border">YES</td>
                  <td className="p-3 border">NO</td>
                  <td className="p-3 border">NO</td>
                  <td className="p-3 border">NO</td>
                  <td className="p-3 border">NO</td>
                  <td className="p-3 border">NO</td>
                </tr>
                {/* Add more allergen rows */}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer Notes */}
      <div className="text-sm text-gray-600 mt-8">
        <p>Notes:</p>
        <ul className="list-disc pl-5">
          <li>Regular serves 1 person, Medium serves 2 people and Large serves 4 people</li>
          <li>PP V = Pasta Pizza Veg</li>
          <li>PP NV = Pasta Pizza Non Veg</li>
          <li>SGB = Stuffed Garlic Bread</li>
        </ul>
      </div>
    </div>
  );
};

export default DominosGuide;