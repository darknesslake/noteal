import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, AsyncStorage, FlatList, Picker, Platform, ScrollView, Alert, TouchableOpacity } from 'react-native'; // importing components
import { Root, Toast } from 'native-base';
import { Constants } from 'expo';

import styles from '../../styles/styles.js'




export default function ThirtySix() {

    const [TEMP_DATA, setTEMP_DATA] =
                              useState([{id: '0', text: 'A ♣'}, {id: '1', text: 'A ♦'},
                                        {id: '2', text: 'A ♥'}, {id: '3', text: 'A ♠'},
                                        {id: '4', text: '6 ♣'}, {id: '5', text: '6 ♦'},
                                        {id: '6', text: '6 ♥'}, {id: '7', text: '6 ♠'},
                                        {id: '8', text:  '7 ♣'}, {id: '9', text: '7 ♦'},
                                        {id: '10', text: '7 ♥'}, {id: '11', text: '7 ♠'},
                                        {id: '12', text: '8 ♣'}, {id: '13', text: '8 ♦'},
                                        {id: '14', text: '8 ♥'}, {id: '15', text: '8 ♠'},
                                        {id: '16', text: '9 ♣'}, {id: '17', text: '9 ♦'},
                                        {id: '18', text: '9 ♥'}, {id: '19', text: '9 ♠'},
                                        {id: '20', text: '10 ♣'}, {id: '21', text: '10 ♦'},
                                        {id: '22', text: '10 ♥'}, {id: '23', text: '10 ♠'},
                                        {id: '24', text: 'J ♣'}, {id: '25', text: 'J ♦'},
                                        {id: '26', text: 'J ♥'}, {id: '27', text: 'J ♠'},
                                        {id: '28', text: 'Q ♣'}, {id: '29', text: 'Q ♦'},
                                        {id: '30', text: 'Q ♥'}, {id: '31', text: 'Q ♠'},
                                        {id: '32', text: 'K ♣'}, {id: '33', text: 'K ♦'},
                                        {id: '34', text: 'K ♥'}, {id: '35', text: 'K ♠'}])


    const [LEAVE_CARDS, leaveTempCards] =
                              useState([{id: '0', text: 'A ♣'}, {id: '1', text: 'A ♦'},
                                        {id: '2', text: 'A ♥'}, {id: '3', text: 'A ♠'}])

    // const [exampleState, setExampleState] = useState(TEMP_DATA)
    // const [exampleState2, setExampleState2] = useState(leaveCards)
    // const onItemClick = () =>


    // const deleteItemById = id => () => {
    //   const filteredData = this.state.exampleState.filter(item => item.id !== id);
    //   this.setState({ data: filteredData });
    // }

    const deleteSelectedElement = (id, text) => {

      Alert.alert(
        'Sure?  ' + text.toUpperCase(),
        'Select Below Options',
        [
          { text: 'Cancel', onPress: () => { }, style: 'cancel' },
          {
            text: 'OK', onPress: () => {
              // Filter Data
              const filteredData = TEMP_DATA.filter(item => item.id !== id);
              //Updating List Data State with NEW Data.
              setTEMP_DATA(filteredData);

              const filteredData2 = LEAVE_CARDS.filter(item => item.id !== id);
            }
          },
        ])
    }

    const ItemRender = ({ id, text }) => (

        <Text style={styles.itemsFlatList}
          onPress={() => deleteSelectedElement(id, text)} >
          {text}
        </Text>

    );



    return(
      <View style={styles.containerFlatListHeader}>

      <View style={styles.containerFlatList}>
      <Text style={{ color: 'red' }}>Now in Deck</Text>
        <FlatList
          numColumns={4}
          keyExtractor = {(item) => item.id}
          data = {TEMP_DATA}
          renderItem = {({item}) => <ItemRender id={item.id} text={item.text} />} />
      </View>

      <View style={styles.containerFlatList2}>
      <Text style={{ color: 'red' }}>Left Cards</Text>
        <FlatList
          numColumns={4}
          keyExtractor = {(item) => item.id}
          data= {LEAVE_CARDS}
          renderItem = {({item}) => <Text style={styles.itemsFlatList}>{item.text}</Text>} />
        </View>

      </View>
    )

};
