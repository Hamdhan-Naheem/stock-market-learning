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
  props.navigation.navigate('brokers');
};

const dict = {
  en: {
    strategyheading: 'Investment strategies',
    strategyessay1:"Stock market investment strategies encompass a diverse range of approaches, each tailored to specific financial goals and risk tolerances. 'Buy and hold' involves long-term investments, while 'value investing' seeks undervalued stocks.",
    strategyessay2:'"Day trading" and "swing trading" focus on short-term price movements, while "dividend investing" emphasizes income generation. "Growth investing" targets companies with high potential, and "sector rotation" shifts investments based on economic cycles. "Dollar-cost averaging" mitigates market volatility, while "contrarian investing" goes against popular sentiment. Effective risk management, regardless of strategy, is essential. Furthermore, strategies like "technical analysis" and "fundamental analysis" use different data sources for decision-making.',
    strategyessay3: "Advanced methods, including options and derivatives, offer specialized approaches. Finally, robo-advisors provide automated portfolio management. The choice of strategy hinges on individual objectives, risk tolerance, and investment horizon, often requiring careful consideration and, at times, professional advice."
  },
  si: {
    strategyheading: 'ආයෝජන උපාය මාර්ග',
    strategyessay1:
      'කොටස් වෙළෙඳපොළ ආයෝජන උපාය මාර්ග විවිධ ප්‍රවේශයන් ඇතුළත් වන අතර, ඒ සෑම එකක්ම නිශ්චිත මූල්‍ය ඉලක්ක සහ අවදානම් ඉවසීම සඳහා සකස් කර ඇත. "මිලදී ගැනීම සහ රඳවා තබා ගැනීම" දිගුකාලීන ආයෝජන ඇතුළත් වන අතර "අගය ආයෝජනය" යනු අඩු තක්සේරු කළ කොටස් සොයයි.',
      strategyessay2:
      '"දින වෙළඳාම" සහ "පැද්දීම වෙළඳාම" කෙටි කාලීන මිල චලනයන් කෙරෙහි අවධානය යොමු කරන අතර "ලාභාංශ ආයෝජනය" ආදායම් උත්පාදනය අවධාරණය කරයි. "වර්ධන ආයෝඡනය" ඉහළ විභවයක් ඇති සමාගම් ඉලක්ක කරන අතර "අංශයේ භ්‍රමණය" ආර්ථික චක්‍ර මත පදනම්ව ආයෝජන මාරු කරයි. "ඩොලර් පිරිවැය සාමාන්‍යකරණය" වෙළඳපල අස්ථාවරත්වය අවම කරන අතර "ප්‍රතිවිරුද්ධ ආයෝජන" ජනප්‍රිය මනෝභාවයට පටහැනි වේ. උපාය මාර්ග නොසලකා ඵලදායී අවදානම් කළමනාකරණයක් අත්‍යවශ්‍ය වේ. තවද, "තාක්ෂණික විශ්ලේෂණය" සහ "මූලික විශ්ලේෂණය" වැනි උපාය මාර්ග තීරණ ගැනීම සඳහා විවිධ දත්ත මූලාශ්‍ර භාවිතා කරයි.',
      strategyessay3: 'විකල්ප සහ ව්‍යුත්පන්න ඇතුළුව උසස් ක්‍රම විශේෂිත ප්‍රවේශයන් ඉදිරිපත් කරයි. අවසාන වශයෙන්, රොබෝ උපදේශකයින් ස්වයංක්‍රීය කළඹ කළමනාකරණය සපයයි. උපාය මාර්ග තේරීම තනි අරමුණු, අවදානම් ඉවසීම සහ ආයෝජන ක්ෂිතිජය මත රඳා පවතී, බොහෝ විට ප්රවේශමෙන් සලකා බැලීම සහ සමහර විට වෘත්තීය උපදෙස් අවශ්ය වේ.'
    },
  ta:{
    strategyheading: 'முதலீட்டு உத்திகள்',
    strategyessay1:
      'பங்குச் சந்தை முதலீட்டு உத்திகள் பலவிதமான அணுகுமுறைகளை உள்ளடக்கியது, ஒவ்வொன்றும் குறிப்பிட்ட நிதி இலக்குகள் மற்றும் இடர் சகிப்புத்தன்மைக்கு ஏற்ப வடிவமைக்கப்பட்டுள்ளது. "வாங்க மற்றும் பிடி" என்பது நீண்ட கால முதலீடுகளை உள்ளடக்கியது, அதே சமயம் "மதிப்பு முதலீடு" என்பது குறைவான மதிப்புள்ள பங்குகளை நாடுகிறது.',
      strategyessay2:
      '"டே டிரேடிங்" மற்றும் "ஸ்விங் டிரேடிங்" ஆகியவை குறுகிய கால விலை நகர்வுகளில் கவனம் செலுத்துகின்றன, அதே சமயம் "டிவிடென்ட் முதலீடு" வருமானத்தை உருவாக்குவதை வலியுறுத்துகிறது. "வளர்ச்சி முதலீடு" அதிக திறன் கொண்ட நிறுவனங்களை குறிவைக்கிறது, மேலும் "துறை சுழற்சி" பொருளாதார சுழற்சிகளின் அடிப்படையில் முதலீடுகளை மாற்றுகிறது. "டாலர்-செலவு சராசரி" சந்தை ஏற்ற இறக்கத்தை குறைக்கிறது, அதே நேரத்தில் "முரண்பாடான முதலீடு" மக்கள் உணர்வுக்கு எதிரானது. உத்தியைப் பொருட்படுத்தாமல், பயனுள்ள இடர் மேலாண்மை அவசியம். மேலும், "தொழில்நுட்ப பகுப்பாய்வு" மற்றும் "அடிப்படை பகுப்பாய்வு" போன்ற உத்திகள் முடிவெடுப்பதற்கு வெவ்வேறு தரவு மூலங்களைப் பயன்படுத்துகின்றன.',
      strategyessay3: 'விருப்பங்கள் மற்றும் வழித்தோன்றல்கள் உட்பட மேம்பட்ட முறைகள் சிறப்பு அணுகுமுறைகளை வழங்குகின்றன. இறுதியாக, ரோபோ-ஆலோசகர்கள் தானியங்கி போர்ட்ஃபோலியோ நிர்வாகத்தை வழங்குகிறார்கள். மூலோபாயத்தின் தேர்வு தனிப்பட்ட குறிக்கோள்கள், இடர் சகிப்புத்தன்மை மற்றும் முதலீட்டு அடிவானம் ஆகியவற்றைக் கொண்டுள்ளது, பெரும்பாலும் கவனமாக பரிசீலிக்க வேண்டும் மற்றும் சில நேரங்களில் தொழில்முறை ஆலோசனை தேவைப்படுகிறது.'
    }
};

I18n.putVocabularies(dict);

const Strategies = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('strategyheading')}</Text>
        <View style={styles.cartoonImageContainer}>
          <Image
            source={require('../assets/Trading-Strategy.jpg')}
            style={styles.imageCartoon}
          />
        </View>
        <Text style={styles.essay}>
          {I18n.get('strategyessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('strategyessay2')}
          {'\n'}
          {I18n.get('strategyessay3')}
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

export default Strategies;

