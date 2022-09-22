import { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, Button } from "react-native"
import { Entypo } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from "@react-navigation/native";
import { DataStore, Auth } from "aws-amplify";
import { Posts } from "../models"


const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  };

  
const CreatePostScreen = () => {
    const navigation = useNavigation();
    const [ description, setDescription ] = useState("hello");
    const [ image, setImage ] = useState(null);

    const onSubmit = async () => {
        const userData = await Auth.currentAuthenticatedUser()

        const newPost = new Posts({
            description,
            numberOfLikes: 0,
            numberOfShares: 0,
            postsUserId: userData.attributes.sub,
            _version: 1
        })

        await DataStore.save(newPost);

        setDescription("")
        navigation.goBack();
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        console.log(result);
      
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.image }} style={styles.profileImage} />
                <Text style={styles.name}>{user.name}</Text>
                <Entypo 
                    onPress={pickImage}
                    name='images'
                    size={24}
                    color="limegreen"
                    style={styles.icon}
                />
            </View>

            <TextInput value={description} onChangeText={setDescription} placeholder="what is on your mind?" multiline />
            
            <Image source={{ uri: image}} style={styles.image} />

            <View style={styles.buttonContainer}>
                <Button title="post" onPress={onSubmit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        paddingTop: 50,
        backgroundColor: "#FFFFFF"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginBottom: 10
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 10
    },
    image: {
        width: "100%",
        aspectRatio: 1
    },
    name: {
        fontWeight: "500"
    },
    buttonContainer: {
        marginTop: "auto"
    },
    icon: {
        marginLeft: "auto"
    }
})

export default CreatePostScreen;