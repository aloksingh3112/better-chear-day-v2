"use client";
import React, { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const SubwayCalculator = () => {
  const [selections, setSelections] = useState({
    bread: "",
    proteins: [],
    cheeses: [],
    veggies: [],
    sauces: [],
  });
  const [activeStep, setActiveStep] = useState(1);

  const breads = [
    {
      name: "White Italian Bread",
      calories: 202,
      carbs: 36,
      protein: 7,
      fat: 3,
    },
    {
      name: "Parmesan Oregano Bread",
      calories: 261,
      carbs: 42,
      protein: 10,
      fat: 6,
    },
    {
      name: "Roasted Garlic Bread",
      calories: 242,
      carbs: 44,
      protein: 8,
      fat: 4,
    },
    { name: "Multigrain Bread", calories: 213, carbs: 40, protein: 8, fat: 2 },
    {
      name: "Multigrain Honey Oats Bread",
      calories: 267,
      carbs: 51,
      protein: 9,
      fat: 3,
    },
  ];

  const proteins = [
    {
      name: "Aloo Patty",
      calories: 94,
      carbs: 12,
      protein: 1,
      fat: 5,
      isVeg: true,
    },
    {
      name: "Paneer Tikka",
      calories: 157,
      carbs: 10,
      protein: 10,
      fat: 8,
      isVeg: true,
    },
    {
      name: "Chicken Tikka",
      calories: 138,
      carbs: 12,
      protein: 13,
      fat: 3,
      isVeg: false,
    },
    {
      name: "Chicken Teriyaki",
      calories: 67,
      carbs: 6,
      protein: 9,
      fat: 1,
      isVeg: false,
    },
    { name: "Tuna", calories: 117, carbs: 2, protein: 8, fat: 8, isVeg: false },
  ];

  const veggies = [
    { name: "Lettuce", calories: 19, carbs: 1, protein: 0, fat: 0 },
    { name: "Tomato", calories: 6, carbs: 1, protein: 0, fat: 0 },
    { name: "Cucumber", calories: 12, carbs: 1, protein: 0, fat: 0 },
    { name: "Onions", calories: 3, carbs: 1, protein: 0, fat: 0 },
    { name: "Green Capsicum", calories: 2, carbs: 0, protein: 0, fat: 0 },
    { name: "Jalapenos", calories: 2, carbs: 0, protein: 0, fat: 0 },
    { name: "Olives", calories: 3, carbs: 0, protein: 0, fat: 0 },
  ];

  const sauces = [
    { name: "Mayonnaise", calories: 76, carbs: 2, protein: 0, fat: 7 },
    { name: "Chipotle Southwest", calories: 67, carbs: 2, protein: 0, fat: 6 },
    { name: "Sweet Onion", calories: 34, carbs: 8, protein: 0, fat: 0 },
    { name: "Red Chilli", calories: 39, carbs: 7, protein: 1, fat: 1 },
    { name: "Barbeque", calories: 22, carbs: 5, protein: 0, fat: 0 },
  ];

  const cheeses = [
    { name: "Cheese Slice", calories: 38, carbs: 1, protein: 2, fat: 3 },
    { name: "Mozzarella Cheese", calories: 85, carbs: 0, protein: 8, fat: 6 },
  ];

  const handleSelection = (type, value) => {
    setSelections((prev) => {
      // Handle arrays (multiple selections)
      if (["proteins", "cheeses", "veggies", "sauces"].includes(type)) {
        const currentArray = prev[type];
        const newArray = currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value];
        return { ...prev, [type]: newArray };
      }
      // Handle single selections (bread)
      return { ...prev, [type]: value };
    });
  };

  const totalNutrition = useMemo(() => {
    let total = { calories: 0, carbs: 0, protein: 0, fat: 0 };

    // Bread nutrition
    const selectedBread = breads.find((b) => b.name === selections.bread);
    if (selectedBread) {
      total.calories += selectedBread.calories;
      total.carbs += selectedBread.carbs;
      total.protein += selectedBread.protein;
      total.fat += selectedBread.fat;
    }

    // Multiple proteins nutrition
    selections.proteins.forEach((proteinName) => {
      const protein = proteins.find((p) => p.name === proteinName);
      if (protein) {
        total.calories += protein.calories;
        total.carbs += protein.carbs;
        total.protein += protein.protein;
        total.fat += protein.fat;
      }
    });

    // Multiple cheeses nutrition
    selections.cheeses.forEach((cheeseName) => {
      const cheese = cheeses.find((c) => c.name === cheeseName);
      if (cheese) {
        total.calories += cheese.calories;
        total.carbs += cheese.carbs;
        total.protein += cheese.protein;
        total.fat += cheese.fat;
      }
    });

    // Veggies nutrition
    selections.veggies.forEach((veggieName) => {
      const veggie = veggies.find((v) => v.name === veggieName);
      if (veggie) {
        total.calories += veggie.calories;
        total.carbs += veggie.carbs;
        total.protein += veggie.protein;
        total.fat += veggie.fat;
      }
    });

    // Sauces nutrition
    selections.sauces.forEach((sauceName) => {
      const sauce = sauces.find((s) => s.name === sauceName);
      if (sauce) {
        total.calories += sauce.calories;
        total.carbs += sauce.carbs;
        total.protein += sauce.protein;
        total.fat += sauce.fat;
      }
    });

    return total;
  }, [selections]);

  const renderMacros = (item) => (
    <div className="grid grid-cols-4 gap-2 mt-2 text-xs text-gray-500">
      <div>Cal: {item.calories}</div>
      <div>P: {item.protein}g</div>
      <div>C: {item.carbs}g</div>
      <div>F: {item.fat}g</div>
    </div>
  );

  const renderSelectionIndicator = (isSelected) => {
    if (!isSelected) return null;
    return (
      <div className="flex items-center">
        <span className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center">
          <Check className="h-4 w-4 text-pink-600" />
        </span>
      </div>
    );
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader className="border-b">
        <CardTitle className="text-xl">Create your own subway</CardTitle>
      </CardHeader>

      <CardContent className="p-6">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 overflow-scroll">
          {["Bread", "Protein", "Cheese", "Veggies", "Sauces"].map(
            (step, index) => (
              <button
                key={step}
                onClick={() => setActiveStep(index + 1)}
                className={`px-4 py-2 text-sm transition-colors
                ${
                  activeStep === index + 1
                    ? "border-b-2 border-pink-500 text-pink-500 font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {step}
              </button>
            )
          )}
        </div>

        {/* Nutrition Summary */}
        <div className="grid grid-cols-4 gap-4 mb-8 border-b pb-6">
          {[
            { label: "Calories", value: totalNutrition.calories },
            { label: "Protein", value: `${totalNutrition.protein}g` },
            { label: "Carbs", value: `${totalNutrition.carbs}g` },
            { label: "Fat", value: `${totalNutrition.fat}g` },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {item.value}
              </div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Selection Area */}
        <div className="space-y-4">
          {/* Bread Selection */}
          {activeStep === 1 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Select your bread
              </h3>
              <div className="grid gap-2">
                {breads.map((bread) => (
                  <button
                    key={bread.name}
                    onClick={() => handleSelection("bread", bread.name)}
                    className={`w-full p-4 text-left border rounded-lg transition-colors
                      ${
                        selections.bread === bread.name
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-pink-200"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{bread.name}</span>
                      {renderSelectionIndicator(
                        selections.bread === bread.name
                      )}
                    </div>
                    {renderMacros(bread)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Protein Selection */}
          {activeStep === 2 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Select your proteins (multiple allowed)
              </h3>
              <div className="grid gap-2">
                {proteins.map((protein) => (
                  <button
                    key={protein.name}
                    onClick={() => handleSelection("proteins", protein.name)}
                    className={`w-full p-4 text-left border rounded-lg transition-colors
                      ${
                        selections.proteins.includes(protein.name)
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-pink-200"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${protein.isVeg ? "bg-green-500" : "bg-red-500"}`}
                        />
                        <span className="font-medium">{protein.name}</span>
                      </div>
                      {renderSelectionIndicator(
                        selections.proteins.includes(protein.name)
                      )}
                    </div>
                    {renderMacros(protein)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cheese Selection */}
          {activeStep === 3 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Select your cheese (multiple allowed)
              </h3>
              <div className="grid gap-2">
                <button
                  onClick={() =>
                    setSelections((prev) => ({ ...prev, cheeses: [] }))
                  }
                  className={`w-full p-4 text-left border rounded-lg transition-colors
                    ${
                      selections.cheeses.length === 0
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-pink-200"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">No Cheese</span>
                    {renderSelectionIndicator(selections.cheeses.length === 0)}
                  </div>
                </button>
                {cheeses.map((cheese) => (
                  <button
                    key={cheese.name}
                    onClick={() => handleSelection("cheeses", cheese.name)}
                    className={`w-full p-4 text-left border rounded-lg transition-colors
                      ${
                        selections.cheeses.includes(cheese.name)
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-pink-200"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{cheese.name}</span>
                      {renderSelectionIndicator(
                        selections.cheeses.includes(cheese.name)
                      )}
                    </div>
                    {renderMacros(cheese)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Veggies Selection */}
          {activeStep === 4 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Select your veggies (multiple allowed)
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {veggies.map((veggie) => (
                  <button
                    key={veggie.name}
                    onClick={() => handleSelection("veggies", veggie.name)}
                    className={`p-4 text-left border rounded-lg transition-colors
                      ${
                        selections.veggies.includes(veggie.name)
                          ? "border-pink-500 bg-pink-50"
                          : "border-gray-200 hover:border-pink-200"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{veggie.name}</span>
                      {renderSelectionIndicator(
                        selections.veggies.includes(veggie.name)
                      )}
                    </div>
                    {renderMacros(veggie)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sauces Selection */}
          {activeStep === 5 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                Select your sauces (multiple allowed)
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {sauces.map((sauce) => (
                  <button
                    key={sauce.name}
                    onClick={() => handleSelection("sauces", sauce.name)}
                    className={`p-4 text-left border rounded-lg transition-colors
                    ${
                      selections.sauces.includes(sauce.name)
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200 hover:border-pink-200"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{sauce.name}</span>
                      {renderSelectionIndicator(
                        selections.sauces.includes(sauce.name)
                      )}
                    </div>
                    {renderMacros(sauce)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Selected Items Summary */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Your Sub</h3>
          <div className="space-y-4">
            {selections.bread && (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Bread</span>
                <span className="font-medium">{selections.bread}</span>
              </div>
            )}

            {selections.proteins.length > 0 && (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Proteins</span>
                <div className="text-right">
                  {selections.proteins.map((protein) => (
                    <div key={protein} className="font-medium">
                      {protein}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(selections.cheeses.length > 0 ||
              selections.cheeses.length === 0) && (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Cheese</span>
                <div className="text-right">
                  {selections.cheeses.length === 0 ? (
                    <span className="font-medium">No Cheese</span>
                  ) : (
                    selections.cheeses.map((cheese) => (
                      <div key={cheese} className="font-medium">
                        {cheese}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {selections.veggies.length > 0 && (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Veggies</span>
                <div className="text-right">
                  {selections.veggies.map((veggie) => (
                    <div key={veggie} className="font-medium">
                      {veggie}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selections.sauces.length > 0 && (
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Sauces</span>
                <div className="text-right">
                  {selections.sauces.map((sauce) => (
                    <div key={sauce} className="font-medium">
                      {sauce}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          <button
            onClick={() => setActiveStep((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 text-gray-500 hover:text-gray-700 
            ${activeStep === 1 ? "invisible" : ""}`}
          >
            Back
          </button>

          {activeStep !== 5 ? (
            <button
              onClick={() => setActiveStep((prev) => Math.min(prev + 1, 5))}
              disabled={activeStep === 1 && !selections.bread}
              className={`
              px-6 py-2 rounded-lg transition-colors
              ${
                activeStep === 1 && !selections.bread
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }
            `}
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => {
                setSelections({
                  bread: "",
                  proteins: [],
                  cheeses: [],
                  veggies: [],
                  sauces: [],
                });
                setActiveStep(1);
              }}
              className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Start Over
            </button>
          )}
        </div>

        {/* Total Calories Warning */}
        {totalNutrition.calories > 800 && (
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-700">
              This sub is quite high in calories ({totalNutrition.calories}{" "}
              kcal). Consider removing some high-calorie toppings if you're
              watching your intake.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubwayCalculator;
