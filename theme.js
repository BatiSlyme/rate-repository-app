import Constants from 'expo-constants';
import { Platform } from 'react-native';

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.OS === 'android' ? 'sans-serif' : 'Arial',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'row'
    },
    cotnainerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
};

export default theme;