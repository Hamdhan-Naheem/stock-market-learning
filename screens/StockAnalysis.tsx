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
  props.navigation.navigate('longTerm');
};

const dict = {
  en: {
    analysheading: 'stock analysis',
    analysessay1:'Stock analysis is a critical practice for investors seeking to make informed decisions in the stock market. It involves evaluating a companys financial health, industry trends, and market conditions to assess the potential risks and rewards of investing in its stock. Traditional stock analysis methods include fundamental analysis, which examines a companys financial statements and performance metrics, and technical analysis, which studies historical stock price patterns.',
    analysessay2:'In recent years, artificial intelligence (AI) has revolutionized stock analysis and prediction. AI algorithms can analyze vast datasets, news sentiment, social media trends, and even global economic indicators at a speed and scale beyond human capability. This allows AI-powered tools to provide insights into stock movements and future trends.',
    analysessay3: 'AI stock prediction models use machine learning techniques to forecast stock prices, identify patterns, and make trading recommendations. These models consider a multitude of factors, including historical stock data, market sentiment, and external events, to generate predictions. While AI can enhance decision-making, its important to note that stock market predictions, even with AI, are not foolproof and carry inherent risks.',
    analysessay4:"Investors often use AI-based platforms and robo-advisors to assist in their stock analysis and portfolio management. These tools aim to provide more data-driven and objective insights, helping investors make better-informed choices in the complex world of stock investing. However, it's crucial to combine AI insights with human judgment and consider the long-term fundamentals of a company when making investment decisions.",
  },
  si: {
    analysheading: 'කොටස් විශ්ලේෂණය',
    analysessay1:
      'කොටස් වෙලඳපොලේ දැනුවත් තීරණ ගැනීමට අපේක්ෂා කරන ආයෝජකයින් සඳහා කොටස් විශ්ලේෂණය තීරණාත්මක භාවිතයකි. එහි කොටස්වල ආයෝජනය කිරීමේ විභව අවදානම් සහ ප්‍රතිලාභ තක්සේරු කිරීම සඳහා සමාගමක මූල්‍ය සෞඛ්‍යය, කර්මාන්ත ප්‍රවණතා සහ වෙළඳපල තත්ත්වයන් ඇගයීම එයට ඇතුළත් වේ. සාම්ප්‍රදායික කොටස් විශ්ලේෂණ ක්‍රමවලට සමාගමේ මූල්‍ය ප්‍රකාශන සහ කාර්ය සාධන ප්‍රමිතික පරීක්ෂා කරන මූලික විශ්ලේෂණය සහ ඓතිහාසික කොටස් මිල රටා අධ්‍යයනය කරන තාක්ෂණික විශ්ලේෂණය ඇතුළත් වේ.',
      analysessay2:
      'මෑත වසරවලදී, කෘතිම බුද්ධිය (AI) කොටස් විශ්ලේෂණය සහ අනාවැකි විප්ලවීය වෙනසක් සිදු කර ඇත. AI ඇල්ගොරිතමවලට විශාල දත්ත කට්ටල, ප්‍රවෘත්ති හැඟීම්, සමාජ මාධ්‍ය ප්‍රවණතා සහ ගෝලීය ආර්ථික දර්ශක පවා මානව හැකියාවෙන් ඔබ්බට වේගයකින් සහ පරිමාණයකින් විශ්ලේෂණය කළ හැකිය. මෙමගින් AI බලයෙන් ක්‍රියාත්මක වන මෙවලම්වලට කොටස් චලනයන් සහ අනාගත ප්‍රවණතා පිළිබඳ අවබෝධයක් ලබා දීමට ඉඩ සලසයි.',
      analysessay3: 'AI කොටස් අනාවැකි ආකෘති කොටස් මිල පුරෝකථනය කිරීමට, රටා හඳුනා ගැනීමට සහ වෙළඳ නිර්දේශ කිරීමට යන්ත්‍ර ඉගෙනීමේ ක්‍රම භාවිතා කරයි. මෙම ආකෘතීන් අනාවැකි ජනනය කිරීම සඳහා ඓතිහාසික කොටස් දත්ත, වෙළඳපල හැඟීම් සහ බාහිර සිදුවීම් ඇතුළු සාධක රාශියක් සලකා බලයි. AI හට තීරණ ගැනීම වැඩි දියුණු කළ හැකි අතර, AI සමඟ වුවද, කොටස් වෙළඳපල පුරෝකථනයන් මෝඩ නොවන අතර සහජ අවදානම් සහිත බව සැලකිල්ලට ගැනීම වැදගත්ය.',
      analysessay4:
      'ආයෝජකයින් බොහෝ විට AI මත පදනම් වූ වේදිකා සහ රොබෝ-උපදේශකයින් ඔවුන්ගේ කොටස් විශ්ලේෂණය සහ කළඹ කළමනාකරණයට සහාය වීමට භාවිතා කරයි. මෙම මෙවලම් වැඩි දත්ත මත පදනම් වූ සහ වෛෂයික තීක්ෂ්ණ බුද්ධියක් ලබා දීම අරමුණු කරයි, කොටස් ආයෝජනයේ සංකීර්ණ ලෝකය තුළ ආයෝජකයින්ට වඩා හොඳින් දැනුවත් තේරීම් කිරීමට උපකාරී වේ. කෙසේ වෙතත්, AI තීක්ෂ්ණ බුද්ධිය මානව විනිශ්චය සමඟ ඒකාබද්ධ කිරීම සහ ආයෝජන තීරණ ගැනීමේදී සමාගමක දිගුකාලීන මූලික කරුණු සලකා බැලීම ඉතා වැදගත් වේ.',
  },
  ta:{
    analysheading: 'பங்கு பகுப்பாய்வு',
    analysessay1:
      'பங்குச் சந்தையில் தகவலறிந்த முடிவுகளை எடுக்க விரும்பும் முதலீட்டாளர்களுக்கு பங்கு பகுப்பாய்வு ஒரு முக்கியமான நடைமுறையாகும். இது ஒரு நிறுவனத்தின் நிதி ஆரோக்கியம், தொழில்துறை போக்குகள் மற்றும் சந்தை நிலைமைகளை மதிப்பிடுவதை உள்ளடக்கியது, அதன் பங்குகளில் முதலீடு செய்வதன் சாத்தியமான அபாயங்கள் மற்றும் வெகுமதிகளை மதிப்பிடுகிறது. பாரம்பரிய பங்கு பகுப்பாய்வு முறைகளில் ஒரு நிறுவனத்தின் நிதி அறிக்கைகள் மற்றும் செயல்திறன் அளவீடுகளை ஆய்வு செய்யும் அடிப்படை பகுப்பாய்வு மற்றும் வரலாற்று பங்கு விலை முறைகளை ஆய்வு செய்யும் தொழில்நுட்ப பகுப்பாய்வு ஆகியவை அடங்கும்.',
      analysessay2:
      'சமீபத்திய ஆண்டுகளில், செயற்கை நுண்ணறிவு (AI) பங்கு பகுப்பாய்வு மற்றும் கணிப்புகளில் புரட்சியை ஏற்படுத்தியுள்ளது. AI அல்காரிதம்கள் பரந்த தரவுத்தொகுப்புகள், செய்தி உணர்வுகள், சமூக ஊடகப் போக்குகள் மற்றும் உலகப் பொருளாதாரக் குறிகாட்டிகளை மனித திறனுக்கு அப்பாற்பட்ட வேகத்திலும் அளவிலும் கூட பகுப்பாய்வு செய்ய முடியும். இது AI-இயங்கும் கருவிகளை பங்கு நகர்வுகள் மற்றும் எதிர்கால போக்குகள் பற்றிய நுண்ணறிவுகளை வழங்க அனுமதிக்கிறது.',
      analysessay3: 'AI பங்கு முன்கணிப்பு மாதிரிகள் பங்கு விலைகளை கணிக்க, வடிவங்களை அடையாளம் காண மற்றும் வர்த்தக பரிந்துரைகளை செய்ய இயந்திர கற்றல் நுட்பங்களைப் பயன்படுத்துகின்றன. இந்த மாதிரிகள் கணிப்புகளை உருவாக்க வரலாற்று பங்கு தரவு, சந்தை உணர்வு மற்றும் வெளிப்புற நிகழ்வுகள் உட்பட பல காரணிகளை கருத்தில் கொள்கின்றன. AI முடிவெடுப்பதை மேம்படுத்தும் அதே வேளையில், பங்குச் சந்தை கணிப்புகள், AI உடன் கூட, முட்டாள்தனமானவை அல்ல மற்றும் உள்ளார்ந்த அபாயங்களைக் கொண்டுள்ளன என்பதைக் கவனத்தில் கொள்ள வேண்டும்.',
      analysessay4:
      'முதலீட்டாளர்கள் தங்கள் பங்கு பகுப்பாய்வு மற்றும் போர்ட்ஃபோலியோ நிர்வாகத்தில் உதவ AI- அடிப்படையிலான தளங்கள் மற்றும் ரோபோ-ஆலோசகர்களைப் பயன்படுத்துகின்றனர். இந்தக் கருவிகள் அதிக தரவு உந்துதல் மற்றும் புறநிலை நுண்ணறிவுகளை வழங்குவதை நோக்கமாகக் கொண்டுள்ளன, பங்கு முதலீட்டின் சிக்கலான உலகில் முதலீட்டாளர்களுக்கு சிறந்த தகவலறிந்த தேர்வுகளை செய்ய உதவுகின்றன. இருப்பினும், AI நுண்ணறிவுகளை மனித தீர்ப்புடன் இணைப்பது மற்றும் முதலீட்டு முடிவுகளை எடுக்கும்போது ஒரு நிறுவனத்தின் நீண்டகால அடிப்படைகளை கருத்தில் கொள்வது மிகவும் முக்கியமானது.'
  }
};

I18n.putVocabularies(dict);

const StockAnalysis = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('analysheading')}</Text>
        <View style={styles.cartoonImageContainer}>
          <Image
            source={require('../assets/analysis.jpg')}
            style={styles.imageCartoon}
          />
        </View>
        <Text style={styles.essay}>
          {I18n.get('analysessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('analysessay2')}
          {'\n'}
          {'\n'}
          {I18n.get('analysessay3')}
          {'\n'}
          {'\n'}
          {I18n.get('analysessay4')}
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

export default StockAnalysis;

