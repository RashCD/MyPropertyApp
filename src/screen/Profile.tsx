import {UserContext} from 'providers/UserProvider';
import React, {useContext} from 'react';
import {Button, Div, Text} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  const {user, logout} = useContext(UserContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Div flex={1} justifyContent="center" alignItems="center">
        <Text> Profile Screen </Text>
        <Text>{user?.username}</Text>
        <Button
          alignSelf="center"
          mt="lg"
          px="xl"
          py="lg"
          bg="red500"
          color="white"
          onPress={() => logout()}>
          Logout
        </Button>
      </Div>
    </SafeAreaView>
  );
};

export default Profile;
