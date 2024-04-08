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
  props.navigation.navigate('stockIndices');
};

const dict = {
  en: {
    stockheading: 'WHAT IS STOCK',
    stockessay1:'A stock, often referred to as a share, is a financial instrument that represents ownership in a corporation. When you own a stock, you essentially own a piece of that company.',
    stockessay2:'Stocks are bought and sold in the financial markets, and shareholders have the potential to benefit from the company profits and, in some cases, exercise voting rights in corporate decisions.',
    stockessay3: 'The value of a stock can fluctuate over time, presenting both opportunities for capital gains and risks associated with potential losses.',
    stockessay4:'Investing in stocks is a common way for individuals and institutions to participate in the ownership and growth of companies.',
  },
  si: {
    stockheading: 'stock යනු කුමක්ද',
    stockessay1:
      'තොගයක්, බොහෝ විට කොටසක් ලෙස හැඳින්වේ, එය සංස්ථාවක හිමිකාරිත්වය නියෝජනය කරන මූල්‍ය උපකරණයකි. ඔබ සතුව තොගයක් ඇති විට, ඔබට අත්‍යවශ්‍යයෙන්ම එම සමාගමේ කොටසක් හිමි වේ.',
    stockessay2:
      'කොටස් මුල්‍ය වෙලඳපොලවල මිල දී ගෙන විකුණනු ලබන අතර, කොටස් හිමියන්ට සමාගමේ ලාභයෙන් ප්‍රතිලාභ ලබා ගැනීමේ හැකියාව ඇති අතර, සමහර අවස්ථාවලදී, ආයතනික තීරණ වලදී ඡන්ද අයිතිය භාවිතා කරයි.',
    stockessay3: 'කොටස්වල වටිනාකම කාලයත් සමඟ උච්චාවචනය විය හැකි අතර, ප්‍රාග්ධන ලාභ සඳහා අවස්ථා සහ විභව පාඩු හා සම්බන්ධ අවදානම් යන දෙකම ඉදිරිපත් කරයි.',
    stockessay4:
      'කොටස්වල ආයෝජනය කිරීම සමාගම්වල හිමිකාරිත්වයට සහ වර්ධනයට සහභාගී වීමට පුද්ගලයන්ට සහ ආයතනවලට පොදු ක්‍රමයකි.',
  },
  ta:{
    stockheading: 'பங்கு என்றால் என்ன',
    stockessay1:
      'ஒரு பங்கு, பெரும்பாலும் பங்கு என குறிப்பிடப்படுகிறது, இது ஒரு நிறுவனத்தில் உரிமையைக் குறிக்கும் நிதிக் கருவியாகும். நீங்கள் ஒரு பங்கு வைத்திருக்கும் போது, ​​​​அந்த நிறுவனத்தின் ஒரு பகுதியை நீங்கள் வைத்திருக்கிறீர்கள்.',
    stockessay2:
      'பங்குகள் நிதிச் சந்தைகளில் வாங்கப்பட்டு விற்கப்படுகின்றன, மேலும் பங்குதாரர்கள் நிறுவனத்தின் லாபத்தில் இருந்து பயனடையும் திறனைக் கொண்டுள்ளனர் மற்றும் சில சந்தர்ப்பங்களில், பெருநிறுவன முடிவுகளில் வாக்களிக்கும் உரிமையைப் பயன்படுத்துகின்றனர்.',
    stockessay3: 'ஒரு பங்கின் மதிப்பு காலப்போக்கில் ஏற்ற இறக்கமாக இருக்கலாம், இது மூலதன ஆதாயங்களுக்கான வாய்ப்புகள் மற்றும் சாத்தியமான இழப்புகளுடன் தொடர்புடைய அபாயங்கள் இரண்டையும் வழங்குகிறது.',
    stockessay4:
      'பங்குகளில் முதலீடு செய்வது தனிநபர்கள் மற்றும் நிறுவனங்கள் நிறுவனங்களின் உரிமை மற்றும் வளர்ச்சியில் பங்கு பெறுவதற்கான பொதுவான வழியாகும்.'
  }
};

I18n.putVocabularies(dict);

const Stock = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('stockheading')}</Text>
        <View style={styles.cartoonImageContainer}>
          <Image
            source={require('../assets/stock.jpg')}
            style={styles.imageCartoon}
          />
        </View>
        <Text style={styles.essay}>
          {I18n.get('stockessay1')}
          {'\n'}
          {'\n'}
          {I18n.get('stockessay2')}
          {'\n'}
          {'\n'}
          {I18n.get('stockessay3')}
          {'\n'}
          {'\n'}
          {I18n.get('stockessay4')}
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

export default Stock;
