import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen />
  );

  // return (
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //      <Heading>Heading 1</Heading>
  //      <AppText><Octicons name="mail" size={200} color="dodgerblue" /></AppText>
  //      <AppButton title="login" btnStyle={styles.registerButton} onPress={() => console.log('press btn')} />
  //   </View>
  // );
}

  