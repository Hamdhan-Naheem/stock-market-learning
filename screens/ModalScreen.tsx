import React, { useCallback } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../app/store';
import { setLanguage } from '../Features/languages';

const styles = StyleSheet.create({
  greenBg: {
    backgroundColor: 'green',
  },
  whiteBg: {
    backgroundColor: 'white',
  },
  storeInformationView: {
    padding: 10,
    margin: 5,
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  name: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  buttons: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

const languages = [
  {
    key: '0',
    code: 'en',
    name: 'English',
  },
  {
    key: '1',
    code: 'si',
    name: 'සිංහල',
  },
  {
    key: '2',
    code: 'ta',
    name: 'தமிழ்',
  },
];

function LanguageElementView({
  language,
  selectedLanguageCode,
  selectLanguage,
}: any) {
  const { code, name } = language;
  const selected = code === selectedLanguageCode;
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={selected ? styles.greenBg : styles.whiteBg}
        onPress={() => {
          selectLanguage(code);
        }}
      >
        <View style={styles.storeInformationView}>
          <Text style={selected ? styles.whiteText : styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function ModalScreen({ setModalVisible }: any) {
  const selectLanguageValue = (state: RootState) => state.language.value;
  const selectedLanguageCode = useSelector(selectLanguageValue);
  const dispatch = useDispatch();

  const selectLanguage = useCallback(
    (languageCode: string) => {
      dispatch(setLanguage(languageCode));
      setModalVisible(false);
    },
    [dispatch, setModalVisible],
  );

  const renderItem = useCallback(
    ({ item }: any) => (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <LanguageElementView
          language={item}
          selectedLanguageCode={selectedLanguageCode}
          selectLanguage={selectLanguage}
        />
      </View>
    ),
    [selectLanguage, selectedLanguageCode],
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: 300, width: '90%', backgroundColor: '#E2E8EE' }}>
        <View style={{ backgroundColor: '#FF6347' }}>
          <Text
            style={{
              margin: 10,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            CHANGE LANGUAGE
          </Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ alignItems: 'center', textAlign: 'center', top: 50 }}>
            <FlatList
              keyExtractor={(item) => item.key}
              data={languages}
              renderItem={renderItem}
            />
          </Text>
        </View>
      </View>
    </View>
  );
}

export default ModalScreen;
