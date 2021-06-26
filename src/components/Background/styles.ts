import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/globalTheme';

export const styles = StyleSheet.create({
	container: {
    height: Dimensions.get('window').height
  },
});
