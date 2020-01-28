const { gql } = require('apollo-server');

module.exports = gql`
scalar Date

type AirQualityRecord {
  BME280_humidity: Float
	BME280_pressure: Float
	BME280_temperature: Float
	datetime: Date
	esp8266id: Int
	max_micro: Int
	min_micro: Int
	pm10: Float
	pm25: Float
	signal:	Int
	software_version: String
}
type Query {
	latest_air_quality: AirQualityRecord
	daily_air_quality: [AirQualityRecord]
}
`;