import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from 'screen/Home';
import {ThemeProvider} from 'react-native-magnus';

const Stack = createStackNavigator();

const App: React.ReactNode = () => (
  <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
