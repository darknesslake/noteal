<RootStack.Screen name="New Game" component={AddGameScreen}
                  options={{
                            tabBarLabel: 'New',
                            tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
                          ),
}}
/>



/*
  return (
  <View>
    <RadioGroup
      radioButtons={radioButtonsData} //pass in our array
      onPress={(value) => setValue(value)}
    />
    <Text>{radioButtons}</Text>
  </View>
);
}
*/
Alert.alert('Take another and try again.')

radioButtons

<RadioGroup
    radioButtons={radioButtonsData}
    initial={0}
    onPress={(value) => setValue(value)}
    layout='row'
    // labelStyle
/>



const [chosenOption, setChosenOption] = useState(radioButtons);

<RadioForm
radio_props={radioButtonsData2}
initial={1} //initial value of this group
formHorizontal={true}
onPress={(value) => {
  setChosenOption(value);
}}
/>



const initialState = {
    cart: [],
    total: 0,
}

case ADD_TO_CART:
  let addCart = {
     meal_id: action.payload.id,
     name: action.payload.name,
     price: action.payload.price,
     quantity: 1,
     meal_details: ''
  }
  return {
    ...state,
    cart: [addCart, ...state.cart],
    total: state.total + action.payload.price
 }

















// 5
 import React, { useState } from 'react';
 import { Text, View, StyleSheet, Button } from 'react-native';
 import { FlatList } from 'react-native-gesture-handler';

 export default function HomeScreen() {

   var initialElements = [
     { id : "0", text : "Object 1"},
     { id : "1", text : "Object 2"},
   ]

   const [exampleState, setExampleState] = useState(initialElements);
   const [idx, incr] = useState(2);

   const addElement = () => {
     var newArray = [...initialElements , {id : toString(idx), text: "Object " + (idx+1) }];
     initialElements.push({id : toString(idx), text: "Object " + (idx+1) });
     incr(idx + 1);
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



// 10
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     width: '100%',
     borderWidth: 1
   },
 });

 import React, { useState } from 'react';
 import { Text, View, StyleSheet, Button } from 'react-native';
 import { FlatList } from 'react-native-gesture-handler';

 export default function HomeScreen() {

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




 deleteItemById = id => () => {
   const filteredData = this.state.data.filter(item => item.id !== id);
   this.setState({ data: filteredData });
 }

 render() {
   ...

   return (
     <FlatList
       data={data} // Assuming this is `this.state.data`
       keyExtractor={({item}) => item.id}
       renderItem={({item}) => (
         <View style={styles.container}>
           <SwipeView
             ...
             onSwipedLeft={this.deleteItemById(item.id)}
             ...
           />0
         </View>
       )}
     />
   );
 }

 <SwipeView
           renderVisibleContent={() => <Text style={styles.text}>SwipeMe</Text>}
         />
 <SwipeView
           renderVisibleContent={() => <Text style={styles.text}>{item.item.text}</Text>}
         />



         <FlatList
           keyExtractor = {item => item.id}
           data= {exampleState2}
           renderItem = {item => (<Text>{item.item.text}</Text>)} />






           <FlatList
             numColumns={4}
             keyExtractor = {(item) => item.id}
             data= {exampleState}
             renderItem = {({item}) => (<Text style={styles.itemsFlatList}>{item.text}</Text>)} />





             const setplayingcards = ['A ♣', 'A ♦', 'A ♥', 'A ♠',
                                        '2 ♣', '2 ♦', '2 ♥', '2 ♠',
                                        '3 ♣', '3 ♦', '3 ♥', '3 ♠',
                                        '4 ♣', '4 ♦', '4 ♥', '4 ♠',
                                        '5 ♣', '5 ♦', '5 ♥', '5 ♠',
                                        '6 ♣', '6 ♦', '6 ♥', '6 ♠',
                                        '7 ♣', '7 ♦', '7 ♥', '7 ♠',
                                        '8 ♣', '8 ♦', '8 ♥', '8 ♠',
                                        '9 ♣', '9 ♦', '9 ♥', '9 ♠',
                                        '10 ♣', '10 ♦', '10 ♥', '10 ♠',
                                        'J ♣', 'J ♦', 'J ♥', 'J ♠',
                                        'Q ♣', 'Q ♦', 'Q ♥', 'Q ♠',
                                        'K ♣', 'K ♦', 'K ♥', 'K ♠']

             const leaveplayingcards = []
             '2 ♣', '2 ♦', '2 ♥', '2 ♠',
             '3 ♣', '3 ♦', '3 ♥', '3 ♠',
             '4 ♣', '4 ♦', '4 ♥', '4 ♠',
             '5 ♣', '5 ♦', '5 ♥', '5 ♠',
