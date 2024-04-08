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
  props.navigation.navigate('stockAnalysis');
};

const dict = {
  en: {
    dividentheading: 'DIVIDENDS',
    dividentessay1:'Dividends are a fundamental aspect of stock market investing, representing a portion of a company earnings distributed to its shareholders. They provide investors with a regular income stream, making them particularly appealing to those seeking consistent financial returns.',
    dividentessay2:'Dividend-paying stocks often strike a balance between income and growth potential, offering the possibility of capital appreciation alongside periodic cash payments. Investors assess a stocks dividend yield, which is the annual dividend amount divided by the stocks current price, to gauge its income potential. Blue-chip companies with strong financials and a history of stability are renowned for their reliable dividend payments.',
    dividentessay3: 'Many investors choose to reinvest their dividends to harness the power of compounding, allowing their wealth to grow over time. However, its vital to consider tax implications and conduct thorough research into a company dividend history and financial health when incorporating dividend stocks into an investment portfolio.',
  },
  si: {
    dividentheading: 'ලාභාංශ',
    dividentessay1:
      'ලාභාංශ යනු කොටස් වෙලඳපොල ආයෝජනයේ මූලික අංගයක් වන අතර එය සමාගමේ කොටස් හිමියන්ට බෙදා හරින ලද සමාගමක ඉපැයීම් වලින් කොටසක් නියෝජනය කරයි. ඔවුන් ආයෝජකයින්ට නිත්‍ය ආදායම් ප්‍රවාහයක් ලබා දෙයි, ස්ථාවර මූල්‍ය ප්‍රතිලාභ අපේක්ෂා කරන අයට ඔවුන් විශේෂයෙන් ආකර්ශනීය කරයි.',
      dividentessay2:
      'ලාභාංශ ගෙවන කොටස් බොහෝ විට ආදායම සහ වර්ධන විභවයන් අතර සමතුලිතතාවයක් ඇති කරයි, වරින් වර මුදල් ගෙවීම් සමඟ ප්‍රාග්ධන අගය කිරීමේ හැකියාව ලබා දෙයි. ආයෝජකයින් කොටස් ලාභාංශ අස්වැන්නක් තක්සේරු කරයි, එනම් වාර්ෂික ලාභාංශ මුදල කොටස්වල වර්තමාන මිලෙන් බෙදීම, එහි ආදායම් විභවය මැන බැලීම සඳහා ය. ශක්තිමත් මූල්‍ය සහ ස්ථාවරත්වයේ ඉතිහාසයක් ඇති Blue-chip සමාගම් ඔවුන්ගේ විශ්වාසනීය ලාභාංශ ගෙවීම් සඳහා ප්‍රසිද්ධය.',
      dividentessay3: 'බොහෝ ආයෝජකයින් කාලයත් සමඟ ඔවුන්ගේ ධනය වර්ධනය වීමට ඉඩ සලසමින් සංයෝග කිරීමේ බලය උපයෝගී කර ගැනීම සඳහා ඔවුන්ගේ ලාභාංශ නැවත ආයෝජනය කිරීමට තීරණය කරයි. කෙසේ වෙතත්, ලාභාංශ කොටස් ආයෝජන කළඹකට ඇතුළත් කිරීමේදී බදු ඇඟවීම් සලකා බැලීම සහ සමාගමේ ලාභාංශ ඉතිහාසය සහ මූල්‍ය සෞඛ්‍යය පිළිබඳ ගැඹුරු පර්යේෂණ පැවැත්වීම අත්‍යවශ්‍ය වේ.',
  },
  ta:{
    dividentheading: 'ஈவுத்தொகை',
    dividentessay1:
      'ஈவுத்தொகை என்பது பங்குச் சந்தை முதலீட்டின் ஒரு அடிப்படை அம்சமாகும், இது ஒரு நிறுவனத்தின் வருவாயின் ஒரு பகுதியை அதன் பங்குதாரர்களுக்கு விநியோகிக்கிறது. அவை முதலீட்டாளர்களுக்கு வழக்கமான வருமான ஓட்டத்தை வழங்குகின்றன, குறிப்பாக நிலையான நிதி வருவாயை விரும்புவோரை ஈர்க்கின்றன.',
      dividentessay2:
      'ஈவுத்தொகை-செலுத்தும் பங்குகள் அடிக்கடி வருமானம் மற்றும் வளர்ச்சி திறன் ஆகியவற்றுக்கு இடையே சமநிலையை ஏற்படுத்துகின்றன, காலமுறை ரொக்கக் கொடுப்பனவுகளுடன் மூலதன மதிப்பீட்டின் சாத்தியத்தை வழங்குகின்றன. முதலீட்டாளர்கள் ஒரு பங்கின் ஈவுத்தொகை வருவாயை மதிப்பிடுகின்றனர், இது பங்குகளின் தற்போதைய விலையால் வகுக்கப்படும் வருடாந்திர ஈவுத்தொகையாகும், அதன் வருமான திறனை அளவிட. வலுவான நிதியியல் மற்றும் ஸ்திரத்தன்மையின் வரலாறு கொண்ட புளூ-சிப் நிறுவனங்கள் அவற்றின் நம்பகமான ஈவுத்தொகை கொடுப்பனவுகளுக்கு புகழ்பெற்றவை.',
      dividentessay3: 'உங்கள் ஆபத்து சகிப்புத்தன்மையைப் புரிந்துகொள்வது சமமாக முக்கியமானது. இது சந்தை ஏற்ற இறக்கங்களுடன் உங்களின் ஆறுதல் நிலையை வரையறுத்து, உங்கள் சொத்துத் தேர்வை வழிநடத்துகிறது. கன்சர்வேடிவ் முதலீட்டாளர்கள் கவனமாக இருக்கிறார்கள், மூலதனப் பாதுகாப்பில் கவனம் செலுத்துகிறார்கள் மற்றும் ப்ளூ-சிப் பங்குகள் அல்லது பத்திரங்கள் போன்ற குறைந்த ஆபத்துள்ள முதலீடுகளை ஆதரிக்கின்றனர். அவர்கள் நிலையான, கணிக்கக்கூடிய சொத்துக்களில் ஆறுதல் அடைகிறார்கள். மிதவாதிகள் வளர்ச்சிக்கும் ஆபத்துக்கும் இடையில் சமநிலையை நாடுகின்றனர்.',
  }
};

I18n.putVocabularies(dict);

const Dividents = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('dividentheading')}</Text>
        <Text style={styles.essay}>
          {I18n.get('dividentessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('dividentessay2')}
          {'\n'}
          {'\n'}
          {I18n.get('dividentessay3')}
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

export default Dividents;

