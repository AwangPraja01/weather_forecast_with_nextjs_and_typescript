import React, { FC, createContext, useState, useEffect } from "react";
import { WeatherContextState } from "../types";

const WeatherContextDefaultValues: WeatherContextState = {
  backgroundImage: "",
  query: "Pontianak",
  weatherData: {
    location: {
      name: "",
      region: "",
      country: "",
      lat: 0,
      lon: 0,
      tz_id: "",
      localtime_epoch: 0,
      localtime: "",
    },
    current: {
      last_updated: "",
      temp_c: 0,
      is_day: 0,
      condition: {
        text: "",
        icon: "",
        code: 0,
      },
      wind_kph: 0,
      humidity: 0,
      cloud: 0,
      uv: 0,
    },
    forecast: { forecastday: [] },
  },
  handleOnSubmit: () => {},
  handleOnChange: () => {},
  handleOnClickSpanElement: () => {},
};

export const WeatherContext = createContext<WeatherContextState>(
  WeatherContextDefaultValues
);

const WeatherContextProvider: FC = (props) => {
  const [query, setQuery] = useState(WeatherContextDefaultValues.query);
  const [backgroundImage, setBackgroundImage] = useState(
    WeatherContextDefaultValues.backgroundImage
  );
  const [weatherData, setWeatherData] = useState(
    WeatherContextDefaultValues.weatherData
  );

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleOnClickSpanElement = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData();
    setQuery("");
    setBackgroundImage(
      weatherData.current.condition.text.includes("rain")
        ? "bg-rainy-background"
        : weatherData.current.condition.text.includes("cloudy")
        ? "bg-cloudy-background"
        : "bg-sunny-background"
    );
  };

  const fetchWeatherData = async () => {
    const data = await (
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=2c43d794bba94b0885e165833212405&q=${query}&days=3&aqi=no&alerts=no`
      )
    ).json();
    setWeatherData(data);
    setBackgroundImage(
      data.current.condition.text.includes("rain")
        ? "bg-rainy-background"
        : data.current.condition.text.includes("cloudy")
        ? "bg-cloudy-background"
        : "bg-sunny-background"
    );
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        query,
        weatherData,
        handleOnChange,
        handleOnSubmit,
        handleOnClickSpanElement,
        backgroundImage,
      }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
