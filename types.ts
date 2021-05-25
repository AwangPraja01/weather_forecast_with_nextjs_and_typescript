export type hourObject = {
  time: string;
  condition: {};
};

export type forecastdayObject = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
  astro: {
    sunrise: string;
  };
  hour: hourObject[];
};

export type WeatherContextState = {
  query: string;
  weatherData: {
    location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: string;
    };
    current: {
      last_updated: string;
      temp_c: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      wind_kph: number;
      humidity: number;
      cloud: number;
      uv: number;
    };
    forecast: { forecastday: forecastdayObject[] };
  };
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnClickSpanElement: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
