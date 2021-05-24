import Head from "next/head";
import React from "react";
import WeatherInformation from "../components/WeatherInformation";
import WeatherMoreInformation from "../components/WeatherMoreInformation";

const Home = () => {
  return (
    <>
      <Head>
        <title>Weather Forecast Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-row items-start justify-between'>
        <WeatherInformation />
        <WeatherMoreInformation />
      </div>
    </>
  );
};

export default Home;
