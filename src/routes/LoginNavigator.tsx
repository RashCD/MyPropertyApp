import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from 'screen/Login';

export type RootRouteName = {
  Login: undefined;
};

const Stack = createStackNavigator<RootRouteName>();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
