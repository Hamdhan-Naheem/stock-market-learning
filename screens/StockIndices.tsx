/* eslint-disable global-require */
import { I18n } from 'aws-amplify';
import React from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#708090',
    display: 'flex',

    padding: 20,
  },
  headertext: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '800',
  },
  essay: {
    margin: 15,
    fontSize: 18.5,
    lineHeight: 30,
    textAlign: 'justify',
    color: '#544F4E',
    letterSpacing: 0.5,
  },
  imageTrade: {
    transform: [{ scale: 0.6 }],
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCartoon: {
    resizeMode: 'contain',
    width: '100%',
  },
  cartoonImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer2: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
  },
  lessonButton: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
  },
  lessonText: {
    fontFamily: 'commiNorm',
    fontSize: 18,
    color: '#544F4E',
  },
  headerText: {
    fontSize: 35,
    fontFamily: 'baloo-bold',
    color: '#4B4846',
    textAlign: 'center',
  },
});

const Contents = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('Contents');
};

const NextContent = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('investmentGaols');
};

const dict = {
  en: {
    indicesheading: 'STOCK INDICES',
    indicesessay1:'Stock indices are essential tools in finance and investing, summarizing the performance of groups of company stocks into single numbers. They offer insights into market trends, serve as benchmarks for investors, and form the basis for investment products like index funds and ETFs.',
    indicesessay2:'Common indices like the DJIA, S&P 500, NASDAQ Composite, FTSE 100, and Nikkei 225 are widely watched, making them vital in assessing market health and guiding investment decisions.',
  },
  si: {
    indicesheading: 'කොටස් දර්ශක',
    indicesessay1:
      'කොටස් දර්ශක යනු මූල්‍ය හා ආයෝජනයේ අත්‍යවශ්‍ය මෙවලම් වන අතර, සමාගම් කොටස් කණ්ඩායම්වල ක්‍රියාකාරීත්වය තනි අංකවලට සාරාංශ කරයි. ඔවුන් වෙළඳපල ප්‍රවණතා පිළිබඳ අවබෝධයක් ලබා දෙයි, ආයෝජකයින් සඳහා මිණුම් සලකුණු ලෙස සේවය කරයි, සහ දර්ශක අරමුදල් සහ ETF වැනි ආයෝජන නිෂ්පාදන සඳහා පදනම සාදයි.',
      indicesessay2:
      'DJIA, S&P 500, NASDAQ Composite, FTSE 100, සහ Nikkei 225 වැනි පොදු දර්ශක පුළුල් ලෙස නිරීක්ෂණය කරනු ලබන අතර, වෙළඳපල සෞඛ්‍යය තක්සේරු කිරීමේදී සහ ආයෝජන තීරණ මඟ පෙන්වීමේදී ඒවා ඉතා වැදගත් වේ.',
  },
  ta:{
    indicesheading: 'பங்கு குறியீடுகள்',
    indicesessay1:
      'பங்கு குறியீடுகள் நிதி மற்றும் முதலீட்டில் இன்றியமையாத கருவிகளாகும், நிறுவனப் பங்குகளின் குழுக்களின் செயல்திறனை ஒற்றை எண்களாக சுருக்கமாகக் கூறுகிறது. அவை சந்தைப் போக்குகளைப் பற்றிய நுண்ணறிவுகளை வழங்குகின்றன, முதலீட்டாளர்களுக்கான அளவுகோலாகச் செயல்படுகின்றன, மேலும் குறியீட்டு நிதிகள் மற்றும் ப.ப.வ.நிதிகள் போன்ற முதலீட்டுத் தயாரிப்புகளுக்கு அடிப்படையாக அமைகின்றன.',
      indicesessay2:
      'DJIA, S&P 500, NASDAQ Composite, FTSE 100 மற்றும் Nikkei 225 போன்ற பொதுவான குறியீடுகள் பரவலாகப் பார்க்கப்படுகின்றன, அவை சந்தை ஆரோக்கியத்தை மதிப்பிடுவதிலும் முதலீட்டு முடிவுகளை வழிநடத்துவதிலும் முக்கியமானவை.',
  }
};

I18n.putVocabularies(dict);

const StockIndices = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.headerText}>{I18n.get('indicesheading')}</Text>
          <Text style={styles.essay}>
            {I18n.get('indicesessay1')}
            {'\n'}
            {'\n'}
            {I18n.get('indicesessay2')}
          </Text>
  
          
          <View style={styles.lessonButton}>
            <TouchableOpacity onPress={() => Contents(prop)}>
              <Text style={styles.lessonText}>All Lessons</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => NextContent(prop)}>
              <Text style={styles.lessonText}>Next Lesson</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
};

export default StockIndices;
