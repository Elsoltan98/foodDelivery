import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SEARCH, SEARCHRESULT} from '../global/RoutesName';
import Search from '../screens/Search';
import SearchResult from '../screens/SearchResult';

const SearchStack = createNativeStackNavigator();

const SearchNavigation = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name={SEARCH} component={Search} />
      <SearchStack.Screen name={SEARCHRESULT} component={SearchResult} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
