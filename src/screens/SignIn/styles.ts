import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/globalTheme';

export const styles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 320,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: { 
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
				fontFamily: theme.fonts.title700,
				
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 50,
				fontFamily: theme.fonts.title500,
				lineHeight: 25,
    },
});