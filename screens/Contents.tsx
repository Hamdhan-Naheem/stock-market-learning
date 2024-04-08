import { I18n } from 'aws-amplify';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  number: {
    fontSize: 20,
    color: '#c0c0c0',
    fontWeight: '400',
    fontFamily: 'commiBold',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
  },
  letters: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'baloo-bold',
    color: '#4B4846',
    left: 15,
    textTransform: 'uppercase',
  },
});

const dict = {
  en: {
    contents: 'Stock Prediction',
    content1: 'What Is a Stock',
    content2: 'Types of Stocks',
    content3: 'Stock Indices',
    content4: 'Investment Goals and Risk Tolerance',
    content5: 'Investment Accounts',
    content6: 'Market Orders vs Limit Orders',
    content7: 'Dividends',
    content8: 'Stock Analysis',
    content9: 'Long vs Short Investing',
    content10: 'Financial News and Research',
    content11: 'Investment Strategies',
    content12: 'Sri lanka stock brokers',
  },
  si: {
    contents: 'කොටස් අනාවැකිය',
    content1: 'තොගයක් යනු කුමක්ද?',
    content2: 'කොටස් වර්ග',
    content3: 'කොටස් දර්ශක',
    content4: 'ආයෝජන ඉලක්ක සහ අවදානම් ඉවසීම',
    content5: 'ආයෝජන ගිණුම්',
    content6: 'වෙළඳපල ඇණවුම් එදිරිව සීමා ඇණවුම්',
    content7: 'ලාභාංශ',
    content8: 'කොටස් විශ්ලේෂණය',
    content9: 'දිගු කාලීන එදිරිව කෙටි කාලීන ආයෝජන',
    content10: 'මූල්ය පුවත් සහ පර්යේෂණ',
    content11: 'ආයෝජන උපාය මාර්ග',
    content12: 'ශ්‍රී ලංකා කොටස් තැරැව්කරුවන්',
  },
  ta: {
    contents: 'பங்கு கணிப்பு',
    content1: 'பங்கு என்றால் என்ன',
    content2: 'பங்குகளின் வகைகள்',
    content3: 'பங்கு குறியீடுகள்',
    content4: 'முதலீட்டு இலக்குகள் மற்றும் இடர் சகிப்புத்தன்மை',
    content5: 'முதலீட்டு கணக்குகள்',
    content6: 'சந்தை ஆர்டர்கள் vs வரம்பு ஆர்டர்கள்',
    content7: 'டிவிடெண்ட்',
    content8: 'பங்கு பகுப்பாய்வு',
    content9: 'நீண்ட கால மற்றும் குறுகிய கால முதலீடு',
    content10: 'நிதிச் செய்திகள் மற்றும் ஆராய்ச்சி',
    content11: 'முதலீட்டு உத்திகள்',
    content12: 'இலங்கை பங்கு தரகர்கள்',
  },
};

I18n.putVocabularies(dict);

const stock = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  props.navigation.navigate('stock');
};

const stockPrediction = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('stockPrediction');
};

const stockIndices = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('stockIndices');
};

const investmentGaols = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('investmentGaols');
};

const divedents = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('divedents');
};

const stockAnalysis = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('stockAnalysis');
};

const longTerm = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('longTerm');
};

const news = (props: { navigation: { navigate: (arg0: string) => void } }) => {
  props.navigation.navigate('news');
};

const Strategies = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('Strategies');
};

const brokers = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  props.navigation.navigate('brokers');
};

function Contents(prop: { navigation: { navigate: (arg0: string) => void } }) {
  return (
    <ScrollView>
      <View style={{ paddingBottom: 40 }}>
        <View style={{ paddingTop: 20, paddingBottom: 20 }}></View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => stockPrediction(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>01</Text>
              <Text style={styles.letters}>{I18n.get('contents')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => stock(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>02</Text>
              <Text style={styles.letters}>{I18n.get('content1')}</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.container}>
          <TouchableOpacity onPress={() => stockIndices(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>03</Text>
              <Text style={styles.letters}>{I18n.get('content3')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => investmentGaols(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>04</Text>
              <Text style={styles.letters}>{I18n.get('content4')}</Text>
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.container}>
          <TouchableOpacity onPress={() => divedents(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>05</Text>
              <Text style={styles.letters}>{I18n.get('content7')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => stockAnalysis(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>06</Text>
              <Text style={styles.letters}>{I18n.get('content8')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => longTerm(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>07</Text>
              <Text style={styles.letters}>{I18n.get('content9')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => news(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>08</Text>
              <Text style={styles.letters}>{I18n.get('content10')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => Strategies(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>09</Text>
              <Text style={styles.letters}>{I18n.get('content11')}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => brokers(prop)}>
            <View style={styles.button}>
              <Text style={styles.number}>10</Text>
              <Text style={styles.letters}>{I18n.get('content12')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Contents;
