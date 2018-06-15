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
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value, country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=`+ city +`,`+ country + `uk&appid=` + api_key + `&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }


  render (){
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature} 
        city={this.state.city} 
        country={this.state.country} 
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
         />
        </div>
    );
  }
};

export default App;