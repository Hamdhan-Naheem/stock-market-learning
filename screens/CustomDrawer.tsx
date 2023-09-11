import { Entypo } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Modal,
} from 'react-native';

import ModalScreen from './ModalScreen';

const styles = StyleSheet.create({
  DrawerContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    backgroundColor: '#3A3C44',
  },
  DrawerContainerChild: {
    backgroundColor: '#3A3C44',
    margin: 10,
  },
  DrawerContent: {
    alignItems: 'center',
    padding: 20,
  },
  DrawerContentText: {
    fontFamily: 'Oswald-Regular',
    fontSize: 30,
    color: '#B7B3B2',
  },
  DrawerContentText2: {
    fontFamily: 'Oswald-Regular',
    fontSize: 15,
    color: '#C7C859',
    padding: 5,
  },
  socialmediaIconContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  socialmediaIcon: {
    backgroundColor: 'white',
    borderRadius: 100,
  },
  drawerDownPart: {
    flex: 1,
    backgroundColor: 'black',
  },
  drawerDownPartConatiner: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerButtons: {
    backgroundColor: '#4A4B68',
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    opacity: 1,
  },
  buttonText: {
    color: '#B7B3B2',
    fontSize: 15,
    fontWeight: 'bold',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  radiobuttonText: {
    color: '#CDCFE8',
    fontSize: 15,
    fontWeight: '600',
  },
});

function CustomDrawer({ signOut }: { signOut: () => void }) {
  const logOut = useCallback(() => {
    signOut();
  }, [signOut]);
  const nav = useNavigation();
  const [notification, setNotification] = useState(false);

  const [newsAlert, setnewsAlert] = useState(false);

  const onValueChangeNoti = useCallback(() => {
    setNotification((previousState) => !previousState);
  }, []);

  const onValueChangeNews = useCallback(() => {
    setnewsAlert((previousState) => !previousState);
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  const opModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    nav.dispatch(DrawerActions.toggleDrawer());
  }, [nav]);

  return (
    <View style={styles.DrawerContainer}>
      <View style={styles.DrawerContainerChild}>
        <View style={styles.DrawerContent}>
          <Text style={styles.DrawerContentText}>HELLO TRADERS</Text>
          <Text style={styles.DrawerContentText2}>
            If you like our app, please consider to follow us and rate the app:
          </Text>
        </View>
        <View style={styles.socialmediaIconContainer}>
          <View style={styles.socialmediaIcon}>
            <TouchableOpacity>
              <Entypo name="facebook-with-circle" size={50} color="#4267B2" />
            </TouchableOpacity>
          </View>
          <View style={styles.socialmediaIcon}>
            <TouchableOpacity>
              <Entypo name="instagram-with-circle" size={50} color="#FF6347" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.drawerDownPart}>
        <View style={styles.drawerDownPartConatiner}>
          <TouchableOpacity
            onPress={opModal}
            onPressOut={closeModal}
            style={styles.drawerButtons}
          >
            <Text style={styles.buttonText}>CHANGE LANGUAGE</Text>
          </TouchableOpacity>
          <Modal transparent animationType="fade" visible={modalVisible}>
            <ModalScreen
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.radiobuttonText}>Enable system notification</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            onValueChange={onValueChangeNoti}
            value={notification}
          />
        </View>

        <View style={styles.radioButtonContainer}>
          <Text style={styles.radiobuttonText}>News alert notification</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            onValueChange={onValueChangeNews}
            value={newsAlert}
          />
        </View>

        <View style={styles.drawerDownPartConatiner}>
          <TouchableOpacity onPress={logOut} style={styles.drawerButtons}>
            <Text style={styles.buttonText}>SIGN OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CustomDrawer;
