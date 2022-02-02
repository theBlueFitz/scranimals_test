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
        </View>
        <View style={styles.selectionBox}>
          <Pressable
            onPress={() => {
              setPetAvatarIndex((current) => {
                return indexCarousel(current, -1, petList.length - 1);
              });
            }}
          >
            <Image
              source={require("../img_assets/arrow left.png")}
              style={styles.carouselArrowsLeft}
            />
          </Pressable>
          <Image
            source={{ uri: petList[petAvatarIndex].petImgUrl }}
            style={styles.petImage}
          />
          <Pressable
            onPress={() => {
              setPetAvatarIndex((current) => {
                return indexCarousel(current, 1, petList.length - 1);
              });
            }}
          >
            <Image
              source={require("../img_assets/arrow right.png")}
              style={styles.carouselArrowsRight}
            />
          </Pressable>
        </View>
        <View style={styles.petIntroduction}>
          <Text style={styles.petBlurb}>
            Hi, my name is {petList[petAvatarIndex].petName}. Please choose me!
          </Text>
        </View>
        <Pressable title="Pick" onPress={handlePickPet}>
          <View style={styles.pickPetContainer}>
            <Text style={styles.selectPet}>Select Pet</Text>
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
  petName: {
    textAlign: "center",
    fontSize: 16,
  },
  carouselArrowsRight: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  carouselArrowsLeft: {
    width: 40,
    height: 40,
    marginLeft: 15,
  },
  petIntroduction: {
    backgroundColor: "#FFD23F",
    padding: 15,
    color: "#540D6E",
    width: 300,
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 3,
  },
  petBlurb: {
    color: "#540D6E",
    fontSize: 16,
  },
  pickPetContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3BCEAC",
    justifyContent: "space-evenly",
    height: 60,
    width: 200,
    borderRadius: 100 / 2,
    marginBottom: 10,
    marginTop: 10,
  },
  selectPet: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
