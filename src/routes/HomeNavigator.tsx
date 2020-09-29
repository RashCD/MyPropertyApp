import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screen/Home';
import SearchScreen, {SearchResultType} from 'screen/Search';
import SearchDetailScreen from 'screen/SearchDetail';

export type HomeRouteParams = {
  Home: undefined;
  Search: {query: string} | undefined;
  Detail: {item: SearchResultType['items'][0]};
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
      <HomeStack.Screen name="Detail" component={SearchDetailScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
