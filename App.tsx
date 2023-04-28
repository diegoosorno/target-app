import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import Home from './screens/Home';
import DetailsScreen from './screens/Details';
import { Target } from "@adobe/react-native-aeptarget";

const linking = {
  prefixes: [
    'targetapp://', 'http://www.adobe-adl.com'
  ],
  config: {
    screens: {
      home: 'Home',
      details: 'DetailsScreen',
      main: 'Main',
    },
  },
};

const Stack = createNativeStackNavigator();
const version = Target.extensionVersion();
console.log("AdobeExperienceSDK: AEPTarget version: " + JSON.stringify(version));
const App = () => (
  <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);


export default App;
