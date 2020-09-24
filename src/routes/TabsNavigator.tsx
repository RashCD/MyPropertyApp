import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Div, Text} from 'react-native-magnus';
import ProfileScreen from 'screen/Profile';

interface ITabsNavProps {}

export type TabsRouteName = {
  Home: undefined;
  Favorite: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<TabsRouteName>();

const HomeScreen = () => {
  return (
    <Div>
      <Text> Home Screen </Text>
    </Div>
  );
};

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
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Favorite" component={FavoriteScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
