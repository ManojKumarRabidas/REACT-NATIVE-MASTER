// // src/screens/CalculatorScreen.tsx
// import React, { useState } from 'react';
// import { View, Button, Text, TextInput, StyleSheet } from 'react-native';

// const CalculatorScreen = ({ navigation }: any) => {
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');
//   const [result, setResult] = useState('');

//   const parse = (val: string) => parseFloat(val) || 0;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Calculator</Text>
//       <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter A" value={a} onChangeText={setA} />
//       <TextInput style={styles.input} keyboardType="numeric" placeholder="Enter B" value={b} onChangeText={setB} />

//       <Text>Result: {result}</Text>

//       <View style={styles.btnGroup}>
//         <Button title="Add" onPress={() => setResult(`${parse(a) + parse(b)}`)} />
//         <Button title="Subtract" onPress={() => setResult(`${parse(a) - parse(b)}`)} />
//         <Button title="Multiply" onPress={() => setResult(`${parse(a) * parse(b)}`)} />
//         <Button title="Divide" onPress={() => setResult(`${parse(a) / parse(b)}`)} />
//         <Button title="Clear" onPress={() => { setA(''); setB(''); setResult(''); }} />
//         <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   heading: { fontSize: 22, marginBottom: 20 },
//   input: { borderWidth: 1, marginVertical: 10, padding: 10 },
//   btnGroup: { marginTop: 20 },
// });

// export default CalculatorScreen;

import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CalculatorScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = (op: string) => {
    try {
      const tokens = input.split(/[\+\-\*\/]/);
      const a = parseFloat(tokens[0]);
      const b = parseFloat(tokens[1]);

      switch (op) {
        case '+': setResult((a + b).toString()); break;
        case '-': setResult((a - b).toString()); break;
        case '*': setResult((a * b).toString()); break;
        case '/': setResult(b !== 0 ? (a / b).toString() : 'Error'); break;
      }
    } catch {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={input} onChangeText={setInput} placeholder="e.g. 5+3" style={styles.input} keyboardType="numeric" />
      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => handleCalculate('+')} />
        <Button title="-" onPress={() => handleCalculate('-')} />
        <Button title="*" onPress={() => handleCalculate('*')} />
        <Button title="/" onPress={() => handleCalculate('/')} />
      </View>
      <Text style={styles.result}>Result: {result}</Text>
      <Button title="Clear" onPress={() => { setInput(''); setResult(''); }} />
      <Button title="Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
  result: { fontSize: 20, marginVertical: 10 }
});

export default CalculatorScreen;
