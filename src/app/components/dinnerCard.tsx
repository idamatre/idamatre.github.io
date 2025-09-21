"use client";

import React from "react";

interface DinnerCardProps {
  title: string;
  meatType: string;
}

export default function DinnerCard({ title, meatType }: DinnerCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-gray-800 mb-2 text-lg">{title}</h3>
      <p className="text-gray-600 text-sm">
        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
          {meatType}
        </span>
      </p>
    </div>
  );
}
