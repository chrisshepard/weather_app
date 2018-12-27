import React from 'react';
import axios from 'axios';

import moment from 'moment';

const baseURL = "http://api.openweathermap.org/";
const apiKey = "5d580e44ba6e4c6f717d103b0ed5a4f1";



class Forecast extends React.Component {

  state = { forecast: null, stamps: null};



  componentDidMount() {
    axios.get(baseURL + 'data/2.5/forecast?appid=' + apiKey + '&lat=' + this.props.lat + '&lon=' + this.props.long + '&units=Imperial').then((res) => {
      this.setState({ forecast: { ...res } });
      console.log(res);
      this.setState({stamps: moment.unix(this.state.forecast.data.list[3].dt)._d} ) 
      console.log(this.state.stamps)
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
          <div>time: {}</div>
          <div>current time: </div>

        </div>

      );
    }

    return (
      <div>wtffff</div>
    )


  }

}

export default Forecast;


function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}