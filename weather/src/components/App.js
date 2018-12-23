import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  render() {

    return (
      <div>
        <SearchBar />
        <div>
          <h2>Lat: {this.state.lat}</h2>
          <h2>Long: {this.state.long}</h2>
        </div>
        <div className="attribution">
          <a href="https://www.freepik.com/free-photos-vectors/template">Template vector created by Freepik</a>
        </div>

      </div>

    );
  }
}

export default App;