import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Div, Text} from 'react-native-magnus';
import ProfileScreen from 'screen/Profile';
import HomeNavigator from './HomeNavigator';

interface ITabsNavProps {}

export type TabsRouteName = {
  Home: undefined;
  Favorite: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<TabsRouteName>();

const FavoriteScreen = () => {
  return (
    <Div>
      <Text> Favorite Screen </Text>
    </Div>
  );
};

const TabsNavigator: React.FC<ITabsNavProps> = () => {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Favorite" component={FavoriteScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
