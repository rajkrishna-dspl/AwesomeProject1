import {View, Text} from 'react-native';
import React from 'react';
import Background from './Background';

const Signup = () => {
  return (
    <View style={{textAlign: 'center'}}>
      <Background>
        <Text style={{fontSize: 50, textAlign: 'center'}}>Signup</Text>
      </Background>
    </View>
  );
};

export default Signup;
