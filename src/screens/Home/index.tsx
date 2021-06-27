import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

import { styles } from './styles';


export function Home(){
	const [category, setCategory] = useState('');

	const navigation = useNavigation();

	const appointment = [
		{
			id: '1',
			guild: {
				id: '1',
				name: 'Lendários',
				icon: null,
				owner: true,
			},
			category: '1',
			date: '22/06 às 20:40h',
			description: 'é hoje que vamos chegar ao Challenger sem perder'
		},
		{
			id: '2',
			guild: {
				id: '2',
				name: 'Lendários',
				icon: null,
				owner: true,
			},
			category: '1',
			date: '22/06 às 20:40h',
			description: 'é hoje que vamos chegar ao Challenger sem perder'
		}
	]

	function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

	function handleDetails() {
		navigation.navigate('Details')
	}

	function handleDetailsCreate() {
		navigation.navigate('DetailsCreate')
	}
	
  return(
		<Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleDetailsCreate} />
      </View>
    
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

			<View style={styles.content}>
				<ListHeader 
					title="Partidas agendadas"
					subtitle="total 6"
				/>

				<FlatList
					data={appointment}
					keyExtractor={item => item.id}
					renderItem={({ item }) =>(
						<Appointment 
							data={item} 
							onPress={handleDetails}
						/>					
					)}
					ItemSeparatorComponent ={() => <ListDivider />}
					style={styles.matches}
					showsVerticalScrollIndicator={false}
				/>
			</View>		
    </Background>
  );
}