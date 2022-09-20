import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


const post = {
  id: "p1",
  createdAt: "19 m",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Vadim Savin",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/**Header */}
          <View style={styles.header}>
            <Image source={{ uri: post.User.image }} style={styles.profileImage} />
            <View>
              <Text style={styles.name}>{post.User.name}</Text>
              <Text style={styles.subTitle}>{post.createdAt}</Text>
              <Entypo name="dots-three-horizontal" size={18} color="gray" style={styles.icon} />
            </View>
          </View>
        {/**Body */}

        {/**Footer */}
        <View style={styles.footer}>

        </View>  
      </View>
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
  },
  post: {
    width: "100%"
  },
  header: {
    width: "100%",
    flexDirection: "row"
  },
  profileImage: {
    width: 50,
    height: 50
  },
  name: {},
  subTitle: {},
  icon: {}
});
