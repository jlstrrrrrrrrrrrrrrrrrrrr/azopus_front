import React, { useEffect, useState } from "react";
import { Alkotas } from "../types/data";
import AlkotasKartya from "../components/AlkotasKartya";

const HomePage = () => {
  const [alkotasok, setAlkotasok] = useState<Alkotas[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setAlkotasok(data); // set the fetched data
      } catch (error: any) {
        setError(error.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold text-gray-600 animate-pulse">
          Betöltés...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-red-600">Hiba: {error}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-white">
      {alkotasok.map((alkotas) => (
        <AlkotasKartya key={alkotas.id} alkotas={alkotas} />
      ))}
    </div>
  );
};

export default HomePage;
