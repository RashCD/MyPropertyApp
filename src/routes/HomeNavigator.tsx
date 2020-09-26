import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screen/Home';
import SearchScreen from 'screen/Search';

export type HomeRouteParams = {
  Home: undefined;
  Search: {query: string} | undefined;
};

const HomeStack = createStackNavigator<HomeRouteParams>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
