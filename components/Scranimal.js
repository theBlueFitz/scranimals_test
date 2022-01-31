import { View, Image, Pressable, Text, ImageBackground } from "react-native";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { StyleSheet } from "react-native";

export function Scranimal({ navigation }) {
  const { currUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    console.log("inside useeffect");
    if (currUser.pet.petImgUrl) {
      console.log(currUser.pet);
      setIsLoading(false);
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.img_background}>
        <ImageBackground
          imageStyle={{ borderRadius: 40 }}
          source="https://i.ibb.co/fprhpTK/vecteezy-nature-landscape-background-with-green-grass-and-trees.jpg"
          style={styles.img}
        >
          {!isLoading && (
            <Image
              source={currUser.pet.petImgUrl}
              style={styles.pet}
              resizeMode="contain"
            />
          )}
        </ImageBackground>
      </View>
      <View style={styles.buttons}>
        <Pressable
          style={styles.iconButton}
          onPress={() => navigation.navigate("Inventory")}
        >
          <Image
            source={require("../img_assets/icons/shopping-bag-solid.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={styles.iconButton}>
          <Image
            source={require("../img_assets/icons/walking-white.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable
          style={styles.iconButton}
          onPress={() => navigation.navigate("Shop")}
        >
          <Image
            source={require("../img_assets/icons/shopping-cart-solid.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFD23F",
    alignItems: "center",
  },
  img_background: {
    width: "85%",
    height: 520,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",

    marginTop: 20,
  },
  img: {
    width: "100%",
    height: 520,
    borderRadius: 40,
    justifySelf: "center",
  },
  pet: {
    width: 200,
    height: 300,
    position: "absolute",
    bottom: 20,
    left: 50,
  },
  icon: {
    width: 70,
    height: 70,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#",
    marginBottom: 20,
  },
  iconButton: {
    marginTop: 15,
    width: 100,
    height: 100,
    backgroundColor: "#3BCEAC",
    padding: 15,
    borderRadius: 100 / 5,
    marginRight: 8,
    marginLeft: 8,
  },
});
