import React from 'react';
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import Weather from './Weather';
import Loading from './Loading';

import moment from 'moment';



class App extends React.Component {
  state = { lat: null, long: null, errorMessage: '', weather: null, forecast: null, date: moment().format('MMMM Do YYYY, h:mm a') };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      }),
      err => this.setState({ errorMessage: err.message })
    );

    setInterval(
      () => this.setState({ date: moment().format('MMMM Do YYYY, h:mm a') }),
      10000
    );

  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <div>{this.state.date}</div>
          <SearchBar />
          <div>
            <h2>Lat: {this.state.lat}</h2>
            <h2>Long: {this.state.long}</h2>
          </div>
          <Weather lat={this.state.lat} long={this.state.long} />
          <Forecast lat={this.state.lat} long={this.state.long} />
          <div className="attribution">
            <a href="">Icons Created by AMCharts</a>
          </div>
        </div>
      );
    }

    return <div><Loading /></div>

  }
}

export default App;

