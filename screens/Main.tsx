import React, { useEffect, useState } from 'react';
import {ImageBackground, Button, StyleSheet, Text, View, Alert} from 'react-native';
import { Target, TargetParameters, TargetPrefetchObject  } from '@adobe/react-native-aeptarget';
//import { Assurance } from "@adobe/react-native-aepassurance";

const Main = ({ navigation }) => {

  //Assurance.startSession("http://www.adobe-adl.com/?adb_validation_sessionid=5528e91f-0377-443d-9802-cc645756cdc3");
  var mboxParameters1 = { status: "platinum" };
  var parameters1 = new TargetParameters(mboxParameters1);
  var prefetch1 = new TargetPrefetchObject("app-target-mbox", parameters1);

  var prefetchList = [prefetch1];
  var profileParameters1 = { ageGroup: "20-32" };

  var parameters = new TargetParameters(
    { parameters: "parametervalue" },
    profileParameters1,
  );
  Target.prefetchContent(prefetchList, parameters)
    .then((success) => console.log("success",success))
    .catch((err) => console.log(err));

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/pattern.jpg')}  resizeMode="cover" style={styles.image}>
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
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />

        </View>
      </ImageBackground>
    </View>
  );
}

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

export default Main;
