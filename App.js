import { StatusBar as Stbar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ 
        //fontFamily: 'Robot',
        fontStyle: 'italic',
        fontWeight: "800",
        color: 'red',
        fontSize: 30,
        textDecorationLine: 'line-through'
       }} >
         Hello World
         </Text>
    </View>
  );
}

  