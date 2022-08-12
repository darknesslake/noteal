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
