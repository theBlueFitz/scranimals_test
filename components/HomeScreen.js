import {
  View,
  ImageBackground,
  Image,
  Button,
  Pressable,
  Text,
} from "react-native";
import { StyleSheet } from "react-native";
const image = { uri: "https://i.ibb.co/P5YhQJy/autumn.jpg" };
export function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <View style={styles.buttons}>
          <Pressable
            style={styles.ctaButtons}
            onPress={() => navigation.navigate("LoginForm")}
          >
            <Text style={styles.buttonText}>Click here to get started</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => navigation.navigate("TrackingMain")}>
          <Text>Pick</Text>
        </Pressable>
        <View style={styles.imgBox}>
          <Image
            source={{uri:'https://i.ibb.co/b6bTHxR/monster-7.png'}}
            style={styles.moaner}
          />
          <Image
            source={{uri: 'https://i.ibb.co/7W3zL4C/monster-1.png'}}
            style={styles.sick}
          />
          <Image
            source={{uri:'https://i.ibb.co/PM9ZMyW/monster-3.png'}}
            style={styles.shouty}
          />
          <Image
            source={{uri: 'https://i.ibb.co/p35FN8g/monster-4.png'}}
            style={styles.purple}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  imgBox: {
    flexDirection: "row",
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-end",
  },
  moaner: {
    marginBottom: 80,
    width: 100,
    height: 100,
  },
  shouty: {
    marginLeft: -20,
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  purple: {
    marginLeft: -20,
    marginBottom: 80,
    width: 100,
    height: 100,
  },
  sick: {
    marginLeft: -20,
    marginBottom: 50,
    width: 100,
    height: 100,
  },

  ctaButtons: {
    backgroundColor: "#0EAD69",

    alignSelf: "center",
    justifyContent: "center",
    height: 90,
    width: 300,
    borderRadius: 100 / 2,
  },
  buttonText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
