"use client";
export default function Button() {
  const fetchCars = async () => {
    const response = await fetch("/api/cars");
    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }
    const data = await response.json();
    console.log(data);
  };

  const handleClick = async () => {
    try {
      await fetchCars();
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleClick}
    >
      Fetch Cars
    </button>
  );
}
