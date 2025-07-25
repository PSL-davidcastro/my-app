"use client";

import { useCarsStore, CarType } from "@/app/store/cars-store";
import Car from "./Car";
import { useEffect } from "react";

interface CarsListProps {
  initialCars: CarType[];
}

export default function CarsList({ initialCars }: CarsListProps) {
  const { cars, isInitialized, fetchCars, initializeCars } = useCarsStore();

  useEffect(() => {
    if (!isInitialized) {
      if (initialCars && initialCars.length > 0) {
        // Initialize store with server-rendered data
        initializeCars(initialCars);
      } else {
        // Fallback to client-side fetch if no initial data
        fetchCars();
      }
    }
  }, [initialCars, isInitialized, fetchCars, initializeCars]);

  // Show loading state only if not initialized and no initial data
  if (!isInitialized && (!initialCars || initialCars.length === 0)) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-gray-400 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Loading cars...
        </h3>
        <p className="text-gray-600">
          Please wait while we fetch the latest vehicle collection.
        </p>
      </div>
    );
  }

  // Use cars from store (which could be initialized from server data or fetched client-side)
  const displayCars = isInitialized ? cars : initialCars || [];

  if (displayCars.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No cars loaded yet
        </h3>
        <p className="text-gray-600">
          Click the &ldquo;Discover Cars&rdquo; button above to load our vehicle
          collection.
        </p>
      </div>
    );
  }

  return (
    <div
      id="cars"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto"
    >
      {displayCars.map((car, index) => (
        <div
          key={car.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "both",
          }}
        >
          <Car car={car} />
        </div>
      ))}
    </div>
  );
}
