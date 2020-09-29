import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Button, Div, Icon, Input} from 'react-native-magnus';
import {HomeRouteParams} from 'routes/HomeNavigator';
import SearchResultData from 'data/search-results-page.json';
import {
  FlatList,
  Keyboard,
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
  TextInputSubmitEditingEventData,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import SearchResultItem from 'components/SearchResultItem';

type Props = StackScreenProps<HomeRouteParams, 'Search'>;

export type SearchResultType = typeof SearchResultData;

const Search = (props: Props) => {
  const [inputState, setInputState] = useState<string>(
    props.route.params?.query ?? '',
  );
  const [searchQueryState, setSearchQueryState] = useState<string>(
    props.route.params?.query ?? '',
  );

  const filteredData = () => {
    if (searchQueryState && searchQueryState.toLowerCase() === 'all') {
      return SearchResultData.items;
    }
    if (searchQueryState && Platform.OS === 'ios') {
      return SearchResultData.items.filter((data) =>
        data.title.includes(searchQueryState),
      );
    }
    if (searchQueryState && Platform.OS === 'android') {
      return SearchResultData.items.filter((data) =>
        data.title.toLowerCase().includes(searchQueryState),
      );
    }

    return [];
  };

  return (
    <Div flex={1}>
      <Div h="15%" justifyContent="center" bg="white" shadow="xs">
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <Div w="100%" flexDir="row" my={10} ml={5} mr={10}>
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
            <Input
              w={300}
              p={10}
              placeholder="Search for properties"
              onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
                setInputState(e.nativeEvent.text)
              }
              onSubmitEditing={(
                e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
              ) => setSearchQueryState(e.nativeEvent.text)}
              returnKeyType="search"
              prefix={
                <Icon name="search1" color="gray500" fontFamily="AntDesign" />
              }
              value={inputState}
            />
          </Div>
        </SafeAreaView>
      </Div>
      <FlatList
        data={filteredData()}
        renderItem={({item}) => (
          <SearchResultItem
            item={item}
            onPressFunc={() => props.navigation.navigate('Detail', {item})}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Div h={30} w="100%" />}
        ListHeaderComponent={() => <Div h={30} w="100%" />}
        ListFooterComponent={() => <Div h={30} w="100%" />}
        onScrollBeginDrag={Keyboard.dismiss}
      />
    </Div>
  );
};

export default Search;
