import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { theme } from '../../global/styles/globalTheme';
import { styles } from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildProps } from '../Guild';
import { GuildIcon } from '../GuildIcon';

export type AppointmentProps = {
	id: string;
	guild: GuildProps;
	date: string;
	description: string;
}

type Props = RectButtonProps & {
	data: AppointmentProps;
} 

export function Appointment({ data, ...rest }: Props) {
	const { owner } = data.guild;
	const { primary, on, secondary050, secondary070 } = theme.colors;

	return (
		<RectButton {...rest}>
			<View style={styles.container}>
				<LinearGradient 
				style={styles.guildIconContainer}
				colors={[secondary050, secondary070]}
				>
				<GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
				</LinearGradient>

				<View style={styles.content}>
					<View style={styles.header}>
					<Text style={styles.title}>
					{ data.guild.name }
					</Text>

					</View>

					<View style={styles.footer}>
						<View style={styles.dateInfo}>
							<CalendarSvg />

							<Text style={styles.date}>
								{ data.date }                
							</Text>
						</View>

						<View style={styles.playersInfo}>
							<PlayerSvg fill={ owner ? primary : on}/>

							<Text style={[
								styles.player, 
								{ color: owner ? primary : on }
								]}>
								{ owner ? 'Anfitrião' : 'Visitante' }
						</Text>
						</View>          
					</View>
				</View>
			</View>
		</RectButton>
	)
}