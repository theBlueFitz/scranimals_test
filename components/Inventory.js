import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import { useEffect } from "react/cjs/react.development";
import { InventoryItemCard } from "./InventoryItemCard";

export const Inventory = ({ navigation }) => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [userInventory, setUserInventory] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // const userItems = [];
    // console.log(">>>>>>>>", currUser.inventory);
    // for (const key in currUser.inventory) {
    //   userItems.push({ ...currUser.inventory[key], itemId: key });
    // }
    setUserInventory(Object.values(currUser.inventory));
    console.log(">>>>>>>", userInventory);
    return () => {
      setIsLoading(false);
    };
  }, [currUser, setCurrUser]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Inventory</Text>
        <View style={styles.card}>
          {userInventory.map((item) => {
            return (
              <View key={item.itemId}>
                <InventoryItemCard
                  item={item}
                  navigation={navigation}
                  setUserInventory={setUserInventory}
                />
              </View>
            );
          })}
        </View>
        <Pressable
          style={styles.exitbg}
          onPress={() => navigation.navigate("Scranimal")}
        >
          <Image
            source={require("../img_assets/exit.png")}
            style={styles.exit}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3BCEAC",
    alignItems: "center",
  },

  card: {
    flex: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  exit: {
    height: 65,
    width: 65,
    alignSelf: "center",
    justifyContent: "center",
  },
  exitbg: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#fff",
    borderRadius: "50%",
  },
  num: {
    fontSize: 25,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  coin: {
    width: 20,
    height: 20,
  },
  cost: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
