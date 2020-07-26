import { StatusBar as Stbar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {

  //const handlePress = () => console.log("Text Clicked.");

  //console.log(Dimensions.get('window'));
  console.log(useDeviceOrientation());

  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor:'dodgerblue', height: landscape ? '100%':'30%', width:'100%' }}></View>
      <Stbar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
}); 
  