import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
  image: {
    height: 100,
    width: '10%',
  },
  authButton: {
    width: 300,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    margin: 5,
  },
  authButtonText: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    top: 10,
  },
  buttonBackgroundF: {
    backgroundColor: 'blue',
  },
  buttonBackgroundG: {
    backgroundColor: 'green',
  },
});

interface AuthenticationProps {
  googleSignIn: () => void;
}

function SignInScreen({ googleSignIn }: AuthenticationProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: '600',
          fontFamily: 'commiBold',
        }}
      >
        LOGIN
      </Text>
      {/* <View style={{}}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/images/fEx.png')}
          style={{ width: 200, height: 300 }}
          resizeMode="contain"
        />
      </View> */}
      <View style={{ width: '100%', alignItems: 'center' }}>
        <SocialIcon
          iconSize={30}
          style={{ width: 310 }}
          title="Sign up with Google"
          button
          type="google"
          onPress={() => googleSignIn()}
        />
      </View>
    </View>
  );
}

export default SignInScreen;
