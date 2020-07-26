import { StatusBar as Stbar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, TouchableOpacity, StatusBar } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text Clicked.");
  const handleImagePress = () => {
    console.log(StatusBar.currentHeight);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello World Nadu Pappa.</Text>
      <TouchableOpacity onPress={handleImagePress}>
        <Image source={{ 
          width: 200,
          height: 300,
          uri : "https://picsum.photos/200/300" 
          }} />
      </TouchableOpacity>

      <Stbar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
