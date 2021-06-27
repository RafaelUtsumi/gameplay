import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { DetailsCreate } from '../screens/DetailsCreate';

import { theme } from '../global/styles/globalTheme';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return(
        <Navigator
					headerMode="none"
					screenOptions={{
						cardStyle: {
							backgroundColor: theme.colors.secondary100,
						}
					}}
				>
            <Screen 
                name="Home"
                component={Home}
            />
						<Screen 
                name="Details"
                component={Details}
            />
						<Screen 
                name="DetailsCreate"
                component={DetailsCreate}
            />
        </Navigator>
    )
}