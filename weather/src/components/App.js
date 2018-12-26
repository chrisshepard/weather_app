import React from 'react';
import SearchBar from './SearchBar';
import Forecast from './Forecast';
import Weather from './Weather';
import Loading from './Loading';
import Clock from './Clock';
import Logo from '../1-media/logo.png';




class App extends React.Component {
  state = { lat: null, long: null, errorMessage: '', weather: null, forecast: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      }),
      err => this.setState({ errorMessage: err.message })
    );

  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <Clock />
          <div><img src={Logo} alt="logo" className="logo"/></div>
          <div>
            <h2>Lat: {this.state.lat}</h2>
            <h2>Long: {this.state.long}</h2>
          </div>
          <Weather lat={this.state.lat} long={this.state.long} />
          <Forecast lat={this.state.lat} long={this.state.long} />
          <div className="attribution">
            <a href="/">Icons Created by AMCharts</a>
            <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank2312">CC 3.0 BY</a></div>
          </div>
        </div>
      );
    }

    return <div><Loading /></div>

  }
}

export default App;

