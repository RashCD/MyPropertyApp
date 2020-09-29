import React, {useContext, useState} from 'react';
import {
  Button,
  Icon,
  Div,
  Text,
  Input,
  Snackbar,
  SnackbarRefType,
} from 'react-native-magnus';
import {UserContext} from 'providers/UserProvider';
import {
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableWithoutFeedback,
} from 'react-native';

const Login = () => {
  const {login} = useContext(UserContext);
  const [username, setUsername] = useState<string>('');
  const snackbarLightRef = React.createRef<SnackbarRefType>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Div flex={1} justifyContent="center" alignItems="center">
        <Text
          fontWeight="600"
          fontSize="2xl"
          h="auto"
          w="100%"
          mb="3xl"
          textAlign="center">
          Welcome
        </Text>

        <Text fontSize="xl" h="auto" w="100%" mb="md" textAlign="center">
          Enter your name below before login in
        </Text>
        <Input
          placeholder="Username"
          p={10}
          w={200}
          mb="3xl"
          focusBorderColor="blue700"
          suffix={
            <Icon name="search1" color="gray900" fontFamily="AntDesign" />
          }
          value={username}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setUsername(e.nativeEvent.text)
          }
        />
        <Button
          alignSelf="center"
          mt="lg"
          px="xl"
          py="lg"
          bg="blue500"
          color="white"
          suffix={
            <Icon
              name="arrowright"
              ml="md"
              color="white"
              fontFamily="AntDesign"
            />
          }
          onPress={() => {
            if (snackbarLightRef.current && !username) {
              return snackbarLightRef.current.show();
            }
            login(username);
          }}>
          Start
        </Button>
        <Snackbar
          suffix={
            <Icon
              name="exclamationcircleo"
              color="gray800"
              fontSize="subheader"
              fontFamily="AntDesign"
            />
          }
          ref={snackbarLightRef}
          bg="yellow300"
          color="gray800"
          duration={3000}>
          Please fill in your username first
        </Snackbar>
      </Div>
    </TouchableWithoutFeedback>
  );
};

export default Login;
