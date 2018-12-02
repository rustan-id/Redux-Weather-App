import React, { Component } from 'react'

export default class Header extends Component {
  constructor() { super() }

  render() {
    return (
      <div className="header">
        <svg className="cloud-svg left" viewBox='0 0 105 105'>
          <path className="cloud-path" d='M 25,60 
                                          a 20,20 1 0,0 0,40 
                                          h 50 
                                          a 20,20 1 0,0 0,-40 
                                          a 10,10 1 0,0 -15,-10 
                                          a 15,15 1 0,0 -35,10  
                                          z' />
        </svg>
        <span className="title left">World Weather App</span>
       <div onClick={this.props.triggerTransition} className="hamburguer-container">
          <div className="hambuguer-button"></div>
          <div className="hambuguer-button"></div>
          <div className="hambuguer-button"></div>
          <div className="hambuguer-button"></div>
        </div>
      </div>
    )
  }
}

