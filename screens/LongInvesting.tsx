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
  props.navigation.navigate('news');
};

const dict = {
  en: {
    termheading: 'Long & Short Term Investment',
    termessay1:"In the realm of stock market investments, investors can adopt one of two primary approaches: long-term or short-term investment strategies. Long-term investment involves the patient acquisition of stocks with the expectation that they will appreciate in value over an extended period, often spanning years or decades. This strategy is grounded in a thorough analysis of a company's fundamentals and an enduring belief in its growth potential, with less concern about the day-to-day market fluctuations. Long-term investors are well-suited to withstand market volatility and are inclined to make fewer trades, benefiting from the power of compounding over time. Additionally, they may enjoy tax advantages in some regions with favorable long-term capital gains tax rates.",
    termessay2:"On the other hand, short-term investment, often referred to as trading, seeks to profit from the rapid fluctuations in stock prices over shorter timeframes, which can range from days to months. Short-term investors, or traders, actively engage in frequent buying and selling of stocks, often using technical analysis, market trends, and short-term catalysts to guide their decisions. While this approach can yield quick profits, it also carries higher risks due to market volatility and transaction costs. Traders prioritize immediate gains and may not necessarily focus on a company's long-term prospects.",
    termessay3: "The choice between these two investment strategies hinges on individual preferences, risk tolerance, and investment goals. Long-term investment suits those who aim for gradual wealth accumulation and retirement planning, while short-term trading appeals to individuals comfortable with higher risk levels and active portfolio management. Many investors adopt a blend of both strategies to strike a balance between risk and reward in their investment portfolios. Ultimately, the decision should align with an individual's unique financial objectives and investment horizon.",
  },
  si: {
    termheading: 'දිගු හා කෙටි කාලීන ආයෝජන',
    termessay1:
      'කොටස් වෙළෙඳපොළ ආයෝජන ක්ෂේත්‍රය තුළ, ආයෝජකයින්ට මූලික ප්‍රවේශ දෙකෙන් එකක් අනුගමනය කළ හැකිය: දිගු කාලීන හෝ කෙටි කාලීන ආයෝජන උපාය මාර්ග. දිගු කාලීන ආයෝජනය යනු බොහෝ විට වසර හෝ දශක ගණනාවක් පුරා දිගු කාලයක් පුරා අගය අගය කරනු ඇතැයි අපේක්ෂාවෙන් කොටස් රෝගියා විසින් අත්පත් කර ගැනීමයි. මෙම උපායමාර්ගය පදනම් වී ඇත්තේ සමාගමක මූලික කරුණු පිළිබඳ ගැඹුරු විශ්ලේෂණයක් සහ එහි වර්ධන විභවය පිළිබඳ කල්පවත්නා විශ්වාසයක් වන අතර, එදිනෙදා වෙළඳපල උච්චාවචනයන් පිළිබඳව අඩු සැලකිල්ලක් දක්වයි. දිගුකාලීන ආයෝජකයින් වෙළඳපල අස්ථාවරත්වයට ඔරොත්තු දීමට හොඳින් ගැලපෙන අතර කාලයත් සමඟ සංයෝග කිරීමේ බලයෙන් ප්‍රතිලාභ ලබා ගනිමින් අඩු වෙළඳාමක් කිරීමට නැඹුරු වේ. මීට අමතරව, වාසිදායක දිගු කාලීන ප්‍රාග්ධන ලාභ බදු අනුපාත සහිත සමහර කලාපවල බදු වාසි ඔවුන් භුක්ති විඳිය හැකිය.',
      termessay2:
      'අනෙක් අතට, කෙටි කාලීන ආයෝජන, බොහෝ විට වෙළඳාම ලෙස හැඳින්වේ, කෙටි කාල රාමු තුළ කොටස් මිලෙහි වේගවත් උච්චාවචනයන්ගෙන් ලාභ ලැබීමට උත්සාහ කරයි, එය දින සිට මාස දක්වා පරාසයක පවතී. කෙටි කාලීන ආයෝජකයින්, හෝ වෙළඳුන්, ඔවුන්ගේ තීරණ වලට මග පෙන්වීම සඳහා බොහෝ විට තාක්ෂණික විශ්ලේෂණය, වෙළඳපල ප්‍රවණතා සහ කෙටි කාලීන උත්ප්‍රේරක භාවිතා කරමින් කොටස් නිතර මිලදී ගැනීම සහ විකිණීමේ සක්‍රීයව නිරත වේ. මෙම ප්‍රවේශය ඉක්මන් ලාභ ලබා ගත හැකි අතර, වෙළඳපල අස්ථාවරත්වය සහ ගනුදෙනු පිරිවැය හේතුවෙන් එය ඉහළ අවදානම් දරයි. වෙළෙන්දෝ ක්ෂණික ලාභ සඳහා ප්‍රමුඛත්වය දෙන අතර සමාගමක දිගුකාලීන අපේක්ෂාවන් කෙරෙහි අවශ්‍යයෙන්ම අවධානය යොමු නොකළ හැකිය.',
      termessay3: 'මෙම ආයෝජන උපාය මාර්ග දෙක අතර තේරීම තනි පුද්ගල මනාපයන්, අවදානම් ඉවසීම සහ ආයෝජන ඉලක්ක මත රඳා පවතී. දිගුකාලීන ආයෝජන ක්‍රමානුකූලව ධනය සමුච්චය කිරීම සහ විශ්‍රාම සැලසුම් කිරීම අරමුණු කරගත් අයට ගැළපෙන අතර කෙටි කාලීන වෙළෙඳාම ඉහළ අවදානම් මට්ටම් සහ ක්‍රියාකාරී කළඹ කළමණාකරණය සමඟ සැපපහසු පුද්ගලයන්ට ආයාචනා කරයි. බොහෝ ආයෝජකයින් තම ආයෝජන කළඹ තුළ අවදානම සහ ප්‍රතිලාභ අතර සමතුලිතතාවයක් ඇති කර ගැනීමට උපාය මාර්ග දෙකේම සම්මිශ්‍රණයක් අනුගමනය කරයි. අවසාන වශයෙන්, තීරණය පුද්ගලයාගේ අද්විතීය මූල්‍ය අරමුණු සහ ආයෝජන ක්ෂිතිජය සමඟ සමපාත විය යුතුය.',
  },
  ta:{
    termheading: 'நீண்ட மற்றும் குறுகிய கால முதலீடு',
    termessay1:
      'பங்குச் சந்தை முதலீடுகளின் துறையில், முதலீட்டாளர்கள் இரண்டு முதன்மை அணுகுமுறைகளில் ஒன்றைப் பின்பற்றலாம்: நீண்ட கால அல்லது குறுகிய கால முதலீட்டு உத்திகள். நீண்ட கால முதலீடு என்பது, பல வருடங்கள் அல்லது பல தசாப்தங்களாக நீடித்திருக்கும் காலக்கட்டத்தில் அவற்றின் மதிப்பை அதிகரிக்கும் என்ற எதிர்பார்ப்புடன், நோயாளிகளின் பங்குகளை வாங்குவதை உள்ளடக்குகிறது. இந்த மூலோபாயம் ஒரு நிறுவனத்தின் அடிப்படைகள் பற்றிய முழுமையான பகுப்பாய்விலும், அதன் வளர்ச்சித் திறனில் நீடித்த நம்பிக்கையிலும் அடித்தளமாக உள்ளது, தினசரி சந்தை ஏற்ற இறக்கங்கள் குறித்து குறைவான அக்கறையுடன். நீண்ட கால முதலீட்டாளர்கள் சந்தை ஏற்ற இறக்கத்தைத் தாங்குவதற்கு மிகவும் பொருத்தமானவர்கள் மற்றும் குறைவான வர்த்தகங்களைச் செய்ய விரும்புகின்றனர், காலப்போக்கில் கூட்டு சக்தியிலிருந்து பயனடைகிறார்கள். கூடுதலாக, அவர்கள் சாதகமான நீண்ட கால மூலதன ஆதாய வரி விகிதங்களுடன் சில பிராந்தியங்களில் வரி நன்மைகளை அனுபவிக்கலாம்.',
      termessay2:
      'மறுபுறம், குறுகிய கால முதலீடு, பெரும்பாலும் வர்த்தகம் என்று குறிப்பிடப்படுகிறது, குறுகிய காலக்கட்டத்தில் பங்கு விலைகளில் விரைவான ஏற்ற இறக்கங்களில் இருந்து லாபம் பெற முயல்கிறது, இது நாட்கள் முதல் மாதங்கள் வரை இருக்கலாம். குறுகிய கால முதலீட்டாளர்கள் அல்லது வர்த்தகர்கள், பங்குகளை அடிக்கடி வாங்குதல் மற்றும் விற்பதில் தீவிரமாக ஈடுபடுகின்றனர், பெரும்பாலும் தொழில்நுட்ப பகுப்பாய்வு, சந்தைப் போக்குகள் மற்றும் குறுகிய கால வினையூக்கிகளைப் பயன்படுத்தி தங்கள் முடிவுகளை வழிநடத்துகிறார்கள். இந்த அணுகுமுறை விரைவான லாபத்தை அளிக்கும் அதே வேளையில், சந்தை ஏற்ற இறக்கம் மற்றும் பரிவர்த்தனை செலவுகள் காரணமாக இது அதிக அபாயங்களைக் கொண்டுள்ளது. வர்த்தகர்கள் உடனடி ஆதாயங்களுக்கு முன்னுரிமை அளிக்கிறார்கள் மற்றும் ஒரு நிறுவனத்தின் நீண்ட கால வாய்ப்புகளில் கவனம் செலுத்த வேண்டிய அவசியமில்லை.',
      termessay3: 'இந்த இரண்டு முதலீட்டு உத்திகளுக்கு இடையேயான தேர்வு தனிப்பட்ட விருப்பத்தேர்வுகள், இடர் சகிப்புத்தன்மை மற்றும் முதலீட்டு இலக்குகளை சார்ந்துள்ளது. நீண்ட கால முதலீடு, படிப்படியான சொத்துக் குவிப்பு மற்றும் ஓய்வூதியத் திட்டமிடல் ஆகியவற்றை இலக்காகக் கொண்டவர்களுக்கு பொருந்தும், அதே சமயம் குறுகிய கால வர்த்தகம் அதிக ஆபத்து நிலைகள் மற்றும் செயலில் உள்ள போர்ட்ஃபோலியோ நிர்வாகத்துடன் வசதியாக இருக்கும் நபர்களை ஈர்க்கிறது. பல முதலீட்டாளர்கள் தங்கள் முதலீட்டு இலாகாக்களில் ஆபத்து மற்றும் வெகுமதிக்கு இடையே சமநிலையை ஏற்படுத்த இரண்டு உத்திகளின் கலவையை பின்பற்றுகின்றனர். இறுதியில், முடிவு ஒரு தனிநபரின் தனிப்பட்ட நிதி நோக்கங்கள் மற்றும் முதலீட்டு அடிவானத்துடன் ஒத்துப்போக வேண்டும்.',
  }
};

I18n.putVocabularies(dict);

const LongInvesting = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('termheading')}</Text>
        <Text style={styles.essay}>
          {I18n.get('termessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('termessay2')}
          {'\n'}
          {'\n'}
          {I18n.get('termessay3')}
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

export default LongInvesting;


