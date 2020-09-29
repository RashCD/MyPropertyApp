import React from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Div, Icon, Text, Button, Image} from 'react-native-magnus';
import {SearchResultType} from 'screen/Search';

const mediumText = {
  fontSize: 'md',
  fontWeight: '300',
};

const SearchResultItem = ({
  item,
  onPressFunc,
  renderFooter,
}: {
  item: SearchResultType['items'][0];
  onPressFunc?: () => void;
  renderFooter?: () => JSX.Element;
}) => {
  const noImage = require('../assets/no-image.png');

  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: item.prices[0].currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.prices[0].min);

  return (
    <TouchableHighlight onPress={onPressFunc}>
      <Div bg="white" shadow="xs" pb={10}>
        <Image
          h={200}
          w="100%"
          resizeMode="cover"
          source={{
            uri: item.cover?.thumbnailUrl,
          }}
          defaultSource={noImage}
        />
        <Div w="100%" mx={20}>
          <Text fontSize="2xl" fontWeight="bold" py={10}>
            {currencyFormat}
          </Text>
          <Div pb={20}>
            <Text fontSize="xl" fontWeight="bold">
              {item.title}
            </Text>
            {item.address && (
              <Text {...mediumText}>{item.address?.formattedAddress}</Text>
            )}
          </Div>
          <Text {...mediumText}>{item.propertyType}</Text>
          <Text {...mediumText}>
            Built up size: {item.attributes.builtUp} sq. ft.
          </Text>
          {item.attributes.furnishing && (
            <Text {...mediumText}>
              Furnishing: {item.attributes.furnishing}
            </Text>
          )}
          <Div
            h={30}
            w="100%"
            flex={1}
            my={10}
            flexDir="row"
            alignItems="center">
            {item.attributes.bedroom && (
              <Div mr={20} flexDir="row" alignItems="center">
                <Button rounded="circle" bg="gray100" mr={5}>
                  <Icon name="bed" color="gray600" fontFamily="FontAwesome" />
                </Button>
                <Text>{item.attributes.bedroom}</Text>
              </Div>
            )}
            {item.attributes.bathroom && (
              <Div mr={20} flexDir="row" alignItems="center">
                <Button rounded="circle" bg="gray100" mr={5}>
                  <Icon name="bath" color="gray600" fontFamily="FontAwesome" />
                </Button>
                <Text>{item.attributes.bathroom}</Text>
              </Div>
            )}
            {item.attributes.carPark && (
              <Div mr={20} flexDir="row" alignItems="center">
                <Button rounded="circle" bg="gray100" mr={5}>
                  <Icon name="car" color="gray600" fontFamily="FontAwesome" />
                </Button>
                <Text>{item.attributes.carPark}</Text>
              </Div>
            )}
          </Div>
          {renderFooter && renderFooter()}
        </Div>
      </Div>
    </TouchableHighlight>
  );
};

export default SearchResultItem;
