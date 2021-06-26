import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointments';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';


export function Home(){
	const [category, setCategory] = useState('');

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

  return(
		<View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
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
						<Appointment data={item} />					
					)}
					ItemSeparatorComponent ={() => <ListDivider />}
					style={styles.matches}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			
    </View>
  );
}