import { StatusBar as Stbar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText.ios';
import Heading from './app/components/Heading';
import { Octicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <Heading>Heading 1</Heading>
       <AppText><Octicons name="mail" size={200} color="dodgerblue" /></AppText>
    </View>
  );
}

  