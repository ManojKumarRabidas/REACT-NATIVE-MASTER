// // src/screens/DateTimeScreen.tsx
// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const DateTimeScreen = ({ navigation }: any) => {
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const timeString = now.toLocaleTimeString('en-GB'); // HH:MM:SS
//       setCurrentTime(timeString);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const sendBack = () => {
//     navigation.navigate('Home', { currentTime });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Current Time</Text>
//       <Text style={styles.time}>{currentTime}</Text>
//       <Button title="Back to Home" onPress={sendBack} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   heading: { fontSize: 22 },
//   time: { fontSize: 30, marginVertical: 20 },
// });

// export default DateTimeScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type TimeScreenRouteProp = RouteProp<RootStackParamList, 'Time'>;

const TimeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<TimeScreenRouteProp>();
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatted = now.toLocaleTimeString();
      setTime(formatted);
      if (route.params?.updateTime) {
        route.params.updateTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  time: { fontSize: 28, marginBottom: 20 }
});

export default TimeScreen;
