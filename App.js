import { StatusBar as Stbar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ 
        backgroundColor: "dodgerblue",
        height: 100,
        width: 100,
        padding: 20,
        }}>
          <View style={{ 
            backgroundColor: 'gold',
            width: 50,
            height: 50
            }}>

          </View>
      </View>

    </View>
  );
}

  