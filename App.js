import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigatior from './src/navigation';
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Navigatior />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
