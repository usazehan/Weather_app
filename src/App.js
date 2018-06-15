import React from "react";
import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const api_key = "c8b7a43066a12a63c61a31f1dbe99078";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    humidity: undefined,
    windSpeed: undefined,
    windDirection: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value, country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+ city +`,`+ country + `uk&appid=` + api_key + `&units=metric`);
    const data = await api_call.json();
    if(city && country){ 
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        humidity: undefined,
        windSpeed: undefined,
        windDirection: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }


  render (){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                  </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    city={this.state.city} 
                    country={this.state.country} 
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    windSpeed={this.state.windSpeed}
                    windDirection={this.state.windDirection}
                    description={this.state.description}
                    error={this.state.error}
                    />
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
    );
  }
};


export default App;