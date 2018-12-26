import React from 'react';
import axios from 'axios';
import luxon from "luxon";

const baseURL = "http://api.openweathermap.org/";
const apiKey = "5d580e44ba6e4c6f717d103b0ed5a4f1";



class Forecast extends React.Component {

  state = { forecast: null };



  componentDidMount() {
    axios.get(baseURL + 'data/2.5/forecast?appid=' + apiKey + '&lat=' + this.props.lat + '&lon=' + this.props.long + '&units=Imperial').then((res) => {
      this.setState({ forecast: { ...res } });
      console.log(res);

    });

  }

  render() {
    if (this.state.forecast === null) {
      return (
        <div>Loading...</div>
      );
    }
    if (this.state.forecast !== null) {
      console.log(this.props);
      console.log(this.state.forecast.data.city.name);
      return (
        <div>
          <div>city: {this.state.forecast.data.city.name}</div>

        </div>

      );
    }

    return (
      <div>wtffff</div>
    )


  }

}

export default Forecast;