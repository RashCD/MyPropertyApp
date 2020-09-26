import {StackScreenProps} from '@react-navigation/stack';
import HeaderBrand from 'components/HeaderBrand';
import React, {useState} from 'react';
import {Keyboard, Linking, TouchableWithoutFeedback} from 'react-native';
import {Button, Div, Image, Text} from 'react-native-magnus';
import IconModules from 'react-native-vector-icons/AntDesign';
import {HomeRouteParams} from 'routes/HomeNavigator';

IconModules.loadFont();

export type IPropertyType = 'buy' | 'rent';

type Props = StackScreenProps<HomeRouteParams, 'Home'>;

const Home = (props: Props) => {
  const [propertyType, setPropertyType] = useState<IPropertyType>('buy');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Div flex={1}>
        <HeaderBrand
          selected={propertyType}
          onChangePress={(type) => setPropertyType(type as IPropertyType)}
          onSearchPress={(text) =>
            props.navigation.navigate('Search', {query: text})
          }
        />
        <Div flex={3} alignItems="center">
          <Div w="90%" mb={30} justifyContent="space-between" flexDir="row">
            <Text fontSize="2xl" fontWeight="bold" py={10}>
              News
            </Text>
            <Text fontSize="2xl" color="brand" py={10}>
              More
            </Text>
          </Div>
          <Button
            w="90%"
            h="auto"
            rounded="md"
            bg="white"
            shadow="xs"
            flexDir="column"
            alignSelf="center"
            p={0}
            onPress={() =>
              Linking.openURL(
                'https://www.edgeprop.my/content/1737453/where-sustainability-and-innovation-form-crux-masterpiece',
              )
            }>
            <Image
              h={200}
              w="100%"
              rounded="md"
              roundedBottom="none"
              resizeMode="cover"
              source={{
                uri:
                  'https://media.edgeprop.my/s3fs-public/editorial/my/2020/September/17/TRXresidence01.JPG',
              }}
            />
            <Text py={20} px={10} fontSize="lg" fontWeight="500">
              Where sustainability and innovation form the crux of a masterpiece
            </Text>
          </Button>
        </Div>
      </Div>
    </TouchableWithoutFeedback>
  );
};

export default Home;
