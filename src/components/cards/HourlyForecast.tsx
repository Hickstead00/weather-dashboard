import Card from "./Card";
import { getWeather } from "../../api";
import { useSuspenseQuery } from "@tanstack/react-query";
import WeatherIcon from "../WeatherIcon";

export default function HourlyForecast() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 60, lon: 60 }),
  });
  return (
    <Card
      title="Prévisions journalière"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data?.hourly.map((hour) => (
        <div className="flex flex-col gap-2">
          <p>{new Date(hour.dt * 1000).toLocaleDateString()}</p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
}
