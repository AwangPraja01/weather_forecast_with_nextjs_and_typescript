import React, { FC, useRef } from "react";
import { useContext } from "react";
import * as FeatherIcons from "react-icons/fi";
import { WeatherContext } from "../../contexts/WeatherContext";
import Moment from "react-moment";
import { v4 as uuidv4 } from "uuid";

const WeatherMoreInformation: FC = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const {
    query,
    weatherData,
    handleOnChange,
    handleOnSubmit,
    handleOnClickSpanElement,
  } = useContext(WeatherContext);

  const handleFocus = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
      searchInput.current.value = "";
    }
  };

  return (
    <div
      id='weather-more-information-container'
      className='hidden sm:block flex-1 h-screen overflow-y-auto px-14 py-9 relative text-white'>
      <div
        id='search-by-country'
        className='flex flex-row justify-between items-start w-full border-b border-gray-100 mb-8 '>
        <div className='w-full'>
          <div className='mb-8'>
            <form onSubmit={handleOnSubmit}>
              <input
                ref={searchInput}
                value={query}
                onChange={handleOnChange}
                className='bg-transparent focus:outline-none text-gray-200 pb-1 border-gray-100 border-b w-full lg:w-3/4'
                type='text'
                placeholder='Another location'
                name='search-by-country-input'
                id='search-by-country-input'
              />
            </form>
          </div>
          <div className='flex flex-col justify-start items-start text-gray-200 mb-8'>
            <span className='mb-5 '>
              <button
                className='capitalize focus:outline-none'
                onClick={handleOnClickSpanElement}
                value='Semarang'>
                semarang
              </button>
            </span>
            <span className='mb-5 '>
              <button
                className='capitalize focus:outline-none'
                onClick={handleOnClickSpanElement}
                value='Bandung'>
                bandung
              </button>
            </span>
            <span className='mb-5 '>
              <button
                className='capitalize focus:outline-none'
                onClick={handleOnClickSpanElement}
                value='Jakarta'>
                jakarta
              </button>
            </span>
            <span>
              <button
                className='capitalize focus:outline-none'
                onClick={handleOnClickSpanElement}
                value='Banjarmasin'>
                banjarmasin
              </button>
            </span>
          </div>
        </div>
        <div
          className='bg-blue-200 p-6 absolute right-0 top-0 cursor-pointer hover:bg-blue-400 hidden lg:block'
          onClick={handleFocus}>
          <span className='text-xl text-black '>
            <FeatherIcons.FiSearch />
          </span>
        </div>
      </div>

      <div
        id='weather-detail'
        className='w-full lg:border-b lg:border-gray-100 lg:mb-8'>
        <div className='mb-8'>
          <span>Weather Detail</span>
        </div>
        <div className='lg:mb-8'>
          <div className='mb-5 flex flex-row justify-between items-center'>
            <span>Cloudy</span>
            <span>{weatherData.current.cloud} %</span>
          </div>
          <div className='mb-5 flex flex-row justify-between items-center'>
            <span>Humidity</span>
            <span>{weatherData.current.humidity} %</span>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <span>Wind</span>
            <span>{weatherData.current.wind_kph} km/h</span>
          </div>
        </div>
      </div>

      <div id='weather-daily-forecasts' className='hidden lg:block'>
        <div className='mb-8'>
          <span>Daily Forecasts</span>
        </div>
        <div>
          <table className='w-full'>
            <tbody>
              {weatherData.forecast.forecastday.map((item) => (
                <tr key={uuidv4()}>
                  <td className='text-left pr-4'>
                    <Moment
                      date={new Date(item.date)}
                      format='D MMM'
                      withTitle
                    />
                  </td>
                  <td className='flex flex-row items-center justify-start'>
                    <span className='w-8 h-8 mr-2'>
                      <img
                        className='h-full w-full'
                        src={item.day.condition.icon}
                        alt='Weather Icon'
                      />
                    </span>
                    <span>{item.day.condition.text}</span>
                  </td>
                  <td className='text-right'>
                    {item.day.maxtemp_c}/{item.day.mintemp_c}&deg;C
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeatherMoreInformation;
