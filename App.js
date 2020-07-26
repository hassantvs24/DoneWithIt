import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Clicked.");
  const handleImagePress = () => console.log("Image Touch.");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World Nadu Pappa.</Text>
      {/* <Image source={require('./assets/icon.png')} /> */}
      <TouchableHighlight onPress={handleImagePress}>
        <Image 
        fadeDuration={1000}
        blurRadius={0} 
        source={{ 
          width: 200,
          height: 300,
          uri : "https://picsum.photos/200/300" 
          }} />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
