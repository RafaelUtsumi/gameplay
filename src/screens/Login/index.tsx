import React, { useContext } from 'react';
import { 
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png'
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';
import { theme } from '../../global/styles/globalTheme';

export function Login(){
	const { loading, login } = useAuth();

	async function handleLogin() {
		try {
			await login();
		} catch (error) {
			Alert.alert(error);
		}
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
					
					{
						loading 
						? <ActivityIndicator color={theme.colors.primary} />
						: <ButtonIcon 
								title="Entrar com Discord"
								onPress={handleLogin}
							/>
					}	
				</View>
			</View>
		</Background>
  )
}