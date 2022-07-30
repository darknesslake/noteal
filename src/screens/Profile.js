import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native'; // importing components



// About screen contains the text “You are on the about page” and a button.
export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/1.png')} resizeMode="cover" style={styles.backgroundImage}>
        <Text>You are on the about page</Text>
        <Button
            title="Back to home"
            onPress={() => navigation.navigate('Home')}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '120%',
      height: '120%',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      flex: 1 
      // width: undefined,
      // height: undefined,
      // flexDirection: 'column',
      // backgroundColor:'transparent',
      // justifyContent: 'flex-start',
    },
  });
