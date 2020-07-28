import { StyleSheet } from 'react-native';
import colors from '../../config/colors';


const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 20
    },

    background : {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center'

    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },

    background : {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },

    tagLine: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20
    }
});

export default styles;