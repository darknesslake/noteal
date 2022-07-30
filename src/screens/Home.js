import React, { Component, useState, useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert, ImageBackground } from 'react-native'; // importing components
// import Dialog from "react-native-dialog";

import AddScreen from '../components/Addjs'


// const RootStack = createNativeStackNavigator();
// import Icon from 'react-native-ionicons';

// The home screen contains the text “You are on the home page” and a button.

// class HomeScreen extends Component {

//   render() {
//     const herewr = () => Alert.prompt("Here: ")
//     const handleButtonPress = () => Alert.alert('Hi')
//     const handleButtonPress2 = () => Alert.alert('Hi', 'Main', [
//       {text: 'Да', onPress: () => console.log('Yes by')},
//       {text: 'Отмена', onPress: () => console.log('No by')}
//     ]);
//     const handleButtonPress3 = () =>  Alert.alert(herewr)



//     return (
      
//       <View style={styles.container}>

//         <ImageBackground  style={styles.backgroundImage}
//                           source={require('../assets/images/1.png')}>
        
//         <Text>You are on the home page.
//         </Text>

//         <Button
//             title="About page"
//             onPress={() => this.props.navigation.navigate('Profile')}
//         />
//         <Text>Add new game.
//         </Text>
        
//         <Button
//             title="New Game"
//             onPress={handleButtonPress}
//         />
        
//         <Button
//             title="Button 1"
//             onPress={handleButtonPress2}
//         />
//         <Button
//             style={styles.buttonp}
//             title="Button 2"
//             onPress={handleButtonPress3}
//         />
        
//       </ImageBackground> 

//       </View>

//     );
//   }
// }

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>

    </View>
  );
}



const styles = StyleSheet.create({
    main: {
      paddingTop: 60,
      height: 100,
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    buttonp: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
      width: '50%',
      height: '50%',
      position: 'absolute',
      top: 150,
      left: -150,
      
    },
  });
