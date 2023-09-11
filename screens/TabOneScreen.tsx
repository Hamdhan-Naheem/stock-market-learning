/* eslint-disable global-require */
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Modal,
  Linking,
} from 'react-native';

import 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    top: 0,
    bottom: 0,
  },
  backGroundImgContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  backgroundImg: {
    width: '100%',
    height: 100,
  },
  buttonContainer: {},
  buttonContainerr: {},
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 35,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'commiBold',
    left: 20,
  },
  iconStyle: {
    borderRadius: 5,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  feedbackButton: {
    position: 'relative',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    top: '60%',
  },
  feedbackIcon: {
    backgroundColor: 'black',
    padding: 10,
    opacity: 0.5,
    borderRadius: 50,
    margin: 20,
  },
  timer: {
    backgroundColor: 'black',
    padding: 10,
    opacity: 0.6,
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const Navigation = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('Contents');
};

const trade = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  props.navigation.navigate('Tradetime');
};

export default function TabOneScreen(prop: {
  navigation: { navigate: (arg0: string) => void };
}) {
  const nav = useNavigation();

  const DrawOpen = useCallback(() => {
    nav.dispatch(DrawerActions.openDrawer());
  }, [nav]);

  return (
    <LinearGradient colors={['#4E6AA6', '#435988']} style={styles.container}>
      <View style={{ position: 'absolute', left: 0, top: 0, padding: 20 }}>
        <TouchableOpacity onPress={DrawOpen}>
          <AntDesign name="setting" size={35} color="white" style={{}} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.backGroundImgContainer}>
        <Image
          source={require('../assets/images/bg.png')}
          style={styles.backgroundImg}
        />
      </View> */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Navigation(prop)}
        >
          <View style={styles.iconStyle}>
            <AntDesign name="book" size={35} color="white" />
          </View>
          <Text style={styles.buttonText}>LEARN</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
