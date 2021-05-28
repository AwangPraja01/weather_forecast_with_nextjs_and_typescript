import "../styles/globals.css";
import { AppProps } from "next/app";
import WeatherContextProvider from "../contexts/WeatherContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherContextProvider>
      <Component {...pageProps} />
    </WeatherContextProvider>
  );
}

export default MyApp;
