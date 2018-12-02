import React, { Component } from 'react'

export default class ZoomWidget extends Component {
  constructor() { super() }

  /* componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) { 
      //this.setState({value: nextProps.value})
    }
  } */

  render() {
    return (
      <div className={`zoom-widget ${this.props.position}`}>
        <div className="zoom-plus" onClick={this.props.triggerZoomIn} ></div>
        <div className="zoom-minus" onClick={this.props.triggerZoomOut} ></div>
      </div>
    )
  }
}

