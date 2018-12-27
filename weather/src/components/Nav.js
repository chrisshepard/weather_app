import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Clock from './Clock';
import Logo from '../1-media/logo.png';

const colorsA = ['red', 'orange', 'yellow', 'olive', 'green', 'teal']

export default class MenuExampleColoredInverted extends Component {
  state = { activeA: colorsA[0]}

  handleAClick = (e, { name }) => this.setState({ activeA: name })

  render() {
    const { activeA } = this.state;

    return (
      <div>
        <Menu inverted>
            <Menu.Item
              key={'Home'}
              name= 'Home'
              active={activeA === 'Home'}
              color={colorsA[0]}
              onClick={this.handleAClick}
            />
            <Menu.Item
              key='Local Weather'
              name= 'Local Weather'
              active={activeA === 'Local Weather'}
              color={colorsA[1]}
              onClick={this.handleAClick}
            />
            <Menu.Item
              key={'5-Day Forecast'}
              name= '5-Day Forecast'
              active={activeA === '5-Day Forecast'}
              color={colorsA[2]}
              onClick={this.handleAClick}
            />
            <Menu.Item
              key= 'Weather by City'
              name= 'Weather by City'
              active={activeA === 'Weather by City'}
              color={colorsA[3]}
              onClick={this.handleAClick}
            />
            <Clock />
            
             <div><img src={Logo} alt="logo" className="logo"/></div>
        </Menu>
      </div>
    )
  }
}