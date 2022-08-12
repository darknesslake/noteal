import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'; // importing components

import styles from '../../styles/styles.js'


export default class TwentyFour extends Component {

  render() {
    return(
      <View style={styles.container}>
      <ImageBackground  style={styles.backgroundtone}>
      <View style={styles.container}>


          <Text>You are on the TwentyFour page</Text>


        </View>
        </ImageBackground>
      </View>
    )
  }
};
