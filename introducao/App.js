import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Calculadora from './components/IMC';

export default function App() {
  return(
    <Calculadora></Calculadora>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: '20px'
  },
});