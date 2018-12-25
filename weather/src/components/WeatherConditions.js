import React from 'react';


const WeatherConditions = (props) => {
  return (
    <div>
      <img src={require("../1-media/" + props.condition + ".svg")} />
    </div>
  )
}

export default WeatherConditions;