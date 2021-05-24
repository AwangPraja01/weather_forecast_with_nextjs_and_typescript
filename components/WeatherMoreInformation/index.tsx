import React, { FC } from "react";
import { useContext } from "react";
import * as FeatherIcons from "react-icons/fi";
import { WeatherContext } from "../../contexts/WeatherContext";

const WeatherMoreInformation: FC = () => {
  const { query, weatherData, handleOnChange, handleOnSubmit } =
    useContext(WeatherContext);
  return (
    <div
      id='weather-more-information-container'
      className='flex-1 h-screen overflow-y-auto px-14 py-9 relative text-white'>
      <div
        id='search-by-country'
        className='flex flex-row justify-between items-start w-full border-b border-gray-100 mb-8 '>
        <div>
          <div className='mb-8'>
            <form onSubmit={handleOnSubmit}>
              <input
                value={query}
                onChange={handleOnChange}
                className='bg-transparent focus:outline-none text-gray-200 pb-1 border-gray-100 border-b w-72'
                type='text'
                placeholder='Another location'
                name='search-by-country-input'
                id='search-by-country-input'
              />
            </form>
          </div>
          <div className='flex flex-col justify-start items-start text-gray-200 mb-8'>
            <span className='mb-5'>Birmingham</span>
            <span className='mb-5'>Manchester</span>
            <span className='mb-5'>New York</span>
            <span>California</span>
          </div>
        </div>
        <div className='bg-blue-200 p-6 absolute right-0 top-0'>
          <span className='text-xl text-black'>
            <FeatherIcons.FiSearch />
          </span>
        </div>
      </div>

      <div id='weather-detail' className='w-full border-b border-gray-100 mb-8'>
        <div className='mb-8'>
          <span>Weather Detail</span>
        </div>
        <div className='mb-8'>
          <div className='mb-5 flex flex-row justify-between items-center'>
            <span>Cloudy</span>
            <span>86%</span>
          </div>
          <div className='mb-5 flex flex-row justify-between items-center'>
            <span>Humidity</span>
            <span>62%</span>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <span>Wind</span>
            <span>8 km/h</span>
          </div>
        </div>
      </div>

      <div id='weather-daily-forecasts'>
        <div>
          <span>Daily Forecasts</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default WeatherMoreInformation;
