import { CarType } from "@/app/store/cars-store";

export default function Car({ car }: { car: CarType }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          {car.make} {car.model}
        </h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {car.year}
        </span>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600 flex items-center">
          <span className="font-medium text-gray-700 mr-2">Year:</span>
          <span className="text-gray-800">{car.year}</span>
        </p>
        <p className="text-gray-600 flex items-center">
          <span className="font-medium text-gray-700 mr-2">ID:</span>
          <span className="text-gray-500 font-mono text-sm">{car.id}</span>
        </p>
      </div>
    </div>
  );
}
