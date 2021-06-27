import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';
import { Login } from '../screens/Login';

export function	Routes(){
	const { user } = useAuth();

	return(
		<NavigationContainer>
			{ user.id ? <AppRoutes /> : <Login />}
		</NavigationContainer>
	)
}