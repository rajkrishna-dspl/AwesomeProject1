import {View, Text} from 'react-native';
import React from 'react';
import Background from './Background';

const Login = () => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            fontSize: 50,
            color: 'white',
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 460,
            borderTopLeftRadius: 150,
            paddingTop: 100,
          }}>
          <Text>Hello world</Text>
        </View>
      </View>
    </Background>
  );
};

export default Login;
