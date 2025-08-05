console.log("🚀 App Started");

// import React from 'react';
// import { View, Text, StyleSheet, StatusBar, useColorScheme } from 'react-native';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <Text style={styles.text}>🎉 Your Custom Screen! Yo Yo sss</Text>
//       <Text style={styles.text}>Ganja ganja</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 24,
//   },
// });

// export default App;

// // App.tsx
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import HomeScreen from './src/screens/HomeScreen';
// import CalculatorScreen from './src/screens/CalculatorScreen';
// import DateTimeScreen from './src/screens/TimeScreen';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Calculator" component={CalculatorScreen} />
//         <Stack.Screen name="DateTime" component={DateTimeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
