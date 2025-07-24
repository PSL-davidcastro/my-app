import { CarType } from "@/app/store/cars-store";

export default function Car({ car }: { car: CarType }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 hover:rotate-1 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-900 transition-colors duration-300">
            {car.make} {car.model}
          </h2>
          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full border border-blue-200 group-hover:scale-110 transition-transform duration-300">
            {car.year}
          </span>
        </div>

        {/* Car icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 6H7.5a2.5 2.5 0 00-2.45 2.05L4 12h9m0-6h2.5A2.5 2.5 0 0118.45 8.05L19 12h-6m0-6v6"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
            <span className="font-medium text-gray-700">Year</span>
            <span className="text-gray-900 font-semibold">{car.year}</span>
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors duration-300">
            <span className="font-medium text-gray-700">ID</span>
            <span className="text-gray-600 font-mono text-sm bg-white px-2 py-1 rounded border">
              {car.id}
            </span>
          </div>
        </div>

        {/* Action button */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
