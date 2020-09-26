import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Div, Text} from 'react-native-magnus';
import {HomeRouteParams} from 'routes/HomeNavigator';

type Props = StackScreenProps<HomeRouteParams, 'Search'>;

const Search = (props: Props) => {
  return (
    <Div flex={1} justifyContent="center" alignItems="center">
      <Text> Search here {props.route.params?.query}</Text>
    </Div>
  );
};

export default Search;
