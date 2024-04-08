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
  props.navigation.navigate('divedents');
};

const dict = {
  en: {
    investheading: 'Stock Market Investment Goals and Risk Tolerance',
    investessay1:'Investment goals are your destination, your financial aspirations. They provide direction to your investment journey. For many, wealth accumulation is the primary goal. It involves using stocks as a means to grow capital over the long term, ensuring financial security, funding significant purchases, or perhaps retirement. Others utilize stocks to fund their retirement years, aiming for investments that generate a steady income or appreciate in value over time. ',
    investessay2:'Parents may turn to the stock market to save for their children education, relying on investments that can grow steadily to cover future educational expenses. Some investors prioritize current income, turning to dividend-yielding stocks for a regular cash flow. For those with a higher risk appetite, speculative gains become the objective, with a willingness to navigate market volatility and potentially reap substantial rewards.',
    investessay3: 'Understanding your risk tolerance is equally crucial. It defines your comfort level with market fluctuations and guides your asset selection. Conservative investors are cautious, focusing on capital preservation and favoring low-risk investments such as blue-chip stocks or bonds. They find solace in stable, predictable assets. Moderates seek a balance between growth and risk.',
    investessay4:'They embrace some market volatility and often diversify their portfolios with a mix of stocks and bonds. Aggressive investors have a higher risk appetite, welcoming the prospect of greater returns. They may target growth stocks, explore emerging markets, and typically have a longer investment horizon. Balanced investors, meanwhile, aim for equilibrium. They pursue moderate growth potential while mitigating risk through diversification and thoughtful asset allocation.',
  },
  si: {
    investheading: 'කොටස් වෙළෙඳපොළ ආයෝජන ඉලක්ක සහ අවදානම් ඉවසීම',
    investessay1:
      'ආයෝජන ඉලක්ක ඔබේ ගමනාන්තය, ඔබේ මූල්‍ය අභිලාෂයන් වේ. ඔවුන් ඔබේ ආයෝජන ගමනට මඟ පෙන්වයි. බොහෝ දෙනෙකුට ධනය රැස් කිරීම මූලික අරමුණයි. දිගු කාලීනව ප්‍රාග්ධනය වර්ධනය කිරීමේ මාධ්‍යයක් ලෙස කොටස් භාවිතා කිරීම, මූල්‍ය සුරක්ෂිතභාවය සහතික කිරීම, සැලකිය යුතු මිලදී ගැනීම් සඳහා අරමුදල් සැපයීම හෝ සමහර විට විශ්‍රාම ගැනීම ඇතුළත් වේ. තවත් අය තම විශ්‍රාම වසර සඳහා අරමුදල් සැපයීම සඳහා කොටස් භාවිතා කරයි, ස්ථාවර ආදායමක් උත්පාදනය කරන හෝ කාලයත් සමඟ වටිනාකම අගය කරන ආයෝජන ඉලක්ක කර ගනී.',
      investessay2:
      'අනාගත අධ්‍යාපන වියදම් පියවා ගැනීම සඳහා ක්‍රමයෙන් වර්ධනය විය හැකි ආයෝජන මත විශ්වාසය තබමින්, තම දරුවන්ගේ අධ්‍යාපනය සඳහා ඉතිරි කර ගැනීම සඳහා දෙමාපියන් කොටස් වෙළෙඳපොළ වෙත යොමු විය හැකිය. සමහර ආයෝජකයින් වත්මන් ආදායමට ප්‍රමුඛත්වය දෙන අතර, නිත්‍ය මුදල් ප්‍රවාහයක් සඳහා ලාභාංශ ලබා දෙන කොටස් වෙත හැරේ. වැඩි අවදානම් රුචියක් ඇති අය සඳහා, වෙළඳපල අස්ථාවරත්වය සැරිසැරීමට සහ සැලකිය යුතු ප්‍රතිලාභ ලබා ගැනීමට ඇති කැමැත්ත සමඟ සමපේක්ෂන වාසි පරමාර්ථය බවට පත්වේ.',
      investessay3: 'ඔබේ අවදානම් ඉවසීම අවබෝධ කර ගැනීම ද ඒ හා සමානව වැදගත් වේ. එය වෙළඳපල උච්චාවචනයන් සමඟ ඔබේ සුවපහසු මට්ටම නිර්වචනය කරන අතර ඔබේ වත්කම් තෝරාගැනීමට මඟ පෙන්වයි. කොන්සර්වේටිව් ආයෝජකයින් ප්‍රවේසම් වන අතර, ප්‍රාග්ධන සංරක්ෂණය කෙරෙහි අවධානය යොමු කරන අතර නිල්-චිප් කොටස් හෝ බැඳුම්කර වැනි අඩු අවදානම් ආයෝජන සඳහා අනුග්‍රහය දක්වයි. ඔවුන් ස්ථාවර, පුරෝකථනය කළ හැකි වත්කම්වලින් සැනසීමක් ලබයි. මධ්‍යස්ථ මතධාරීන් වර්ධනය සහ අවදානම අතර සමතුලිතතාවයක් අපේක්ෂා කරයි.',
      investessay4:
      'ඔවුන් යම් වෙළඳපල අස්ථාවරත්වයක් වැලඳ ගන්නා අතර බොහෝ විට කොටස් සහ බැඳුම්කර මිශ්‍රණයකින් ඔවුන්ගේ කළඹ විවිධාංගීකරණය කරයි. ආක්‍රමණශීලී ආයෝජකයින්ට වැඩි අවදානම් රුචියක් ඇත, වැඩි ප්‍රතිලාභ අපේක්ෂාවන් සාදරයෙන් පිළිගනී. ඔවුන් වර්ධන කොටස් ඉලක්ක කර, නැගී එන වෙලඳපොලවල් ගවේෂණය, සහ සාමාන්යයෙන් දිගු ආයෝජන ක්ෂිතිජයක් ඇත. සමතුලිත ආයෝජකයින්, මේ අතර, සමතුලිතතාවය සඳහා ඉලක්ක කරයි. විවිධාංගීකරණය සහ කල්පනාකාරී වත්කම් වෙන් කිරීම හරහා අවදානම අවම කරන අතරම ඔවුන් මධ්‍යස්ථ වර්ධන විභවයන් හඹා යයි.',
  },
  ta:{
    investheading: 'பங்குச் சந்தை முதலீட்டு இலக்குகள் மற்றும் இடர் சகிப்புத்தன்மை',
    investessay1:
      'முதலீட்டு இலக்குகள் உங்கள் இலக்கு, உங்கள் நிதி அபிலாஷைகள். அவை உங்கள் முதலீட்டு பயணத்திற்கு திசையை வழங்குகின்றன. பலருக்கு செல்வம் சேர்வதே முதன்மையான குறிக்கோள். இது நீண்ட காலத்திற்கு மூலதனத்தை வளர்ப்பதற்கான ஒரு வழிமுறையாக பங்குகளைப் பயன்படுத்துவதை உள்ளடக்கியது, நிதி பாதுகாப்பை உறுதி செய்தல், குறிப்பிடத்தக்க வாங்குதல்களுக்கு நிதியளித்தல் அல்லது ஒருவேளை ஓய்வு. மற்றவர்கள் நிலையான வருமானத்தை உருவாக்கும் அல்லது காலப்போக்கில் மதிப்பை உயர்த்தும் முதலீடுகளை இலக்காகக் கொண்டு, தங்கள் ஓய்வூதிய ஆண்டுகளுக்கு நிதியளிப்பதற்காக பங்குகளைப் பயன்படுத்துகின்றனர்.',
      investessay2:
      'பெற்றோர்கள் தங்கள் குழந்தைகளின் கல்விக்காக சேமிப்பதற்காக பங்குச் சந்தைக்கு திரும்பலாம், எதிர்கால கல்விச் செலவுகளை ஈடுகட்ட, சீராக வளரக்கூடிய முதலீடுகளை நம்பியிருக்கலாம். சில முதலீட்டாளர்கள் தற்போதைய வருவாயை முதன்மைப்படுத்துகின்றனர், வழக்கமான பணப்புழக்கத்திற்காக டிவிடெண்ட்-விளைச்சல் தரும் பங்குகளை நோக்கி திரும்புகின்றனர். அதிக ஆபத்துள்ள பசியுடன் இருப்பவர்களுக்கு, ஊக ஆதாயங்கள் குறிக்கோளாக மாறும், சந்தை ஏற்ற இறக்கத்தை வழிநடத்தவும் மற்றும் கணிசமான வெகுமதிகளை அறுவடை செய்யவும் விருப்பம் உள்ளது.',
      investessay3: 'உங்கள் ஆபத்து சகிப்புத்தன்மையைப் புரிந்துகொள்வது சமமாக முக்கியமானது. இது சந்தை ஏற்ற இறக்கங்களுடன் உங்களின் ஆறுதல் நிலையை வரையறுத்து, உங்கள் சொத்துத் தேர்வை வழிநடத்துகிறது. கன்சர்வேடிவ் முதலீட்டாளர்கள் கவனமாக இருக்கிறார்கள், மூலதனப் பாதுகாப்பில் கவனம் செலுத்துகிறார்கள் மற்றும் ப்ளூ-சிப் பங்குகள் அல்லது பத்திரங்கள் போன்ற குறைந்த ஆபத்துள்ள முதலீடுகளை ஆதரிக்கின்றனர். அவர்கள் நிலையான, கணிக்கக்கூடிய சொத்துக்களில் ஆறுதல் அடைகிறார்கள். மிதவாதிகள் வளர்ச்சிக்கும் ஆபத்துக்கும் இடையில் சமநிலையை நாடுகின்றனர்.',
      investessay4:
      'அவர்கள் சில சந்தை ஏற்ற இறக்கங்களை ஏற்றுக்கொள்கிறார்கள் மற்றும் பங்குகள் மற்றும் பத்திரங்களின் கலவையுடன் தங்கள் போர்ட்ஃபோலியோக்களை அடிக்கடி வேறுபடுத்துகிறார்கள். ஆக்கிரமிப்பு முதலீட்டாளர்கள் அதிக ரிஸ்க் பசியைக் கொண்டுள்ளனர், அதிக வருவாய்க்கான வாய்ப்பை வரவேற்கிறார்கள். அவை வளர்ச்சிப் பங்குகளை குறிவைக்கலாம், வளர்ந்து வரும் சந்தைகளை ஆராயலாம் மற்றும் பொதுவாக நீண்ட முதலீட்டு அடிவானத்தைக் கொண்டிருக்கலாம். சமச்சீர் முதலீட்டாளர்கள், இதற்கிடையில், சமநிலையை நோக்கமாகக் கொண்டுள்ளனர். பல்வகைப்படுத்தல் மற்றும் சிந்தனைமிக்க சொத்து ஒதுக்கீடு மூலம் ஆபத்தைத் தணிக்கும் அதே வேளையில் மிதமான வளர்ச்சித் திறனை அவர்கள் பின்பற்றுகின்றனர்.'
  }
};

I18n.putVocabularies(dict);

const InvestmentGoals = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('investheading')}</Text>
        <View style={styles.cartoonImageContainer}>
          <Image
            source={require('../assets/goals.jpg')}
            style={styles.imageCartoon}
          />
        </View>
        <Text style={styles.essay}>
          {I18n.get('investessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('investessay2')}
          {'\n'}
          {'\n'}
          {'\n'}
          {I18n.get('investessay3')}
          {'\n'}
          {'\n'}
          {I18n.get('investessay4')}
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

export default InvestmentGoals;
