import React from 'react';
import Screen from '../components/Screen';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
    return (
        <Screen>
            <WebView 
                source={{ uri: 'https://almodinagroc.com/' }}
             />
        </Screen>
    );
}

export default WebViewScreen;