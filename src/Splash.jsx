import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

const Splash = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', margin: 0}}>
      <LottieView
        source={require('./assets/waveLoading.json')}
        autoPlay
        loop={true}
        resizeMode="cover"
        //onAnimationFinish={}
      />
    </View>
  );
};

export default Splash;
