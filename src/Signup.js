import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Button from './Button';

const Signup = props => {
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
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
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
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email address'}
          />
          <Field placeholder="Contact Number" />
          <Field placeholder="New Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              width: '70%',
              flexDirection: 'row',
              paddingRight: 16,
              marginBottom: 10,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'grey', fontSize: 12}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 12}}>
              Terms & Conditions
            </Text>
          </View>
          <Button
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Register"
            Press={() => {
              alert('Account Created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
