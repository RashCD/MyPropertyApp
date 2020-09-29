import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Div, Icon, Text} from 'react-native-magnus';
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
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Saved') {
            iconName = 'star';
          } else if (route.name === 'Me') {
            iconName = 'profile';
          }

          return (
            <Icon
              name={iconName}
              fontSize="2xl"
              color={color}
              fontFamily="AntDesign"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#0081c6',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Saved" component={SavedScreen} />
      <Tabs.Screen name="Me" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
