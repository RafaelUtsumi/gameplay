import React from 'react';
import { 
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles';
export function Login(){
	const navigator = useNavigation();

	function handleLogin() {
		navigator.navigate('Home');
	}
  return(
		<Background>
			<View style={styles.conteiner}>
				<Image 
					source={IllustrationImg}
					style={styles.image}
					resizeMode='stretch'
				/>

				<View style={styles.content}>
					<Text style={styles.title}>
						Conecte-se {'\n'} e organize suas {'\n'} jogatinas
					</Text> 

					<Text style={styles.subtitle}>
						Crie grupo para jogar seus games {'\n'} favoritos com seus amigos
					</Text>
					
					<ButtonIcon 
							title="Entrar com Discord"
							onPress={handleLogin}
					/>
				</View>
			</View>
		</Background>
  )
}