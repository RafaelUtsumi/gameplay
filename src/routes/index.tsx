import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';
import { Login } from '../screens/Login';

export function	Routes(){
	const { user } = useAuth();

	return(
		<NavigationContainer>
			{ user.id ? <AuthRoutes /> : <Login />}
		</NavigationContainer>
	)
}