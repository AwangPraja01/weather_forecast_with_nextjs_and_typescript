import React, { FC } from "react";
import * as FontAwesomeIcons from "react-icons/fa";

const WeatherInformation: FC = () => {
  return (
    <div
      id='weather-information-container'
      className='w-3/5 flex flex-row items-end justify-start text-white self-end px-12 py-16'>
      <div className='mr-1'>
        <span className='text-7xl'>16&deg;</span>
      </div>

      <div className='flex flex-col items-start justify-start mr-6'>
        <div>
          <span className='text-4xl font-semibold'>London</span>
        </div>
        <div>
          <span className='text-base'>06:09 - Monday,9 September 2021</span>
        </div>
      </div>

      <div className='flex flex-col items-center justify-start'>
        <div>
          <span className='text-3xl'>
            <FontAwesomeIcons.FaCloudSun />
          </span>
        </div>
        <div>
          <span className='text-base'>Cloudy</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
