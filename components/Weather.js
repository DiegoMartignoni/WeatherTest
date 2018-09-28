import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, position }) => {

  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <View style={styles.headerContainer}>
        <Ionicons
          size={150}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
        <Text style={styles.tempText}>{temperature}˚</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <View style={styles.viewSubtitle}>
          <Text style={styles.subtitleBold}>Presso: </Text>
          <Text style={styles.subtitle}>{position}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  },
  tempText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    justifyContent: 'flex-end'
  },
  viewSubtitle: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  subtitleBold: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    justifyContent: 'flex-end'
  }
});


export default Weather;
