import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import FeedPost from './src/components/FeedPost';
import posts from "./assets/data/posts.json"

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPost post={posts[0]} />
      {/* <FeedPost post={} />
      <FeedPost post={} /> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
