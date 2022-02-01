import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
  FlatList,
} from "react-native";
import { getDatabase, ref, child, get } from "firebase/database";
import { app, database } from "../firebase";
import { useState, useEffect } from "react";
import { ShopItemCard } from "./ShopItemCard";

export const Shop = ({ navigation }) => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const dbRef = ref(database);
    get(child(dbRef, `/Shop`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItemList(() => {
            const items = [];
            for (let key in snapshot.val()) {
              items.push(snapshot.val()[key]);
            }
            setIsLoading(false);
            return items;
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error;
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Shop</Text>
        <View style={styles.card}>
          {isLoading
            ? null
            : itemList.map((item, index) => {
                return (
                  <View key={index}>
                    <ShopItemCard item={item} navigation={navigation} />
                    <View style={styles.cost}>
                      <Image
                        source={require("../img_assets/coins-solid.png")}
                        style={styles.coin}
                      />
                      <Text style={styles.num}>{item.itemCost}</Text>
                    </View>
                  </View>
                );
              })}
        </View>
        <Pressable
          style={styles.exitbg}
          onPress={() => navigation.navigate("Scranimal")}
        >
          <Image
            source={require("../img_assets/close.png")}
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
    borderRadius: 100 / 2,
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
