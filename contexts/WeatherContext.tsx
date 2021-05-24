import React, { FC, createContext, useState } from "react";
import { WeatherDataState } from "../types";

const WeatherContextDefaultValues: WeatherDataState = {
  query: "",
  weatherData: {},
  handleOnSubmit: () => {},
  handleOnChange: () => {},
};

export const WeatherContext = createContext<WeatherDataState>(
  WeatherContextDefaultValues
);

const WeatherContextProvider: FC = (props) => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData();
    setQuery("");
  };

  const fetchWeatherData = async () => {
    const data = await (
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=2c43d794bba94b0885e165833212405&q=${query}&days=3&aqi=no&alerts=no`
      )
    ).json();
    setWeatherData(data);
    console.log(weatherData);
  };

  return (
    <WeatherContext.Provider
      value={{ query, weatherData, handleOnChange, handleOnSubmit }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
