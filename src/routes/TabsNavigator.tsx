import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Div, Text} from 'react-native-magnus';
import ProfileScreen from 'screen/Profile';
import HomeNavigator from './HomeNavigator';

interface ITabsNavProps {}

export type TabsRouteName = {
  Home: undefined;
  Saved: undefined;
  Me: undefined;
};

const Tabs = createBottomTabNavigator<TabsRouteName>();

const SavedScreen = () => {
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
      <Tabs.Screen name="Saved" component={SavedScreen} />
      <Tabs.Screen name="Me" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
