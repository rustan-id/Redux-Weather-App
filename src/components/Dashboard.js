import React, { Component } from 'react'
import { Bar }              from 'react-chartjs-2'
import CustomBar            from './CustomBar'
import CustomLine           from './CustomLine'
import { connect }          from 'react-redux'


class Dashboard extends Component {
  constructor(){ super() }

  render() {
    return (
      <div>
        <div className={`left-wrapper scrollbar custom-scrollbar ${this.props.wrapperState}`}>
          <div className="indicators-container">
            <div className="indicator-title">Temperature</div>
             <div className="indicator-value">{this.props.apiConditions.temp} ºC</div>
              <hr className="separator"/>
            <div className="indicator-title">Humidity</div>
             <div className="indicator-value">{this.props.apiConditions.humidity} %</div>
              <hr className="separator"/>
            <div className="indicator-title">Pressure</div>
             <div className="indicator-value">{this.props.apiConditions.pressure} hPa</div>
              <hr className="separator"/>
          </div>
          <div className="indicators-container">
            <CustomLine data={this.props.apiResponse[1]} labels={this.props.apiResponse[0]} title={this.props.temperatureTitle} />
            <CustomLine data={this.props.apiResponse[2]} labels={this.props.apiResponse[0]} title={this.props.humidityTitle}/>
            <CustomLine data={this.props.apiResponse[3]} labels={this.props.apiResponse[0]} title={this.props.pressureTitle}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apiResponse:   state.FetchWeatherReducer.weatherData,
    apiLocation:   state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions
  }
}

export default connect(mapStateToProps)(Dashboard) 
 