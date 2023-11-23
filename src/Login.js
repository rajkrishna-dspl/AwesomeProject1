import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Button from './Button';

const Login = props => {
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
            alignItems: 'center',
          }}>
          <Text style={{color: darkGreen, fontSize: 40, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text style={{color: 'grey', fontSize: 15, marginTop: 10}}>
            Login to your account
          </Text>
          <Field placeholder="Email/ Username" keyboardType={'email address'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '70%',
              paddingRight: 16,
              marginBottom: 270,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Button
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => Alert('logged In')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
