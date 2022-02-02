import React, { useState, useEffect, useContext } from "react";
const {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Pressable,
  Image,
} = require("react-native");
import { UserContext } from "../contexts/User";

// DBREF
import { ref, child, get } from "firebase/database";
import { database } from "../firebase";
import { indexCarousel } from "../utils/utils";
import { patchUserPet } from "../utils/dbCalls";

export const PickPet = ({ navigation, route }) => {
  const [petAvatarIndex, setPetAvatarIndex] = useState(0);
  const [petList, setPetList] = useState([
    {
      petImgUrl: "https://i.ibb.co/SBsQf46/tortoise.png",
      petName: "Bertie",
      type: "Reptile",
    },
  ]);
  const { setCurrUser, currUser } = useContext(UserContext);
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `/Pets`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPetList(() => {
            const pets = [];
            for (const pet in snapshot.val()) {
              pets.push(snapshot.val()[pet]);
            }
            return pets;
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error;
      });
  }, []);
  const handlePickPet = () => {
    patchUserPet(
      currUser.userId,
      petList[petAvatarIndex],
      setCurrUser,
      navigation.navigate
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img_assets/Autumn_Landscape.jpg")}
        resizeMode="cover"
        style={styles.img_bg}
      >
        <View>
          <Text style={styles.header}>Pick Your Pet</Text>
          <Text style={styles.petName}>{petList[petAvatarIndex].petName}</Text>
        </View>
        <View style={styles.selectionBox}>
          <Pressable
            style={styles.carouselArrowsLeft}
            onPress={() => {
              setPetAvatarIndex((current) => {
                return indexCarousel(current, -1, petList.length - 1);
              });
            }}
          >
            <Text style={styles.carouselArrowsText}>&#60;</Text>
          </Pressable>
          <Image
            source={{ uri: petList[petAvatarIndex].petImgUrl }}
            style={styles.petImage}
          />
          <Pressable
            style={styles.carouselArrowsRight}
            onPress={() => {
              setPetAvatarIndex((current) => {
                return indexCarousel(current, 1, petList.length - 1);
              });
            }}
          >
            <Text style={styles.carouselArrowsText}>&#62;</Text>
          </Pressable>
        </View>
        <View style={styles.petIntroduction}>
          <Text style={styles.petBlurb}>
            Hi my name is {petList[petAvatarIndex].petName}, please, please,
            please choose me!
          </Text>
        </View>
        <Pressable title="Pick" onPress={handlePickPet}>
          <View style={styles.pickPetContainer}>
            <Text>I Choose You</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img_bg: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
  },
  selectionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  petImage: {
    resizeMode: "contain",
    width: 250,
    height: 250,
  },
  carouselArrowsRight: {
    backgroundColor: "#3BCEAC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 15,
    borderRadius: 50,
  },
  carouselArrowsLeft: {
    backgroundColor: "#3BCEAC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 15,
    borderRadius: 50,
  },
  carouselArrowsText: {
    fontSize: 30,
    color: "#fff",
  },
  petIntroduction: {
    backgroundColor: "#3BCEAC",
    padding: 10,
    color: "#fff",
    width: 300,
  },
  petBlurb: {
    color: "#fff",
  },
  pickPetContainer: {
    backgroundColor: "#3BCEAC",
    padding: 30,
    marginTop: 30,
    borderRadius: 100 / 5,
  },
});
