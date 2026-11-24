import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.message}>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#70BEF5',
  },
  message: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
});