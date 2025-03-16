import Constants from 'expo-constants';

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
        main: 'System',
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
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