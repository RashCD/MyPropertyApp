import React from 'react';
import {ThemeProvider} from 'react-native-magnus';
import UserProvider from './UserProvider';

const RootProviders: React.FC = ({children}) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default RootProviders;
