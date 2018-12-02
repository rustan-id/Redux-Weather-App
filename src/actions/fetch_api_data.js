import axios from 'axios'

export function fetchAPIResponse(type, city){
    return function(dispatch){

        type == 'weather' ? 
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=0614d13377e407e8c0724c47d862443b`).then(response => {
           dispatch({type:"FETCH_CONDITIONS", payload: response.data.main});
           dispatch({type:"FETCH_LOCATION", payload: response.data.coord});
        }).catch(err=>{
            console.log(err)
        }) 
        
        :

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=0614d13377e407e8c0724c47d862443b`).then(response => {

           let targetObjects = response.data.list.slice(1, 30)
           let days          = targetObjects.map((obj) => obj.dt_txt.slice(5, -3))
           let temperature   = targetObjects.map((obj) => obj.main.temp)
           let humidity      = targetObjects.map((obj) => obj.main.humidity)
           let pressure      = targetObjects.map((obj) => obj.main.pressure)

           dispatch({type:"FETCH_WEATHER", payload: [days, temperature, humidity, pressure]});
        }).catch(err=>{
            console.log(err)
        }) 
   }
}