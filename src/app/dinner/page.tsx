"use client";

import { useState } from "react";
import DinnerCard from "../components/dinnerCard";
import { dinners, type Dinner } from "./dinners";

export default function Dinner() {
  const [currentDinner, setCurrentDinner] = useState<Dinner>(dinners[0]);
  const [showAllDinners, setShowAllDinners] = useState(false);
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);

  function getRandomDinner(): Dinner {
    const randomIndex = Math.floor(Math.random() * dinners.length);
    return dinners[randomIndex];
  }

  function handleRandomClick() {
    setCurrentDinner(getRandomDinner());
  }

  function handleToggleAll() {
    setShowAllDinners(!showAllDinners);
  }

  function handleToggleSuggestionBox() {
    setShowSuggestionBox(!showSuggestionBox);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Middagsplanlegger
          </h1>
        </div>

        {/* Random dinner section */}
        <div className=" p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Tilfeldig middagsforslag
            </h2>
            <div className="max-w-md mx-auto">
              <DinnerCard
                title={currentDinner.dish}
                meatType={currentDinner.meat}
              />
            </div>
            <button
              onClick={handleRandomClick}
              className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg"
            >
              Få nytt middagsforslag
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="text-center mb-8 space-x-4">
          <button
            onClick={handleToggleAll}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            {showAllDinners ? "Skjul alle middager" : "Vis alle middager"}
          </button>

          <button
            onClick={handleToggleSuggestionBox}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md hover:shadow-lg"
          >
            {showSuggestionBox ? "Lukk forslag" : "Foreslå middag"}
          </button>
        </div>

        {/* Suggestion box */}
        {showSuggestionBox && (
          <div className="p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Foreslå en ny middag
            </h2>
            <form
              action="https://formsubmit.co/ida.matre@gmail.com"
              method="POST"
              className="max-w-2xl mx-auto"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="Ny middagsforslag fra Middagsplanlegger"
              />
              <input
                type="hidden"
                name="_next"
                value="https://your-domain.com/dinner?success=true"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div className="mb-6">
                <label
                  htmlFor="suggestion"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Ditt middagsforslag
                </label>
                <textarea
                  id="suggestion"
                  name="suggestion"
                  placeholder="Skriv inn navnet på middagsretten du vil foreslå..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  rows={4}
                  required
                />
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  Send forslag
                </button>

                <button
                  type="button"
                  onClick={handleToggleSuggestionBox}
                  className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                >
                  Avbryt
                </button>
              </div>
            </form>
          </div>
        )}

        {/* All dinners section */}
        {showAllDinners && (
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Alle middager
              <span className="ml-2 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {dinners.length} retter
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dinners.map((dinner, index) => (
                <DinnerCard
                  key={index}
                  title={dinner.dish}
                  meatType={dinner.meat}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
