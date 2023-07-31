import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

const Forecast = ({main, description, temp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{main}</Text>
      <Text style={styles.mainText}>Current conditions: {description}</Text>
      <Text style={styles.bigText}>{temp}℉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  bigText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
export default Forecast;
