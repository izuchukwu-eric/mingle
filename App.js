import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigatior from './src/navigation';
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native"

Amplify.configure(awsconfig);

function App() {
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

export default withAuthenticator(App);
