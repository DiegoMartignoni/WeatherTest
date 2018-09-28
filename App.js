import React from 'react';
import { StyleSheet, Text, View, Animated  } from 'react-native';
import Weather from './components/Weather';

import { API_KEY } from './utils/WeatherAPIKey';

export default class App extends React.Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    position: null,
    error: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Conditions'
        });
      }
    );
  }

  fetchWeather(lat = 25, lon = 25){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        position: json.name,
        weatherCondition: json.weather[0].main,
        isLoading: false
      });
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        { isLoading ?
          <View style={styles.childContainer}>
            <Text style={styles.text}>Caricamento...</Text>
          </View>
          : <Weather weather={this.state.weatherCondition} temperature={this.state.temperature} position={this.state.position}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  childContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: '#3295ff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
