import {useFocusEffect} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';

const Splash = ({navigation}: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
      const timeout = setTimeout(() => navigation.navigate('Home'), 2000);
      return () => clearTimeout(timeout);
    }, [fadeAnim, navigation]),
  );

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <LottieView
        source={require('../assets/splash.json')}
        style={styles.lottieContainer}
        resizeMode="cover"
        autoPlay
        loop
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 30,
  },
  lottieContainer: {width: 250, height: 250},
});

export default Splash;
