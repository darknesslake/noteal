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
