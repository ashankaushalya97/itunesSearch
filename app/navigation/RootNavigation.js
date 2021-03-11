import * as React from 'react';

import {CommonActions, StackActions} from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.navigate(name, params);
}
export function reset(name, params) {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: name, params: params}],
      }),
    );
}
export function replace(name, params) {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(name, params));
}
export function goBack() {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(CommonActions.goBack());
}
export function pop(index) {
  isReadyRef.current &&
    navigationRef.current &&
    navigationRef.current.dispatch(StackActions.pop(index));
}
