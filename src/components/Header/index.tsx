import React, { ReactNode } from 'react';
import { Text, View } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../global/styles/globalTheme';


type Props = {
	title: string;
	action?: ReactNode;
}

export function Header({ title, action }: Props ){
	const { secondary100, secondary040, heading } = theme.colors;	

	const navigation = useNavigation();

	function handleGoBack(){
		navigation.goBack();
	}

  return(
		<LinearGradient
			style={styles.container}
			colors={[secondary100, secondary040]}
		>
			<BorderlessButton onPress={handleGoBack}>
				<Feather 
					name="arrow-left"
					size={24}
					color={heading}
				/>
			</BorderlessButton>
      
			<Text style={styles.title}>
				{ title }
			</Text>

			{
				action &&
				<View>
					{ action }
				</View>
			}

    </LinearGradient>
  );
}