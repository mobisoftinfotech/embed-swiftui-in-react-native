
import React,  {useState} from 'react'

import {
    View,
    Text,
    TextInput,
    Button,
    NativeModules,
    StyleSheet,
  } from 'react-native';

const {NativeBridge} = NativeModules;

const HomeScreen = () => {

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const openNativeScreen = () => {
        const data = {
            message: message
        };

        NativeBridge.openSwiftUIScreen(data, (result: any) => {
            setResponse(result.response);

        })
    }

  return (
    <View style={styles.container}>
    <Text style={styles.title}>React Native Screen</Text>
    
    <TextInput
      style={styles.input}
      placeholder="Enter message for SwiftUI"
      value={message}
      onChangeText={setMessage}
    />
    
    <Button title="Open SwiftUI Screen" onPress={openNativeScreen} />
    
    {response ? (
      <Text style={styles.response}>
        Response from SwiftUI: {response}
      </Text>
    ) : null}
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
    },
    response: {
      marginTop: 20,
      fontSize: 16,
      textAlign: 'center',
    },
  });
