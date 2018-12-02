import React, { Component } from 'react'

export default class TextArea extends Component {
  constructor(){ super() }
 
  render() {
    return (
      <div className={`city-container ${this.props.boxPosition}`}>
        <input className="city-text-box" placeholder="Enter a city..." onChange={this.props.triggerParentUpdateInput}/>
        <div className="go-to-city" onClick={this.props.triggerParentUpdateClick}>Go</div>
      </div> 
    )
  }
}


