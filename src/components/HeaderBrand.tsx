import React from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

import {Div, Input, Text, Icon, Button} from 'react-native-magnus';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IPropertyType} from 'screen/Home';

type HeaderBrandProps = {
  onChangePress: (type: string) => void;
  onSearchPress: (value: string) => void;
  selected: IPropertyType;
};

const HeaderBrand = ({
  selected = 'buy',
  onChangePress,
  onSearchPress,
}: HeaderBrandProps) => {
  const isSelect = (
    params: string,
  ): {
    color: string;
    underlayColor: string;
    borderBottomWidth: number;
  } => {
    if (params === selected) {
      return {
        color: 'brand',
        underlayColor: 'blue100',
        borderBottomWidth: 3,
      };
    }
    return {
      color: 'gray300',
      underlayColor: 'gray100',
      borderBottomWidth: 1,
    };
  };

  return (
    <Div flex={1} bg="brand">
      <SafeAreaView style={{flex: 1}}>
        <Div flex={1} alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" color="white" mb={10}>
            iProperty.com.my
          </Text>
          <Div rounded="md" w="90%" h="auto" bg="white">
            <Div w="100%" flexDir="row">
              {['buy', 'rent'].map((type) => (
                <Button
                  key={type}
                  mt={5}
                  w="50%"
                  h={50}
                  bg="white"
                  borderBottomWidth={isSelect(type).borderBottomWidth}
                  rounded="none"
                  borderColor={isSelect(type).color}
                  color={isSelect(type).color}
                  underlayColor={isSelect(type).underlayColor}
                  onPress={() => onChangePress(type)}>
                  {type.toUpperCase()}
                </Button>
              ))}
            </Div>
            <Div w="100%">
              <Input
                placeholder="Search for properties"
                py={15}
                onSubmitEditing={(
                  e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
                ) => onSearchPress(e.nativeEvent.text)}
                returnKeyType="search"
                prefix={<Icon name="search1" color="gray500" />}
              />
            </Div>
          </Div>
        </Div>
      </SafeAreaView>
    </Div>
  );
};

export default HeaderBrand;
