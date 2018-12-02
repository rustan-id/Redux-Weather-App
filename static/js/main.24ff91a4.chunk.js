(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(87),r=a.n(i),s=(a(98),a(4)),c=a(5),l=a(7),p=a(6),u=a(8),d=a(18),h=a(14),m=a(54),b=a.n(m);function v(e,t){return function(a){"weather"==e?b.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=0614d13377e407e8c0724c47d862443b")).then(function(e){a({type:"FETCH_CONDITIONS",payload:e.data.main}),a({type:"FETCH_LOCATION",payload:e.data.coord})}).catch(function(e){console.log(e)}):b.a.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&units=metric&APPID=0614d13377e407e8c0724c47d862443b")).then(function(e){var t=e.data.list.slice(1,30),n=t.map(function(e){return e.dt_txt.slice(5,-3)}),o=t.map(function(e){return e.main.temp}),i=t.map(function(e){return e.main.humidity}),r=t.map(function(e){return e.main.pressure});a({type:"FETCH_WEATHER",payload:[n,o,i,r]})}).catch(function(e){console.log(e)})}}var g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",null,o.a.createElement("svg",{className:"cloud-svg",viewBox:"0 0 105 105"},o.a.createElement("path",{className:"cloud-path",d:"M 25,60  a 20,20 1 0,0 0,40  h 50  a 20,20 1 0,0 0,-40  a 10,10 1 0,0 -15,-10  a 15,15 1 0,0 -35,10   z"})),o.a.createElement("span",{className:"title"},"World Weather App")),o.a.createElement("div",{onClick:this.props.triggerTransition,className:"hamburguer-container"},o.a.createElement("div",{className:"hambuguer-button"}),o.a.createElement("div",{className:"hambuguer-button"}),o.a.createElement("div",{className:"hambuguer-button"}),o.a.createElement("div",{className:"hambuguer-button"})))}}]),t}(n.Component),f=a(27),y={labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},E=(n.Component,function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.b,{data:{labels:this.props.labels,datasets:[{fill:!1,lineTension:.1,backgroundColor:"rgba(64,92,120,.4)",borderColor:"rgba(64,92,120,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(64,92,120,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.props.data}]},width:100,height:200,options:{title:{display:!0,text:this.props.title,fontColor:"#405C78"},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{ticks:{fontSize:11}}]}}}))}}]),t}(n.Component)),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"left-wrapper scrollbar custom-scrollbar ".concat(this.props.wrapperState)},o.a.createElement("div",{className:"indicators-container"},o.a.createElement("div",{className:"indicator-title"},"Temperature"),o.a.createElement("div",{className:"indicator-value"},this.props.apiConditions.temp," \xbaC"),o.a.createElement("hr",{className:"separator"}),o.a.createElement("div",{className:"indicator-title"},"Humidity"),o.a.createElement("div",{className:"indicator-value"},this.props.apiConditions.humidity," %"),o.a.createElement("hr",{className:"separator"}),o.a.createElement("div",{className:"indicator-title"},"Pressure"),o.a.createElement("div",{className:"indicator-value"},this.props.apiConditions.pressure," hPa"),o.a.createElement("hr",{className:"separator"})),o.a.createElement("div",{className:"indicators-container"},o.a.createElement(E,{data:this.props.apiResponse[1],labels:this.props.apiResponse[0],title:this.props.temperatureTitle}),o.a.createElement(E,{data:this.props.apiResponse[2],labels:this.props.apiResponse[0],title:this.props.humidityTitle}),o.a.createElement(E,{data:this.props.apiResponse[3],labels:this.props.apiResponse[0],title:this.props.pressureTitle}))))}}]),t}(n.Component);var C=Object(d.b)(function(e){return{apiResponse:e.FetchWeatherReducer.weatherData,apiLocation:e.FetchWeatherLocation.location,apiConditions:e.FetchCurrentConditions.conditions}})(O),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"city-container ".concat(this.props.boxPosition)},o.a.createElement("input",{className:"city-text-box",placeholder:"Enter a city...",onChange:this.props.triggerParentUpdateInput}),o.a.createElement("div",{className:"go-to-city",onClick:this.props.triggerParentUpdateClick},"Go"))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).call(this))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"zoom-widget ".concat(this.props.position)},o.a.createElement("div",{className:"zoom-plus",onClick:this.props.triggerZoomIn}),o.a.createElement("div",{className:"zoom-minus",onClick:this.props.triggerZoomOut}))}}]),t}(n.Component),k=a(39),N=a.n(k)()({accessToken:"pk.eyJ1IjoiYWRyaXNvbGlkIiwiYSI6ImNqNWt4cGczNjJpZW0yd29kYnJxZXhsaHkifQ.Iq48zrXcmg_xE2kZAbxmEQ"}),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).componentWillMount=function(){a.props.FetchAPIResponse("weather","Geneva"),a.props.FetchAPIResponse("forecast","Geneva")},a.state={value:"",city:[46.2,6.1],zoom:[10],center:[6.1,46.2],wrapperState:"opened",zoomPosition:"zoom-opened",cityBoxPosition:"city-container-opened"},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"search",value:function(){this.props.FetchAPIResponse("weather",this.state.value),this.props.FetchAPIResponse("forecast",this.state.value)}},{key:"componentWillReceiveProps",value:function(e){e.apiLocation!==this.props.apiLocation&&this.setState({center:[e.apiLocation.lon,e.apiLocation.lat],zoom:[9]})}},{key:"changeHandler",value:function(e){var t=e.target.value;this.setState({value:t})}},{key:"setZoomIn",value:function(){var e=this.state.zoom[0];this.setState({zoom:[e+1]})}},{key:"setZoomOut",value:function(){var e=this.state.zoom[0];this.setState({zoom:[e-1]})}},{key:"widgetsTransition",value:function(){var e,t,a;e="zoom-opened"==this.state.zoomPosition?"zoom-closed":"zoom-opened",t="opened"==this.state.wrapperState?"closed":"opened",a="city-container-opened"==this.state.cityBoxPosition?"city-container-closed":"city-container-opened",this.setState({zoomPosition:e,wrapperState:t,cityBoxPosition:a})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{triggerTransition:this.widgetsTransition.bind(this)}),o.a.createElement(C,{wrapperState:this.state.wrapperState,temperatureTitle:"Temperature \xbaC",humidityTitle:"Humidity %",pressureTitle:"Pressure hPa"}),o.a.createElement(N,{style:"mapbox://styles/mapbox/dark-v9?optimize=true",center:this.state.center,zoom:this.state.zoom,containerStyle:{height:"100vh",padding:0,margin:0},onClick:this.widgetsTransition.bind(this)},o.a.createElement(k.Layer,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15","icon-size":2.5}},o.a.createElement(k.Feature,{coordinates:this.state.center}))),o.a.createElement(w,{boxPosition:this.state.cityBoxPosition,triggerParentUpdateClick:this.search.bind(this),triggerParentUpdateInput:this.changeHandler.bind(this)}),o.a.createElement(j,{position:this.state.zoomPosition,triggerZoomIn:this.setZoomIn.bind(this),triggerZoomOut:this.setZoomOut.bind(this)}))}}]),t}(n.Component);var P=Object(d.b)(function(e){return{apiResponse:e.FetchWeatherReducer.weatherData,apiLocation:e.FetchWeatherLocation.location,apiConditions:e.FetchCurrentConditions.conditions}},function(e){return Object(h.b)({FetchAPIResponse:v},e)})(T),R=a(91),z=a.n(R),I=a(92),W=a(19),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{weatherData:[]},t=arguments.length>1?arguments[1]:void 0;return"FETCH_WEATHER"===t.type&&(e=Object(W.a)({},e,{weatherData:t.payload})),e},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{location:[]},t=arguments.length>1?arguments[1]:void 0;return"FETCH_LOCATION"===t.type&&(e=Object(W.a)({},e,{location:t.payload})),e},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{conditions:[]},t=arguments.length>1?arguments[1]:void 0;return"FETCH_CONDITIONS"===t.type&&(e=Object(W.a)({},e,{conditions:t.payload})),e},S=Object(h.c)({FetchWeatherReducer:x,FetchWeatherLocation:F,FetchCurrentConditions:A}),H=Object(h.a)(z.a,I.a),B=Object(h.d)(S,H),L=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:B},o.a.createElement("div",null,o.a.createElement(P,null)))}}]),t}(n.Component),Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(L,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Redux-Weather-App",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Redux-Weather-App","/service-worker.js");Z?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):D(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):D(e)})}}()},93:function(e,t,a){e.exports=a(287)},98:function(e,t,a){}},[[93,2,1]]]);
//# sourceMappingURL=main.24ff91a4.chunk.js.map