/* eslint-disable global-require */
import { I18n } from 'aws-amplify';
import React, { useCallback } from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Linking,
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
    brokerheading: 'Find Your Stock Brokers',
    brokeressay1: "In Sri Lanka, the Colombo Stock Exchange (CSE) serves as the primary platform for stock trading. To participate in the stock market, investors typically engage with licensed stockbrokers who facilitate the buying and selling of stocks on their behalf. Some of the prominent stockbroking firms in Sri Lanka include",
    brokeressay2:"stockbrokers play a crucial role in facilitating stock market transactions, providing market insights, and assisting investors in achieving their financial objectives. It's essential for investors to conduct thorough research and choose a stockbroker that aligns with their investment goals and preferences. Additionally, the Colombo Stock Exchange has its own set of rules and regulations that govern trading activities, so investors should familiarize themselves with these regulations as well.",
  },
  si: {
    brokerheading: 'ඔබේ කොටස් තැරැව්කරුවන් සොයන්න',
    brokeressay1:
      'ශ්‍රී ලංකාවේ, කොළඹ කොටස් හුවමාරුව (CSE) කොටස් වෙළඳාම සඳහා මූලික වේදිකාව ලෙස ක්‍රියා කරයි. කොටස් වෙලඳපොලට සහභාගී වීමට, ආයෝජකයින් සාමාන්‍යයෙන් ඔවුන් වෙනුවෙන් කොටස් මිලදී ගැනීමට සහ විකිණීමට පහසුකම් සපයන බලපත්‍රලාභී කොටස් තැරැව්කරුවන් සමඟ සම්බන්ධ වේ. ශ්‍රී ලංකාවේ ප්‍රමුඛ කොටස් තැරැව්කාර සමාගම් කිහිපයක් ඇතුළත් වේ',
      brokeressay2: "කොටස් වෙළඳපල ගනුදෙනු සඳහා පහසුකම් සැලසීම, වෙළඳපල අවබෝධය ලබා දීම සහ ආයෝජකයින්ට ඔවුන්ගේ මූල්‍ය අරමුණු සාක්ෂාත් කර ගැනීම සඳහා සහාය වීම සඳහා කොටස් තැරැව්කරුවන් තීරණාත්මක කාර්යභාරයක් ඉටු කරයි. ආයෝජකයින්ට සිය ආයෝජන ඉලක්ක සහ මනාපයන් සමඟ සමපාත වන කොටස් තැරැව්කරුවකු තෝරා ගැනීම සඳහා පරිපූර්ණ පර්යේෂණ සිදු කිරීම අත්‍යවශ්‍ය වේ. මීට අමතරව, කොළඹ කොටස් වෙළඳපොලට වෙළඳ කටයුතු පාලනය කරන තමන්ගේම නීති රීති මාලාවක් ඇත, එබැවින් ආයෝජකයින් මෙම රෙගුලාසි පිළිබඳව ද හුරුපුරුදු විය යුතුය."
    },
  ta:{
    brokerheading: 'உங்கள் பங்கு தரகர்களைக் கண்டறியவும்',
    brokeressay1:
      'இலங்கையில், கொழும்பு பங்குச் சந்தை (CSE) பங்கு வர்த்தகத்திற்கான முதன்மை தளமாக செயல்படுகிறது. பங்குச் சந்தையில் பங்குபெற, முதலீட்டாளர்கள் பொதுவாக உரிமம் பெற்ற பங்குத் தரகர்களுடன் ஈடுபடுவார்கள், அவர்கள் தங்கள் சார்பாக பங்குகளை வாங்கவும் விற்கவும் உதவுகிறார்கள். இலங்கையில் உள்ள சில முக்கிய பங்கு தரகு நிறுவனங்கள் அடங்கும்',
      brokeressay2: 'பங்குச் சந்தை பரிவர்த்தனைகளை எளிதாக்குதல், சந்தை நுண்ணறிவு வழங்குதல் மற்றும் முதலீட்டாளர்களின் நிதி நோக்கங்களை அடைவதில் பங்கு தரகர்கள் முக்கிய பங்கு வகிக்கின்றனர். முதலீட்டாளர்கள் தங்கள் முதலீட்டு இலக்குகள் மற்றும் விருப்பங்களுடன் ஒத்துப்போகும் ஒரு பங்கு தரகரைத் தேர்ந்தெடுப்பது மற்றும் முழுமையான ஆராய்ச்சியை மேற்கொள்வது அவசியம். கூடுதலாக, கொழும்பு பங்குச் சந்தையானது வர்த்தக நடவடிக்கைகளை நிர்வகிக்கும் அதன் சொந்த விதிகள் மற்றும் ஒழுங்குமுறைகளைக் கொண்டுள்ளது, எனவே முதலீட்டாளர்கள் இந்த ஒழுங்குமுறைகளையும் நன்கு அறிந்திருக்க வேண்டும்.'
    }
};

I18n.putVocabularies(dict);

const Brokers = (prop: {
  navigation: { navigate: (arg0: string) => void };
}) => {

    const asiaSecurities = useCallback(() => {
        Linking.openURL(
            'https://www.asiasecurities.lk/'
        );
      }, []);

      const jhonKeels = useCallback(() => {
        Linking.openURL(
            'https://www.jksb.com/'
        );
      }, []);

      const softLogic = useCallback(() => {
        Linking.openURL(
            'https://softlogicstockbrokers.lk/'
        );
      }, []);

      const cal = useCallback(() => {
        Linking.openURL(
            'https://cal.lk/'
        );
      }, []);

      const fge = useCallback(() => {
        Linking.openURL(
            'https://fge.lk/'
        );
      }, []);

      const bartleet = useCallback(() => {
        Linking.openURL(
            'https://www.bartleetreligare.com/'
        );
      }, []);


  return(
  <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{I18n.get('brokerheading')}</Text>
        <Text style={styles.essay}>
          {I18n.get('brokeressay1')}
          {'\n'}
        </Text>

        <View style={{display:'flex', alignItems:'center', margin:10}}>
            <TouchableOpacity onPress={asiaSecurities} style={{backgroundColor:'#DEB887',width:310, height:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold',textTransform:'uppercase'}}>
                Asia Securities
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{display:'flex', alignItems:'center', margin:10}}>
            <TouchableOpacity onPress={jhonKeels} style={{backgroundColor:'#5F9EA0',width:310, height:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold',textTransform:'uppercase'}}>
                John Keells
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{display:'flex', alignItems:'center', margin:10}}>
            <TouchableOpacity onPress={softLogic} style={{backgroundColor:'#D2691E',width:310, height:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold',textTransform:'uppercase'}}>
                Softlogic Stockbrokers 
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{display:'flex', alignItems:'center', margin:10}}>
            <TouchableOpacity onPress={cal} style={{backgroundColor:'#FF7F50',width:310, height:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold',textTransform:'uppercase'}}>
                Capital Alliance
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{display:'flex', alignItems:'center', margin:10}}>
            <TouchableOpacity onPress={fge} style={{backgroundColor:'#008B8B',width:310, height:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold',textTransform:'uppercase'}}>
                First Guardian Equities
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{display:'flex', alignItems:'center', margin:10}}>
            <TouchableOpacity onPress={bartleet} style={{backgroundColor:'#006400',width:310, height:50, borderRadius:20, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:15,color:'white',fontWeight:'bold',textTransform:'uppercase'}}>
                Bartleet
                </Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.essay}>
          {I18n.get('brokeressay2')}
          {'\n'}
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

export default Brokers;


