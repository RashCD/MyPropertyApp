import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screen/Home';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
