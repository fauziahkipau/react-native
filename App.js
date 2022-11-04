import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello world!</Text>
      <Text style={styles.dummyText}>I'm fauziah</Text>
      <Button title='Tap me!'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    padding: 10, 
    margin: 10, 
    borderColor: 'blue', 
    borderWidth: 1
  }
});
