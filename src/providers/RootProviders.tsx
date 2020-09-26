import React from 'react';
import {ThemeProvider} from 'react-native-magnus';
import UserProvider from './UserProvider';

const RootProviders: React.FC = ({children}) => {
  const theme = {
    colors: {
      brand: '#0081c6',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default RootProviders;
