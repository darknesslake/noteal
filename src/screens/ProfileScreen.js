import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'; // importing components

import styles from '../styles/styles.js'



// About screen contains the text “You are on the about page” and a button.
export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground  style={styles.backgroundtone}>
      <View style={styles.container}>


          <Text>You are on the Profile page</Text>


        </View>
        </ImageBackground>
      </View>
    );
  }
}

/*
<Button
    title="Back to home"
    onPress={() => this.props.navigation.navigate('Home')}
/>



*/
