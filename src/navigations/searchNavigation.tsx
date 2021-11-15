import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SEARCH, SEARCHRESULT, SEARCHRESULTDETAILS} from '../global/RoutesName';
import Search from '../screens/Search';
import SearchResult from '../screens/SearchResult';
import SearchResultDetails from '../screens/SearchResultDetails';

const SearchStack = createNativeStackNavigator();

const SearchNavigation = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name={SEARCH} component={Search} />
      <SearchStack.Screen name={SEARCHRESULT} component={SearchResult} />
      <SearchStack.Screen
        name={SEARCHRESULTDETAILS}
        component={SearchResultDetails}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigation;
