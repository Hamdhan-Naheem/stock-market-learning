
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList,ScrollView, TouchableOpacity } from 'react-native';
import ApiService from '../API/ApiService'; // Import your API service module



function StockPredictionScreen() {
  const [daysToPredict, setDaysToPredict] = useState('');
  const [predictedValues, setPredictedValues] = useState([]);

  const handlePredict = () => {
    // Make a GET request to predict future stock prices
    ApiService.get(`/predict-future?days_to_predict=${daysToPredict}`)
      .then((response) => {
        setPredictedValues(response.data.predicted_values);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log(predictedValues)


  return (
    <ScrollView>
    <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontFamily:'baloo-bold',fontSize:25}}>Enter Days to Predict</Text>
      <TextInput
        placeholder="Enter number of days"
        keyboardType="numeric"
        onChangeText={(text) => setDaysToPredict(text)}
        value={daysToPredict}
        style={{backgroundColor:'white', width:'90%', height:40, borderRadius:5}}
      />

      <TouchableOpacity onPress={handlePredict} style={{marginTop:20, backgroundColor:'green', width:'90%',borderRadius:10}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontFamily:'baloo-bold', fontSize:25, color:'white'}}>PREDICT</Text>
        </View>
      </TouchableOpacity>

      {predictedValues.length > 0 && (
        <FlatList
          data={predictedValues}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}
    </View>
    </ScrollView>
  );
}

export default StockPredictionScreen;