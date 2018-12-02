import React, { Component }     from 'react'
import { connect }              from 'react-redux'
import { bindActionCreators }   from 'redux'
import { fetchAPIResponse }     from '../actions/fetch_api_data'
import Header                   from './Header'
import Dashboard                from './Dashboard'
import TextArea                 from './TextArea'
import ZoomWidget               from './ZoomWidget'
import ReactMapboxGl, { Layer,
                        Feature} from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWRyaXNvbGlkIiwiYSI6ImNqNWt4cGczNjJpZW0yd29kYnJxZXhsaHkifQ.Iq48zrXcmg_xE2kZAbxmEQ'
})

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      city: [46.2, 6.1],
      zoom: [10],
      center: [6.1, 46.2],
      wrapperState: 'opened',
      zoomPosition: 'zoom-opened',
      cityBoxPosition: 'city-container-opened'
    }
  }

  componentWillMount = () => {
    this.props.FetchAPIResponse('weather', 'Geneva');
    this.props.FetchAPIResponse('forecast','Geneva');
  }

  search() {
    this.props.FetchAPIResponse('weather', this.state.value);
    this.props.FetchAPIResponse('forecast', this.state.value);
  }

  componentWillReceiveProps(nextProps){
     if(nextProps.apiLocation !== this.props.apiLocation){
      this.setState({
        center: [nextProps.apiLocation.lon, nextProps.apiLocation.lat],
        zoom: [9]
      })
     }
   }

  changeHandler(e) {
    let value = e.target.value;
    this.setState({
      value: value
    });
  }

  setZoomIn(){
    let currentZoom = this.state.zoom[0]
    this.setState({
      zoom: [currentZoom + 1]
    })
  }

  setZoomOut(){
    let currentZoom = this.state.zoom[0]
    this.setState({
      zoom: [currentZoom - 1]
    })
  }

  widgetsTransition(){
    let nextZoomPosState
    let currentPosition = this.state.zoomPosition
        currentPosition == 'zoom-opened' ? nextZoomPosState = 'zoom-closed' : nextZoomPosState = 'zoom-opened'

    let nextWrapperState
    let currentWrapper = this.state.wrapperState
        currentWrapper == 'opened' ? nextWrapperState = 'closed' : nextWrapperState = 'opened'

    let nextBoxState
    let currentBox = this.state.cityBoxPosition
        currentBox == 'city-container-opened' ? nextBoxState = 'city-container-closed' : nextBoxState = 'city-container-opened'

    this.setState({
      zoomPosition: nextZoomPosState,
      wrapperState: nextWrapperState,
      cityBoxPosition: nextBoxState
    })
  }

  render() {
    return (
      <div>
        <Header triggerTransition={this.widgetsTransition.bind(this)} ></Header>
        <Dashboard 
          wrapperState={this.state.wrapperState} 
          temperatureTitle={`Temperature ºC`}
          humidityTitle={`Humidity %`}
          pressureTitle={`Pressure hPa`}
        ></Dashboard>
        <Map
          style="mapbox://styles/mapbox/dark-v9?optimize=true"
          center={this.state.center}
          zoom={this.state.zoom}
          containerStyle={{
            height: "100vh",
            padding: 0,
            margin: 0
          }}
          onClick={this.widgetsTransition.bind(this)}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15", "icon-size": 2.5 }}>
            <Feature coordinates={this.state.center}/>
          </Layer>
        </Map>
        <TextArea boxPosition={this.state.cityBoxPosition} triggerParentUpdateClick={this.search.bind(this)} triggerParentUpdateInput={this.changeHandler.bind(this)}></TextArea>
        <ZoomWidget position={this.state.zoomPosition} triggerZoomIn={this.setZoomIn.bind(this)} triggerZoomOut={this.setZoomOut.bind(this)}></ZoomWidget>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation: state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ FetchAPIResponse: fetchAPIResponse }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);
