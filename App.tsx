import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HomeScreen from './HomeScreen';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
