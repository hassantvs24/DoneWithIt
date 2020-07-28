import React from 'react';
import { View } from 'react-native';
import AppText from './app/components/AppText.ios';
import Heading from './app/components/Heading';
import AppButton from './app/components/AppButton';
import { Octicons } from '@expo/vector-icons';
import styles from './app/components/style/index';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
       <Heading>Heading 1</Heading>
       <AppText><Octicons name="mail" size={200} color="dodgerblue" /></AppText>
       <AppButton title="login" btnStyle={styles.registerButton} onPress={() => console.log('press btn')} />
    </View>
  );
}

  