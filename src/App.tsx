import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 60, lon: 60 }),
  });

  return (
    <div className="flex flex-col gap-8">
      <Card title="Météo actuelle">{JSON.stringify(data?.current)}</Card>
      <Suspense fallback={<div>Chargement...</div>}>
        <HourlyForecast />
      </Suspense>
      <Suspense fallback={<div>Chargement...</div>}>
        <DailyForecast />
      </Suspense>
    </div>
  );
}

export default App;
