import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/StackNavigation';


type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor='gray'
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput placeholder="Email" style={styles.input} placeholderTextColor='gray' keyboardType='email-address' />
      <TextInput placeholder="Password" style={styles.input} placeholderTextColor='gray' secureTextEntry={true} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dashboard', { name })}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    color: 'black'
  },
  button: {
    backgroundColor: '#018790',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});