type Props = {
  src: string;
};

export default function WeatherIcon({ src }: Props) {
  return (
    <img
      className="size-8"
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="Icone météo"
    />
  );
}
