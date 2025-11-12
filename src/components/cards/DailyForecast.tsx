import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";

export default function DailyForecast() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 60, lon: 60 }),
  });
  return (
    <Card title="Prévision dans la journée">
      <div className="flex flex-col gap-4">
        {data?.daily.map((day) => (
          <div key={day.dt} className="flex justify-between">
            <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img
              className="size-8"
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="Icone météo"
            />
            <p>{day.temp.day}</p>
            <p className="text-gray-500/75">{day.temp.min}</p>
            <p className="text-gray-500/75">{day.temp.max}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
