/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, isReadyRef} from './RootNavigation';

import MediaList from '../features/Media/screens/MediaList';
import MediaDetail from '../features/Media/screens/MediaDetail';

const RootStack = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      isReadyRef.current = true;
    }}>
    <RootStack.Navigator headerMode="none" initialRouteName="MediaList">
      <RootStack.Screen name="MediaList" component={MediaList} />
      <RootStack.Screen name="MediaDetail" component={MediaDetail} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
