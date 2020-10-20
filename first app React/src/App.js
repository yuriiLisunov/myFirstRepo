import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "a453c3b9d80d03955b9a0092021760bc";

class App extends React.Component {

    state ={
      temp : undefined,
      city : undefined, 
      country : undefined,
      pressure : undefined,
      wind : undefined, 
      error : undefined 
    }

    gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
     
    if (city){
    const api_url = await 
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY} `);
    const data = await api_url.json();
    console.log(data);

    var sunset = data.sys.sunset;
    var date = new Date();
    date.setTime(sunset);
    var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      
    this.setState({
      temp: data.main.temp,
      city : data.name,
      country : data.sys.country,
      pressure : data.main.pressure,
      wind : data.wind.speed,
      error :  undefined
       });
      } else {
        this.setState({
          temp : undefined,
          city : undefined, 
          country : undefined,
          pressure : undefined,
          wind : undefined, 
          error : "Введіть назву міста!!!" 
           });
      }
    }
     
    render () {
       return (
       <div className="wrapper">
         <div className="main">
         <div className="container">
           <div className="row">
             <div className="col-md-5 info">
             <Info/>
             </div>
             <div className="col-md-7 form">
             <Form weatherMethod={this.gettingWeather}/>
              <Weather
              temp = {this.state.temp}
              city = {this.state.city}
              country = {this.state.country}
              pressure = {this.state.pressure}
              wind = {this.state.wind}
              error = {this.state.error}
              />
             </div>
          </div>
        </div>
        </div>
       </div>
       )
       }
}

export default App;
