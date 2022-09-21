import { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, Button } from "react-native"

const user = {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
  };

  
const CreatePostScreen = () => {
    const [ description, setDescription ] = useState("hello");

    const onSubmit = () => {
        console.warn("on submit", description)
        setDescription("")
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.image }} style={styles.image} />
                <Text style={styles.name}>{user.name}</Text>
            </View>

            <TextInput value={description} onChangeText={setDescription} placeholder="what is on your mind?" multiline />
            
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
    image: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 10
    },
    name: {
        fontWeight: "500"
    },
    buttonContainer: {
        marginTop: "auto"
    }
})

export default CreatePostScreen;