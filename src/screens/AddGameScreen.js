import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native'; // importing components

import RadioGroup from 'react-native-radio-buttons-group';
import RadioForm from 'react-native-simple-radio-button';


const radioButtonsData = [
  {id: 0, label: '24', value: '24' },
  {id: 1, label: '36', value: '36' },
  {id: 2, label: '52', value: '52' },
];

const radioButtonsData2 = [
  { label: '24  ', value: '24' },
  { label: '36  ', value: '36' },
  { label: '52  ', value: '52' },
];

/*
const selectAmountCard = (a,b) => {
        if(arrayEquals(a,b)){
            alert("Login success")
          }else {
            alert(" Login Failed  ");
            seterrorCounter(errorCounter+1)
          }
              if (errorCounter>=2){
                 //Navigation code
                 navigation.navigate('Wait') // remove () =>
              }
}
*/
AddGameScreen
// The home screen contains the text “You are on the home page” and a button.
export default function AddGameScreen({navigation}) {

  const [radioButtons, setRadioButtons] = useState(radioButtons)
  const [chosenOption, setChosenOption] = useState(radioButtons);


// new
  const setValue = (value) => {
    var newArray = value.filter((item)=>item.selected===true); //get the items that are selected
    setRadioButtons(newArray[0].value); //set the selected value in this Hook
  };


// old
  function onPressRadioButton(radioButtonsArray) {
      setRadioButtons(radioButtonsArray);
  }



  function selectAmountCard(Navigation) {
    if (chosenOption == radioButtonsData2[0].value) {
        navigation.navigate("Twenty Four")
    } else if (chosenOption == radioButtonsData2[1].value) {
        navigation.navigate("Thirty Six")
    } else if (chosenOption == radioButtonsData2[2].value) {
        navigation.navigate("Fifty Two")
    } else { navigation.navigate("Thirty Six") }
  }


    return (
        <View style={styles.container}>
        <View style={styles.box1}>


        <RadioForm
        radio_props={radioButtonsData2}
        initial={1} //initial value of this group
        formHorizontal={true}
        onPress={(value) => {
          setChosenOption(value);
        }}
        />

        </View>

        <View style={styles.box2}>
          <Text style={styles.textf}>You are on the New Game page
          </Text>
          <Button
              // style={styles.box1}
              title="Create game"
              onPress={selectAmountCard}
          />
        </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    box1: {
      flex: 2,
      padding: 4,
      paddingTop: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box2: {
      flex: 1,
      padding: 4,
      paddingTop: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textf: {
      // flex: 1,
      padding: 20,
      // paddingTop: 40,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    row: {
      padding: 4,
      // paddingTop: 80,
      borderBottomColor: "red",
      borderBottomWidth: StyleSheet.hairlineWidth
    },
  });
