import React, { FC, useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Moment from "react-moment";

const WeatherInformation: FC = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div
      id='weather-information-container'
      className='w-3/5 flex flex-row items-end justify-start text-white self-end px-12 py-16 relative'>
      <div className='mr-1'>
        <span className='text-7xl'>{weatherData.current.temp_c}&deg;</span>
      </div>

      <div className='flex flex-col items-start justify-start mr-6'>
        <div>
          <span className='text-4xl font-semibold'>
            {weatherData.location.name}
          </span>
        </div>
        <div>
          <span className='text-base'>
            <Moment
              date={new Date(weatherData.current.last_updated)}
              format='hh:mm - dddd, D MMM YYYY'
              withTitle
            />
          </span>
        </div>
      </div>

      <div className='flex flex-col items-center justify-start'>
        <div>
          <span className='w-8 h-8'>
            <img
              className='w-full h-full'
              src={weatherData.current.condition.icon}
              alt='Weather Icon'
            />
          </span>
        </div>
        <div>
          <span className='text-base'>
            {weatherData.current.condition.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
