import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from 'routes/RootNavigator';
import RootProviders from 'providers/RootProviders';

const App: React.ReactNode = () => (
  <RootProviders>
    <RootNavigator />
  </RootProviders>
);

export default App;
