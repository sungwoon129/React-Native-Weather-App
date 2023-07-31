/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useCallback} from 'react';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';
import {StyleSheet, View, Text, TextInput, ImageBackground} from 'react-native';

const App = () => {
  const [state, setState] = useState({
    zip: '',
    forecast: null,
  });
  const onChange = useCallback(e => {
    setState({
      ...state,
      zip: e.nativeEvent.text,
    });
  });
  const _handleTextChange = useCallback(
    e => {
      let zip = e.nativeEvent.text;
      OpenWeatherMap.fetchForecast(zip).then(forecast => {
        setState({
          ...state,
          forecast: forecast,
        });
      });
      console.log(state);
    },
    [state],
  );
  let content = null;

  if (state.forecast !== null) {
    content = (
      <Forecast
        main={state.forecast.main}
        description={state.forecast.description}
        temp={state.forecast.temp}
      />
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./flowers.png')}
        resizeMode="cover"
        style={styles.backdrop}>
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={styles.mainText}>Current weather for </Text>

            <TextInput
              style={[styles.zipCode, styles.mainText]}
              onSubmitEditing={_handleTextChange}
              underlineColorAndroid="transparent"
              placeholder="input zip code!"
              //value={state.zip}
              //onChange={onChange}
            />
          </View>
          {content}
        </View>
      </ImageBackground>
    </View>
  );
};

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
  },
  overlay: {
    paddingTop: 10,
    backgroundColor: '#000000',
    opacity: 0.5,
    paddingBottom: 10,
    
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zipCode: {
    lineHeight: baseFontSize,
  },
  mainText: {
    color: '#FFF',
  },
});

export default App;
