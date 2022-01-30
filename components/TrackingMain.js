import {
  View,
  ImageBackground,
  Text,
  Pressable,
  Image,
  Button,
} from "react-native";
import { styles } from "../Styles";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

export const TrackingMain = ({ navigation, route }) => {
  const { currUser } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img_assets/garden_generated.jpg")}
        resizeMode="cover"
        style={styles.img}
      >
        <Text>Hello, {currUser.email}!</Text>
        <Pressable
          title="Track Water"
          onPress={() => navigation.navigate("TrackingWater")}
        >
          <Text>Track Water</Text>
        </Pressable>
        <Pressable
          title="Track Food"
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Track Food</Text>
        </Pressable>
        <Pressable
          title="Scranimal"
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Scranimal</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
