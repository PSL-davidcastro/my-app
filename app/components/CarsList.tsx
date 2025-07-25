"use client";

import { useCarsStore, CarType } from "@/app/store/cars-store";
import Car from "./Car";
import { useEffect } from "react";

interface CarsListProps {
  initialCars: CarType[];
}

export default function CarsList({ initialCars }: CarsListProps) {
  const { isInitialized, initializeCars } = useCarsStore();

  useEffect(() => {
    if (!isInitialized) {
      if (initialCars && initialCars.length > 0) {
        // Initialize store with server-rendered data
        initializeCars(initialCars);
      } else {
        throw new Error("No initial cars data provided");
      }
    }
  }, [initialCars, isInitialized, initializeCars]);

  return (
    <div
      id="cars"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto"
    >
      {initialCars.map((car, index) => (
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
