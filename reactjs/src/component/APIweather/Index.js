import React, { Component } from 'react';
import Weather from "./weather";
import Form from "./form";
import Titles from "./titles";
import axios from 'axios'
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
class Index extends Component {
    state = {

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }
    
      //getWeather is a method we'll use to make the api call
      getWeather = async (e) => {
    
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();   
        try {
          const api_call = await axios.get('http://api.openweathermap.org/data/2.5/weather?q='+city+ ','+country+'&appid='+Api_Key).then(res => {console.log(res.data)
         
          if(city && country){
            this.setState({
              temperature: res.data.main.temp,
              city: res.data.name,
              country: res.data.sys.country,
              humidity: res.data.main.humidity,
              description: res.data.weather[0].description,
              error: ""
            })
          }else{
            this.setState({
              error: "Please fill all fields..."
            })
          }});
          
        } catch (error) {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Can not find out this city..."
          })
        }
    
      }
    render() {

        return (
    
          <div>
             <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-5 title-container">
                    <Titles />
                    </div>
                    <div className="col-xs-7 form-container">
                    <Form loadWeather={this.getWeather} />
                      <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        )
      }
}

export default Index;