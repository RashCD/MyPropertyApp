import React, {useCallback, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type User = null | {username: string};

type UserObj = {
  user: User;
  login: (username?: string | null) => void;
  logout: () => void;
};

export const UserContext = React.createContext<UserObj>({
  user: null,
  login: () => {},
  logout: () => {},
});

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>(null);
  const implementation: UserObj = {
    user,
    login: useCallback((username) => {
      const fake = {username: username || 'bob'};
      setUser(fake);
      AsyncStorage.setItem('user', JSON.stringify(fake));
    }, []),
    logout: () => {
      setUser(null);
      AsyncStorage.removeItem('user');
    },
  };

  return (
    <UserContext.Provider value={implementation}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
