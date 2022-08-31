import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function FlatSwipe() {

  var initialElements = [
    { id : "0", text : "Object 1"},
    { id : "1", text : "Object 2"},
  ]

  const [exampleState, setExampleState] = useState(initialElements)

  const addElement = () => {
    var newArray = [...initialElements , {id : "2", text: "Object 3"}];
    setExampleState(newArray);
  }

  return (
    <View style={styles.container}>
        <FlatList
            keyExtractor = {item => item.id}
            data={exampleState}
            renderItem = {item => (<Text>{item.item.text}</Text>)} />
        <Button
          title="Add element"
          onPress={addElement} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
  },
});
