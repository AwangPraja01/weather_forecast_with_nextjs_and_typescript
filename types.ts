export type WeatherDataState = {
  query: string;
  weatherData: {};
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
