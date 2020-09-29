import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from 'routes/RootNavigator';
import RootProviders from 'providers/RootProviders';
import IconModulesAwesome from 'react-native-vector-icons/FontAwesome';
import IconModulesAnt from 'react-native-vector-icons/AntDesign';

IconModulesAwesome.loadFont();
IconModulesAnt.loadFont();

const App: React.ReactNode = () => (
  <RootProviders>
    <RootNavigator />
  </RootProviders>
);

export default App;
