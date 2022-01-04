import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/Main';

export default function App() {
  return (
    <>
      <Main/>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({

});
