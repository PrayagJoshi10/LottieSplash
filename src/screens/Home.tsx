import LottieView from 'lottie-react-native';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/home.json')}
        style={styles.lottieContainer}
        resizeMode="cover"
        autoPlay
        loop={false}
      />
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  lottieContainer: {width: 250, height: 250},
});

export default Home;
