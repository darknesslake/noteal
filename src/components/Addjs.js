import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // importing components

// import Icon from 'react-native-ionicons';

// The home screen contains the text “You are on the home page” and a button.
const Addjs = ({navigation}) => {

  return (
      <View style={styles.container}>
        <Text>You are on the New Game page
        </Text>
        <Button
            title="About page"
            onPress={() => navigation.navigate('Profile')}
        />
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
  });

export default Addjs;