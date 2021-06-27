import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native'; 
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import { theme } from '../../global/styles/globalTheme';
import BannerImg from '../../assets/banner.png'

export function Details(){
	const member = [
		{
			id: '1',
			username: 'Rafael',
			avatar_url: "https://github.com/RafaelUtsumi.png",
			status: 'online'
		},
		{
			id: '2',
			username: 'Rafael',
			avatar_url: "https://github.com/RafaelUtsumi.png",
			status: 'offline'
		}
	]

  return(
		<Background>
			<Header 
				title="Detalhes"
				action={
					<BorderlessButton>
						<Fontisto 
							name="share"
							size={24}
							color={theme.colors.primary}
						/>
					</BorderlessButton>
				}
			/>

			<ImageBackground
				source={ BannerImg }
				style={styles.banner}
			>
				<View style={styles.bannerContent}>
					<Text style={styles.title}>
						Lendários
					</Text>

					<Text style={styles.subtitle}>
						É hoje que vamos chegar ao challenger sem perder um partida			
					</Text>
				</View>
			</ImageBackground>

			<ListHeader 
				title="Jogadores"
				subtitle="Total 3"
			/>

			<FlatList
				data={member}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<Member data={item} />
				)}
				ItemSeparatorComponent={() => <ListDivider isCentered />}
				style={styles.members}
			/>

			<View style={styles.footer}>
				<ButtonIcon 
					title="Entrar na partida"
				/>
			</View>
    </Background>
  );
}