import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Clicked.");
  const handleImagePress = () => console.log("Image Touch.");
  const handleBtnPress = () => {
    //   Alert.alert("My Title", "My Message", [
    //     {
    //       text: "Yes", onPress: () => console.log("Yes")
    //     },
    //     {
    //       text: "No", onPress: () => console.log("No")
    //     }
    // ]);

    Alert.prompt("My Title", "My Message", (text) => console.log(text));

    console.log("Button Touch.");
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Button
      color="orange"
      title="Click Me" onPress={handleBtnPress} />
      <StatusBar style="auto" />
    </View>
  );
}


const containerStyle = {backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
