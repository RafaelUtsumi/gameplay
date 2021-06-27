import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/globalTheme';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 95,
		backgroundColor: theme.colors.secondary040,
		color: theme.colors.heading,
		borderRadius: 8,
		fontFamily: theme.fonts.text400,
		fontSize: 15,
		marginRight: 4,
		textAlign: 'justify',
		borderWidth: 1,
		borderColor: theme.colors.secondary050,
		paddingHorizontal: 16,
		paddingTop: 16,
		textAlignVertical: 'top',
	},
});