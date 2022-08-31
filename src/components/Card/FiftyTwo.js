import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, AsyncStorage, FlatList, Picker, Platform, ScrollView, Alert, TouchableOpacity } from 'react-native'; // importing components

import styles from '../../styles/styles.js'


export default function FiftyTwo() {

    const [TEMP_DATA, setTEMP_DATA] =
                              useState([{id: '0', text: 'A ♣'}, {id: '1', text: 'A ♦'},
                                        {id: '2', text: 'A ♥'}, {id: '3', text: 'A ♠'},
                                        {id: '4', text: '2 ♣'}, {id: '5', text: '2 ♦'},
                                        {id: '6', text: '2 ♥'}, {id: '7', text: '2 ♠'},
                                        {id: '8', text:  '3 ♣'}, {id: '9', text: '3 ♦'},
                                        {id: '10', text: '3 ♥'}, {id: '11', text: '3 ♠'},
                                        {id: '12', text: '4 ♣'}, {id: '13', text: '4 ♦'},
                                        {id: '14', text: '4 ♥'}, {id: '15', text: '4 ♠'},
                                        {id: '16', text: '5 ♣'}, {id: '17', text: '5 ♦'},
                                        {id: '18', text: '5 ♥'}, {id: '19', text: '5 ♠'},
                                        {id: '20', text: '6 ♣'}, {id: '21', text: '6 ♦'},
                                        {id: '22', text: '6 ♥'}, {id: '23', text: '6 ♠'},
                                        {id: '24', text:  '7 ♣'}, {id: '25', text: '7 ♦'},
                                        {id: '26', text: '7 ♥'}, {id: '27', text: '7 ♠'},
                                        {id: '28', text: '8 ♣'}, {id: '29', text: '8 ♦'},
                                        {id: '30', text: '8 ♥'}, {id: '31', text: '8 ♠'},
                                        {id: '32', text: '9 ♣'}, {id: '33', text: '9 ♦'},
                                        {id: '34', text: '9 ♥'}, {id: '35', text: '9 ♠'},
                                        {id: '36', text: '10 ♣'}, {id: '37', text: '10 ♦'},
                                        {id: '38', text: '10 ♥'}, {id: '39', text: '10 ♠'},
                                        {id: '40', text: 'J ♣'}, {id: '41', text: 'J ♦'},
                                        {id: '42', text: 'J ♥'}, {id: '43', text: 'J ♠'},
                                        {id: '44', text: 'Q ♣'}, {id: '45', text: 'Q ♦'},
                                        {id: '46', text: 'Q ♥'}, {id: '47', text: 'Q ♠'},
                                        {id: '48', text: 'K ♣'}, {id: '49', text: 'K ♦'},
                                        {id: '50', text: 'K ♥'}, {id: '51', text: 'K ♠'}])

    const [leaveCards, leaveTempCards] =
                              useState([{id: '0', text: 'A ♣'}, {id: '1', text: 'A ♦'},
                                        {id: '2', text: 'A ♥'}, {id: '3', text: 'A ♠'}])

    const [exampleState, setExampleState] = useState(TEMP_DATA)
    const [exampleState2, setExampleState2] = useState(leaveCards)

    // const onItemClick = () =>


    // const deleteItemById = id => () => {
    //   const filteredData = this.state.exampleState.filter(item => item.id !== id);
    //   this.setState({ data: filteredData });
    // }

    const deleteSelectedElement = (id, text) => {

      Alert.alert(
        'Are You Sure Want To Delete Item = ' + text.toUpperCase(),
        'Select Below Options',
        [
          { text: 'Cancel', onPress: () => { }, style: 'cancel' },
          {
            text: 'OK', onPress: () => {
              // Filter Data
              const filteredData = TEMP_DATA.filter(item => item.id !== id);
              //Updating List Data State with NEW Data.
              setTEMP_DATA(filteredData);
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
          data= {exampleState2}
          renderItem = {({item}) => (<Text style={styles.itemsFlatList}>{item.text}</Text>)} />
        </View>

      </View>
    )

};
