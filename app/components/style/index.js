import { StyleSheet } from 'react-native';
import colors from '../../config/colors';


const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 20
    },

    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },

    loginButton: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    registerButton: {
        backgroundColor: colors.secondary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%'
    },
    btnText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
});

export default styles;