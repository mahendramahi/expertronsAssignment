import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch, Provider} from 'react-redux';
import colors from './constants/colors';
import {onCounterDec, onCounterInc} from './redux/counter/counter.actions';

const Counter = () => {
  // const counter = useSelector((state) => state.counter);

  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            borderColor: '#000',
            borderWidth: 2,
            padding: 4,
          }}
          onPress={() => {
            dispatch(onCounterInc({}));
          }}>
          <Text>Increment</Text>
        </TouchableOpacity>

        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 18,
            color: colors.denim,
          }}>
          {counter.counter}
        </Text>
        <TouchableOpacity
          style={{
            borderColor: '#000',
            borderWidth: 2,
            padding: 4,
          }}
          onPress={() => {
            dispatch(onCounterDec({}));
          }}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;
