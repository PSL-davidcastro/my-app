"use client";

import { useCarsStore } from "@/app/store/cars-store";
import Car from "./Car";

export default function CarsList() {
  const { cars } = useCarsStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
      {cars.map(car => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
}
