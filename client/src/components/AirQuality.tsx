import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Calendar from "./Calendar/index";
import Time from "./Time/index";
import Humidity from "./Data/Humidity"
import Temperature from "./Data/Temperature"
import Particle from "./Data/Particle"

const GET_AIR_QUALITY = gql`
  {
    latest_air_quality {
      pm10
      pm25
      BME280_temperature
      BME280_humidity
    }
  }
`;

export default function AirQuality() {
  const { data, loading } = useQuery(GET_AIR_QUALITY, {});

  if (loading) return <div>Loading...</div>
  return (
    <div className="data">
      <div className="left">
        <Calendar />
        <Time />
      </div>

      <div className="right">
        <Temperature data={data.latest_air_quality.BME280_temperature} />
        <Humidity data={data.latest_air_quality.BME280_humidity} />
        <Particle data={data.latest_air_quality.pm25} title="PM2.5" />
        <Particle data={data.latest_air_quality.pm10} title="PM10" />
      </div>
    </div>
  );
}
