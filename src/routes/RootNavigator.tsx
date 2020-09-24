import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Div} from 'react-native-magnus';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from 'providers/UserProvider';
import LoginNavigator from './LoginNavigator';
import TabsNavigator from './TabsNavigator';

const RootNavigator: React.FC = () => {
  const {user, login} = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    AsyncStorage.getItem('user').then((userString) => {
      if (userString) {
        login();
      }
      setLoading(false);
    });
  }, [login]);

  if (loading) {
    return (
      <Div flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size="large" />
      </Div>
    );
  }

  return (
    <NavigationContainer>
      {user ? <TabsNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
