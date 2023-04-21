import React from 'react';
import {
  Target,
  TargetOrder,
  TargetParameters,
  TargetPrefetchObject,
  TargetProduct,
  TargetRequestObject,
} from "@adobe/react-native-aeptarget";
import {ImageBackground, Button, StyleSheet, Text, View, Alert} from 'react-native';
const image = {uri: 'https://reactjs.org/logo-og.png'};
const version = Target.extensionVersion();
console.log("AdobeExperienceSDK: AEPTarget version: " + JSON.stringify(version));
const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/pattern.jpg')}  resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
      <View style={styles.containerBtn}>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Button pressed')}
      />
      <Button
        title="Show Alert"
        color="#f194ff"
        onPress={() => Alert.alert('Click buttons')}
      />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  containerBtn:{
    justifyContent: 'flex-end'
  }
});

export default App;
