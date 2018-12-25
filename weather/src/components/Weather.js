import React from 'react';
import axios from 'axios';

import WeatherConditions from './WeatherConditions';

const baseURL = "http://api.openweathermap.org/";
const apiKey = "5d580e44ba6e4c6f717d103b0ed5a4f1";

class Weather extends React.Component {

  state = { weather: null };

  componentDidMount() {
    axios.get(baseURL + 'data/2.5/weather?appid=' + apiKey + '&lat=' + this.props.lat + '&lon=' + this.props.long + '&units=Imperial').then((res) => {
      this.setState({ weather: { ...res } });
      console.log(res);
    });
  }

  render() {
    if (this.state.weather === null) {
      return (
        <div>Loading...</div>
      );
    }
    if (this.state.weather !== null) {
      console.log(this.props);
      console.log(this.state.weather);
      return (
        <div>
          <div>city: {this.state.weather.data.name}</div>
          <div>temp: {this.state.weather.data.main.temp}&#8457;</div>
          <div>humidity: {this.state.weather.data.main.humidity}%</div>
          <div>wind speed: {this.state.weather.data.wind.speed}</div>
          <div>wind direction: {this.state.weather.data.wind.deg}</div>
          <div>Description: {this.state.weather.data.weather[0].main}</div>
          <WeatherConditions condition={this.state.weather.data.weather[0].main} />
          <div>Sunrise: {this.state.weather.data.sys.sunrise}</div>
          <div>Sunset: {this.state.weather.data.sys.sunset}</div>
          <div>Clouds: {this.state.weather.data.clouds.all}%</div>
        </div>

      );
    }

    return (
      <div>wtffff</div>
    )
  }

}

export default Weather;