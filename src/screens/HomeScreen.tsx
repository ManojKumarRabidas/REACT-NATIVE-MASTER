// // src/screens/HomeScreen.tsx
// import React, { useEffect, useState } from 'react';
// import { View, Button, Text, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation, route }: any) => {
//   const [time, setTime] = useState('');

//   useEffect(() => {
//     if (route.params?.currentTime) {
//       const fullTime = route.params.currentTime;
//       const [hh, mm] = fullTime.split(':');
//       setTime(`${hh}:${mm}`);
//     }
//   }, [route.params?.currentTime]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Home</Text>
//       <Text>Current Time: {time}</Text>
//       <Button title="Go to Calculator" onPress={() => navigation.navigate('Calculator')} />
//       <Button title="Go to Current Date" onPress={() => navigation.navigate('DateTime')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   heading: { fontSize: 24, marginBottom: 20 },
// });

// export default HomeScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(formatted);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{currentTime}</Text>
      <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
      <Button title="Current Date & Time" onPress={() => navigation.navigate('Time', { updateTime: setCurrentTime })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  time: { fontSize: 24, marginBottom: 20 }
});

export default HomeScreen;
