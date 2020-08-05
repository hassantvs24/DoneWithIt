import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from './../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply',
        description: 'Comes from a line in section 1.10.32',
        image: require('../assets/msg.jpg')
    },
    {
        id: 2,
        title: 'Contrary to popular belief',
        description: 'If you are going to use a passage of Lorem Ipsum',
        image: require('../assets/myimg.jpg')
    },
    {
        id: 3,
        title: 'There are many variations',
        description: 'Lorem Ipsum is that it has a more-or-less normal',
        image: require('../assets/cms.jpg')
    },
];

const MessageScreen = () => {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delete the message from massage
        //Call the server
        const newMessages = messages.filter(m => m.id !== message.id);

        setMessages(newMessages);

    }

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => <ListItem 
                    title={item.title} 
                    subTitle={item.description} 
                    image={item.image} 
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    onPress={() => console.log('Press List', item.title)} />}
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => setMessages(initialMessages)}
            />
        </Screen>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingLeft: 3,
        paddingRight: 3
    }
});

export default MessageScreen;