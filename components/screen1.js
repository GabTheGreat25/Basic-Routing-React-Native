import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import logo1 from "../assets/Logo-1.png";
import { Feather } from "@expo/vector-icons";

const Screen1 = () => {
  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get("window").height > Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setIsPortrait(
        Dimensions.get("window").height > Dimensions.get("window").width
      );
    };

    const dimensionListener = Dimensions.addEventListener(
      "change",
      updateLayout
    );

    // Cleanup function to remove the event listener when unmounting
    return () => {
      dimensionListener.remove();
    };
  }, []);

  const commonContainerStyle = isPortrait
    ? styles.portraitContainer
    : styles.landscapeContainer;
  const commonGridStyle = isPortrait
    ? styles.portraitGrid
    : styles.landscapeGrid;
  const arrowPosition = isPortrait
    ? styles.portraitArrow
    : styles.landscapeArrow;

  return (
    <View style={[styles.container, commonContainerStyle]}>
      <View style={commonGridStyle}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Looking for a salon?</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet {"\n"}consectetur adipisicing elit.
          </Text>
          <View style={[styles.arrowContainer, arrowPosition]}>
            <Feather name="chevron-right" size={50} />
          </View>
        </View>
        <View style={styles.imageContainer}>
          {isPortrait ? (
            <Image source={logo1} style={styles.logo} resizeMode="cover" />
          ) : (
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={logo1}
                style={styles.landscapeLogo}
                resizeMode="cover"
              />
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  portraitContainer: {
    flexDirection: "column",
  },
  landscapeContainer: {
    flexDirection: "row",
  },
  portraitGrid: {
    flex: 1,
    flexDirection: "column",
  },
  landscapeGrid: {
    flex: 1,
    flexDirection: "row",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "start",
    paddingLeft: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 20,
    fontWeight: "300",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  landscapeLogo: {
    width: "100%",
    height: "100%",
  },
  arrowContainer: {
    position: "absolute",
    top: "85%",
  },
  portraitArrow: {
    left: "75%",
    transform: [{ translateX: 50 }],
  },
  landscapeArrow: {
    left: "160%",
    top: "45%",
    transform: [{ translateX: 100 }],
  },
});

export default Screen1;
