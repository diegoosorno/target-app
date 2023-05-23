import React, { useEffect, useState } from 'react';
import {ImageBackground, Button, StyleSheet, Text, View, Alert} from 'react-native';
import { Target, TargetOrder, TargetParameters, TargetPrefetchObject, TargetProduct, TargetRequestObject } from '@adobe/react-native-aeptarget';

const Main = ({ navigation }) => {

  const targetExtensionVersion = async () => {
    const version = await Target.extensionVersion();
    console.log(`AdobeExperienceSDK: Target version: ${version}`);
  };

  const clearPrefetchCache = () => Target.clearPrefetchCache();

  const getSessionId = async () => {
    const sessionId = await Target.getSessionId();
    console.log(`Session ID: ${sessionId}`);
  };

  const getThirdPartyId = async () => {
    const id = await Target.getThirdPartyId();
    console.log(`AdobeExperienceSDK: Third Party ID: ${id}`);
  };

  const getTntId = async () => {
    const id = await Target.getTntId();
    console.log(`AdobeExperienceSDK: TNT ID ${id}`);
  };

  const resetExperience = () => Target.resetExperience();

  const setPreviewRestartDeeplink = () =>
    Target.setPreviewRestartDeeplink('https://www.adobe.com');

  const setSessionId = () => Target.setSessionId('sessionId123');

  const setTntId = () => Target.setTntId('tntId456');

  const setThirdPartyId = () => Target.setThirdPartyId('thirdPartyId0001');

  const retrieveLocationContent = () => {
    const mboxParameters1 = { status: 'platinum' };
    const mboxParameters2 = { userType: 'Paid' };
    const purchaseIDs = ['34', '125'];

    const targetOrder = new TargetOrder('ADCKKIM', 344.3, purchaseIDs);
    const targetProduct = new TargetProduct('24D3412', 'Books');
    const parameters1 = new TargetParameters(mboxParameters1, null, null, null);
    const request1 = new TargetRequestObject(
      'app-target-mbox',
      parameters1,
      'defaultContent1',
      (error, content) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Adobe content:' + content);
        }
      },
    );

    const parameters2 = new TargetParameters(
      mboxParameters2,
      { profileParameters: 'parameterValue' },
      targetProduct,
      targetOrder,
    );
    const request2 = new TargetRequestObject(
      'mboxName2',
      parameters2,
      'defaultContent2',
      (error, content) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Adobe content:' + content);
        }
      },
    );

    const locationRequests = [request1, request2];
    const profileParameters1 = { ageGroup: '20-32' };

    const parameters = new TargetParameters(
      { parameters: 'parametervalue' },
      profileParameters1,
      targetProduct,
      targetOrder,
    );
    Target.retrieveLocationContent(locationRequests, parameters);
  };

  const displayedLocations = () =>
    Target.displayedLocations(['app-target-mbox', 'app-target-mbox'], null);

  const clickedLocation = () => {
    const purchaseIDs = ['34', '125'];

    const targetOrder = new TargetOrder('ADCKKIM', 344.3, purchaseIDs);
    const targetProduct = new TargetProduct('24D3412', 'Books');
    const profileParameters1 = { ageGroup: '20-32' };
    const parameters = new TargetParameters(
      { parameters: 'parametervalue' },
      profileParameters1,
      targetProduct,
      targetOrder,
    );

    Target.clickedLocation('app-target-mbox', parameters);
  };

  const prefetchContent = () => {
    const mboxParameters1 = { status: 'platinum' };
    const mboxParameters2 = { userType: 'Paid' };
    const purchaseIDs = ['34', '125'];

    const targetOrder = new TargetOrder('ADCKKIM', 344.3, purchaseIDs);
    const targetProduct = new TargetProduct('24D3412', 'Books');
    const parameters1 = new TargetParameters(mboxParameters1, null, null, null);
    const prefetch1 = new TargetPrefetchObject('app-target-mbox', parameters1);

    const parameters2 = new TargetParameters(
      mboxParameters2,
      { profileParameters: 'parameterValue' },
      targetProduct,
      targetOrder,
    );
    const prefetch2 = new TargetPrefetchObject('mboxName2', parameters2);

    const prefetchList = [prefetch1, prefetch2];
    const profileParameters1 = { ageGroup: '20-32' };

    const parameters = new TargetParameters(
      { parameters: 'parametervalue' },
      profileParameters1,
      targetProduct,
      targetOrder,
    );
    Target.prefetchContent(prefetchList, parameters)
      .then(success => console.log(success))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/pattern.jpg')} resizeMode="cover" style={styles.image}>
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

          <Button
            title="extensionVersion()"
            onPress={targetExtensionVersion}
          />
          <Button
            title="clearPrefetchCache()"
            onPress={() => clearPrefetchCache()}
          />
          <Button
            title="getSessionId()"
            onPress={getSessionId}
          />
          <Button
            title="getThirdPartyId()"
            onPress={getThirdPartyId}
          />
          <Button
            title="getTntId()"
            onPress={getTntId}
          />
          <Button
            title="resetExperience()"
            onPress={resetExperience}
          />
          <Button
            title="setPreviewRestartDeeplink(...)"
            onPress={setPreviewRestartDeeplink}
          />
          <Button
            title="setSessionId(...)"
            onPress={setSessionId}
          />
          <Button
            title="setThirdPartyId(...)"
            onPress={setThirdPartyId}
          />
          <Button
            title="setTntId(...)"
            onPress={setTntId}
          />
          <Button
            title="retrieveLocationContent(...)"
            onPress={retrieveLocationContent}
          />
          <Button
            title="prefetchContent(...)"
            onPress={prefetchContent}
          />
          <Button
            title="displayedLocations(...)"
            onPress={displayedLocations}
          />
          <Button
            title="clickedLocation(...)"
            onPress={clickedLocation}
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
