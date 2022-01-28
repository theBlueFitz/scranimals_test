import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import Popover from "react-native-popover-view";
import { useState, useContext, useEffect } from "react";
import * as RouteNavigation from "../routeNavigation";
import { UserContext } from "../contexts/User";

export const NavMenu = () => {
  const [popover, setPopover] = useState(false);
  const { currUser, setCurrUser, isLoggedIn, setIsLoggedIn } =
    useContext(UserContext);
  const [wallet, setWallet] = useState(currUser.wallet);
  useEffect(() => {
    if (currUser) {
      setWallet(currUser.wallet);
    }
  }, [currUser.wallet, wallet]);
  return (
    <>
      {isLoggedIn && (
        <View style={styles.container}>
          <View style={styles.walletWrapper}>
            <Image
              resizeMode="contain"
              source={require("../img_assets/wallet-solid.png")}
              style={styles.wallet}
            />
            <Text style={styles.walletNum}>{wallet}</Text>
          </View>
          <Image
            source={require("../img_assets/logo_app.png")}
            style={styles.logo}
          />
          <Pressable
            onPress={() => {
              setPopover(true);
              console.log("clicked once");
            }}
          >
            <Image
              source={require("../img_assets/bars-solid.png")}
              style={styles.hamburger}
            />
          </Pressable>
          <Popover
            isVisible={popover}
            onRequestClose={() => {
              setPopover(false);
            }}
            popoverStyle={{ backgroundColor: 'transparent' }}
          >
            <View style={styles.popoverWrapper}>
              <View
                style={styles.popover}
                onPress={() => {
                  if (popover === false) {
                    setPopover(true);
                  } else if (popover === true) {
                    setPopover(false);
                  }
                }}
              >
                <Pressable
                  style={styles.navButton}
                  onPress={() => {
                    setPopover(false);
                    RouteNavigation.navigate("Scranimal");
                  }}
                >
                  <Text style={styles.navText}>My Scranimal</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require("../img_assets/paw-solid.png")}
                  />
                </Pressable>
                <Pressable style={styles.navButton}>
                  <Text
                    style={styles.navText}
                    onPress={() => {
                      setPopover(false);
                      RouteNavigation.navigate("TrackingWater");
                    }}
                  >
                    Track Water
                  </Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require("../img_assets/tint-solid.png")}
                  />
                </Pressable>
                <Pressable style={styles.navButton}>
                  <Text
                    style={styles.navText}
                    onPress={() => {
                      setPopover(false);
                      RouteNavigation.navigate("Shop");
                    }}
                  >
                    Pet Shop
                  </Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require("../img_assets/shopping-cart-solid.png")}
                  />
                </Pressable>
                <Pressable
                  style={styles.navButton}
                  onPress={() => {
                    setPopover(false);
                    RouteNavigation.navigate("Inventory");
                  }}
                >
                  <Text style={styles.navText}>My Inventory</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require("../img_assets/shopping-bag-solid.png")}
                  />
                </Pressable>
                <Pressable
                  style={styles.navButton}
                  onPress={() => {
                    setPopover(false);
                    RouteNavigation.navigate("Diary");
                  }}
                >
                  <Text style={styles.navText}>My Diary</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require("../img_assets/book-solid.png")}
                  />
                </Pressable>
                <Pressable
                  style={styles.navButton}
                  onPress={() => {
                    setPopover(false);
                    RouteNavigation.navigate("Settings");
                  }}
                >
                  <Text style={styles.navText}>Settings</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={require("../img_assets/cogs-solid.png")}
                  />
                </Pressable>
                <Pressable
                  style={styles.navButton}
                  onPress={() => {
                    setPopover(false);
                    setCurrUser({});
                    setIsLoggedIn(false);
                    RouteNavigation.navigate("Home");
                  }}
                >
                  <Text style={styles.logoutText}>Logout</Text>
                  <Image
                    resizeMode="contain"
                    style={styles.icon}
                    source={{uri: "https://i.ibb.co/LnmfJ2s/sign-out-alt-solid.png"}}
                  />
                </Pressable>
              </View>
              <Pressable
                style={styles.exitbg}
                onPress={() => {
                  setPopover(false);
                }}
              >
                <Image
                  source={require("../img_assets/close.png")}
                  style={styles.exit}
                />
              </Pressable>
            </View>
          </Popover>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: "#3BCEAC",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 50,
  },
  wallet: {
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    width: 40,
  },
  walletNum: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  logo: {
    width: 44,
    height: 40,
  },

  popover: {
    backgroundColor: "#3BCEAC",
    width: 300,
  },
  logoutText: {
    color: "#EE4266",
    fontSize: 25,
    textAlignVertical: "center",
    marginTop: 4,
  },
  navButton: {
    height: 60,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
  },
  navText: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 4,
  },
  icon: {
    height: 40,
    width: 40,
  },
  exit: {
    height: 65,
    width: 65,
    alignSelf: "center",
  },
  exitbg: {
    height: 60,
    width: 60,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 100 / 2,
  },

  hamburger: {
    height: 40,
    width: 40,
    marginRight: 15,
  },
  popoverWrapper: {
    alignItems: 'center',
  }
});
