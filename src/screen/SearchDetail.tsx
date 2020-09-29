import {StackScreenProps} from '@react-navigation/stack';
import SearchResultItem from 'components/SearchResultItem';
import React from 'react';
import {Linking} from 'react-native';
import {Button, Div, Icon, Image, ScrollDiv, Text} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeRouteParams} from 'routes/HomeNavigator';

type Props = StackScreenProps<HomeRouteParams, 'Detail'>;

const SearchDetail = (props: Props) => {
  const {
    params: {item},
  } = props.route;

  const dateObj = new Date(item.updatedAt);

  const formatDate = new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const initiateContact = (contactType: string) => {
    if (item.listers?.length) {
      return Linking.openURL(
        `${contactType}:${item.listers[0].contact.phones[0].number}`,
      );
    }
    if (contactType === 'whatsapp' && item.listers?.length) {
      const numberOnly = item.listers[0].contact.phones[0].number.replace(
        '+',
        '',
      );
      return Linking.canOpenURL('https://wa.me')
        .then((supported) => {
          if (supported) {
            Linking.openURL(
              `https://wa.me/${numberOnly}?text=I'm%20interested%20in%20your%20property%20`,
            );
          }
        })
        .catch((err) => {
          console.log('Make sure WhatsApp installed on your device', err);
        });
    }
    return null;
  };

  return (
    <Div flex={1} w="100%" h="100%">
      <Div h="15%" justifyContent="center" bg="white" shadow="xs">
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <Div
            w="100%"
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            my={10}
            ml={5}
            mr={10}>
            <Button
              w={50}
              h={50}
              bg="transparent"
              underlayColor="gray300"
              onPress={() => props.navigation.goBack()}>
              <Icon
                name="arrowleft"
                fontSize="2xl"
                color="black"
                fontFamily="AntDesign"
              />
            </Button>
            <Div flexDir="row" mr={30}>
              <Button underlayColor="gray200" bg="white" mr={10}>
                <Icon
                  name="sharealt"
                  fontSize="2xl"
                  color="black"
                  fontFamily="AntDesign"
                />
              </Button>
              <Button underlayColor="gray200" bg="white" mr={10}>
                <Icon
                  name="staro"
                  fontSize="2xl"
                  color="black"
                  fontFamily="AntDesign"
                />
              </Button>
            </Div>
          </Div>
        </SafeAreaView>
      </Div>
      <ScrollDiv w="100%" h="100%" contentContainerStyle={{paddingBottom: 70}}>
        <SearchResultItem
          item={props.route.params.item}
          renderFooter={() => (
            <Div>
              <Text>Publish on: {formatDate.format(dateObj)}</Text>
            </Div>
          )}
        />
        <Div w="100%" mb={10} />
        <Div w="100%" shadow="xs" bg="white" p={10}>
          <Text fontSize="xl" fontWeight="bold" pb={20}>
            Property Details
          </Text>
          <Div flexDir="row">
            <Text flex={1} fontSize="lg">
              Land Title
            </Text>
            <Text flex={1}>{item.attributes.landTitleType}</Text>
          </Div>
          <Div flexDir="row">
            <Text flex={1} fontSize="lg">
              Tenure
            </Text>
            <Text flex={1}>{item.attributes.tenure}</Text>
          </Div>
          <Div flexDir="row">
            <Text flex={1} fontSize="lg">
              Built Up Price
            </Text>
            <Text flex={1}>{item.attributes.builtUp}</Text>
          </Div>
          <Div flexDir="row">
            <Text flex={1} fontSize="lg">
              Furnishing
            </Text>
            <Text flex={1}>{item.attributes.furnishing}</Text>
          </Div>
        </Div>
        <Div w="100%" mb={10} />
        {item.listers && item.listers.length && (
          <Div
            w="100%"
            shadow="xs"
            bg="white"
            p={10}
            flexDir="row"
            alignItems="center"
            justifyContent="space-between">
            <Div flex={1} alignItems="center" flexDir="row">
              <Image
                h={50}
                w={50}
                m={10}
                rounded="circle"
                resizeMode="cover"
                source={{
                  uri: 'https://i.stack.imgur.com/l60Hf.png',
                }}
              />
              <Text ml={10}>{item.listers[0].name}</Text>
            </Div>
            <Button
              rounded="circle"
              underlayColor="gray500"
              bg="gray200"
              alignSelf="center"
              mr={20}
              onPress={() => initiateContact('tel')}>
              <Icon name="phone" color="black" />
            </Button>
            <Button
              rounded="circle"
              underlayColor="gray500"
              bg="gray200"
              alignSelf="center"
              mr={20}
              onPress={() => initiateContact('sms')}>
              <Icon name="message1" color="black" />
            </Button>
          </Div>
        )}
      </ScrollDiv>
      <Div w="100%" h={70} bg="white" shadow="md" flexDir="row">
        <Button
          flex={1}
          bg="brand"
          mx={10}
          alignSelf="center"
          onPress={() => initiateContact('tel')}>
          <Text fontSize="lg" color="white">
            Contact
          </Text>
        </Button>
        <Button
          flex={1}
          bg="gray200"
          mx={10}
          alignSelf="center"
          onPress={() => initiateContact('whatsapp')}>
          <Icon
            name="whatsapp"
            color="green700"
            fontFamily="FontAwesome"
            mx={10}
          />
          <Text fontSize="lg">Whatsapp</Text>
        </Button>
      </Div>
    </Div>
  );
};

export default SearchDetail;
