import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import Popover from "react-native-popover-view";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { removeUserItem } from "../utils/dbCalls";

export const InventoryItemCard = ({ item }) => {
  const [popover, setPopover] = useState(false);
  const { currUser, setCurrUser } = useContext(UserContext);

  const handleUse = () => {
    console.log("Use now.");
    removeUserItem(item, currUser, setCurrUser);
    setPopover(false);
  };

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          setPopover(true);
        }}
      >
        <View style={styles.imgWrapper}>
          <Image
            resizeMode="contain"
            source={{ uri: item.itemImgUrl }}
            style={styles.img}
          />
        </View>
      </Pressable>

      <Popover
        isVisible={popover}
        onRequestClose={() => {
          setPopover(false);
        }}
      >
        <View style={styles.popoverWrapper}>
          <View style={styles.popover}>
            <View style={styles.imgContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: item.itemImgUrl }}
                style={styles.imgPop}
              />
            </View>
            <View style={styles.icons}>
              <Pressable onPress={handleUse}>
                <Image
                  source={require("../img_assets/check-circle-solid.png")}
                  style={styles.exit}
                />
              </Pressable>
              <View style={styles.textWrap}>
                <Text style={styles.popText}>{item.itemName}</Text>
              </View>
              <Pressable
                onPress={() => {
                  setPopover(false);
                }}
              >
                <Image
                  source={require("../img_assets/exit.png")}
                  style={styles.exit}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Popover>
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    width: 85,
    height: 85,
  },
  img: {
    flex: 1,
    width: 19/20,
    height: 19/20,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: "#FFD23F",
    borderRadius: 100 / 5,
    borderWidth: 3,
    borderColor: "#fff",
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  popover: {
    backgroundColor: "#FFD23F",
    borderRadius: 100 / 5,
    borderWidth: 3,
    borderColor: "#fff",
    height: 300,
    alignItems: "center",
    paddingTop: 12,
    width: 19/20,
    marginLeft: 1/40,
  },
  imgContainer: {
    width: 160,
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 100 / 5,
    alignItems: "center",
    justifyContent: "center",
  },
  imgPop: {
    width: 19/20,
    height: 19/20,
  },
  textWrap: {
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    width: 6/10,
    marginLeft: 6,
    marginRight: 6,
  },
  popText: {
    fontSize: 28,
    color: "#540D6E",
    textAlign: "center",
  },
  icons: {
    marginTop: 30,
    width: 9/10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  exit: {
    height: 65,
    width: 65,
    alignSelf: "center",
  },
  coin: {
    width: 20,
    height: 20,
  },
});
