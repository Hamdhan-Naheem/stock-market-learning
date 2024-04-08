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
  props.navigation.navigate('Strategies');
};

const dict = {
  en: {
    newsheading: 'Financial News & Research',
    newsessay1:"In stock market investing, access to financial news and conducting research is vital. Financial news outlets like CNBC and Bloomberg offer real-time updates on market trends and economic developments. Research involves studying financial reports, economic indicators, and utilizing tools like stock screeners. Artificial intelligence (AI) has also made its mark, providing stock predictions through data analysis. These resources help investors make informed decisions and manage their portfolios effectively.",
    newsessay2:"Moreover, financial news helps investors stay informed about corporate earnings reports, mergers, and acquisitions that can impact stock prices. Detailed research involves analyzing a company's financial health, competitive position, and growth prospects. AI stock prediction models use machine learning to forecast price movements based on historical data, offering valuable insights for both short-term and long-term investors.",
  },
  si: {
    newsheading: 'මුල්‍ය පුවත් සහ පර්යේෂණ',
    newsessay1:
      'කොටස් වෙළෙඳපොළ ආයෝජනය කිරීමේදී මූල්‍ය ප්‍රවෘත්ති වෙත ප්‍රවේශ වීම සහ පර්යේෂණ පැවැත්වීම ඉතා වැදගත් වේ. CNBC සහ Bloomberg වැනි මූල්‍ය ප්‍රවෘත්ති අලෙවිසැල් වෙළෙඳපොළ ප්‍රවණතා සහ ආර්ථික වර්ධනයන් පිළිබඳ තත්‍ය කාලීන යාවත්කාලීන කිරීම් ලබා දෙයි. පර්යේෂණයට මූල්‍ය වාර්තා, ආර්ථික දර්ශක අධ්‍යයනය කිරීම සහ කොටස් පරීක්ෂා කරන්නන් වැනි මෙවලම් භාවිතා කිරීම ඇතුළත් වේ. කෘත්‍රිම බුද්ධිය (AI) ද දත්ත විශ්ලේෂණය හරහා කොටස් අනාවැකි සපයමින් සිය සලකුණ තබා ඇත. මෙම සම්පත් ආයෝජකයින්ට දැනුවත් තීරණ ගැනීමට සහ ඔවුන්ගේ කළඹ ඵලදායී ලෙස කළමනාකරණය කිරීමට උපකාරී වේ.',
      newsessay2:
      'එපමනක් නොව, කොටස් මිල කෙරෙහි බලපෑම් කළ හැකි ආයතනික ඉපැයීම් වාර්තා, ඒකාබද්ධ කිරීම් සහ අත්පත් කර ගැනීම් පිළිබඳව ආයෝජකයින්ට දැනුවත්ව සිටීමට මූල්‍ය පුවත් උපකාර කරයි. සවිස්තරාත්මක පර්යේෂණවලට සමාගමක මූල්‍ය සෞඛ්‍යය, තරඟකාරී තත්ත්වය සහ වර්ධන අපේක්ෂාවන් විශ්ලේෂණය කිරීම ඇතුළත් වේ. AI කොටස් අනාවැකි ආකෘති කෙටි කාලීන සහ දිගු කාලීන ආයෝජකයින් සඳහා වටිනා අවබෝධයක් ලබා දෙමින් ඓතිහාසික දත්ත මත පදනම්ව මිල චලනයන් පුරෝකථනය කිරීමට යන්ත්‍ර ඉගෙනීම භාවිතා කරයි.',
  },
  ta:{
    newsheading: 'நிதிச் செய்தி & ஆராய்ச்சி',
    newsessay1:
      'பங்குச் சந்தை முதலீட்டில், நிதிச் செய்திகளை அணுகுவதும் ஆராய்ச்சி நடத்துவதும் இன்றியமையாதது. சிஎன்பிசி மற்றும் ப்ளூம்பெர்க் போன்ற நிதிச் செய்திகள் சந்தைப் போக்குகள் மற்றும் பொருளாதார முன்னேற்றங்கள் குறித்த நிகழ்நேர அறிவிப்புகளை வழங்குகின்றன. ஆராய்ச்சி என்பது நிதி அறிக்கைகள், பொருளாதார குறிகாட்டிகள் மற்றும் ஸ்டாக் ஸ்கிரீனர்கள் போன்ற கருவிகளைப் பயன்படுத்துவதை உள்ளடக்கியது. செயற்கை நுண்ணறிவும் (AI) தரவு பகுப்பாய்வு மூலம் பங்கு கணிப்புகளை வழங்கி, அதன் முத்திரையைப் பதித்துள்ளது. இந்த ஆதாரங்கள் முதலீட்டாளர்கள் தகவலறிந்த முடிவுகளை எடுக்கவும், அவர்களின் போர்ட்ஃபோலியோக்களை திறம்பட நிர்வகிக்கவும் உதவுகின்றன.',
      newsessay2:
      'மேலும், நிதிச் செய்திகள் முதலீட்டாளர்களுக்கு நிறுவன வருவாய் அறிக்கைகள், இணைப்புகள் மற்றும் பங்கு விலைகளில் தாக்கத்தை ஏற்படுத்தக்கூடிய கையகப்படுத்துதல்கள் பற்றித் தெரியப்படுத்த உதவுகிறது. விரிவான ஆராய்ச்சி என்பது ஒரு நிறுவனத்தின் நிதி ஆரோக்கியம், போட்டி நிலை மற்றும் வளர்ச்சி வாய்ப்புகளை பகுப்பாய்வு செய்வதை உள்ளடக்கியது. AI பங்கு முன்கணிப்பு மாதிரிகள், குறுகிய கால மற்றும் நீண்ட கால முதலீட்டாளர்களுக்கு மதிப்புமிக்க நுண்ணறிவுகளை வழங்கி, வரலாற்றுத் தரவுகளின் அடிப்படையில் விலை நகர்வுகளைக் கணிக்க இயந்திரக் கற்றலைப் பயன்படுத்துகின்றன.',
  }
};

I18n.putVocabularies(dict);

const News = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('newsheading')}</Text>
        <Text style={styles.essay}>
          {I18n.get('newsessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('newsessay2')}
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

export default News;


