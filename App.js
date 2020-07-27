import { StatusBar as Stbar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor:'#fff', flex: 1, flexDirection: 'row', 
      justifyContent: 'center', //main
      alignItems: 'center', //secondary
      flexWrap: 'wrap',
      alignContent: 'center'
      }}>
        <View style={{ backgroundColor:'dodgerblue', flexGrow: 1, width: 100, height:100}}></View>
        <View style={{ backgroundColor:'gold', width: 100, height:100 }}></View>
        <View style={{ backgroundColor:'tomato', width: 100, height:100 }}></View>
      </View>
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
  