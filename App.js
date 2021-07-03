import React ,{Component} from 'react';
import Form from './component/form';
import Weather from './component/weather';
const API_KEY ="01f90ed54a23f202a07217b952a7d0d0"
class App extends Component{
  state={
    temp :'',
    city :'',
    country :'',
    humidity :'',
    description :'',
    error :''


  }
  getWeather=async(e)=>{
    e.preventDefault();
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;

    const api= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    if (city && country){
      this.setState({
        temp :data.main.temp,
        city :data.name,
        country :data.sys.country,
        humidity :data.main.humidity,
        description :data.weather[0].description,
        error :''
    
        })
    }
    else {
      this.setState({
        temp :'',
      city :'',
      country :'',
      humidity :'',
      description :'',
      error :'please enter data'
      })
    }
  }
  render(){
    return(
      <div className="wrapper">
        <div className="form-container">
        <Form getWeather={this.getWeather}/>
        <Weather
           temp ={this.state.temp}
           city ={this.state.city}
           country ={this.state.country}
           humidity ={this.state.humidity}
           description ={this.state.description}
           error={this.state.error}
        />

      </div>
      </div>
    )
  }
}

export default App;
