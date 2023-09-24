import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import logo3 from "../assets/Logo-3.png";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Screen3() {
  const navigation = useNavigation();
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
  const arrowLeftPosition = isPortrait ? "" : styles.landscapeLeftArrow;
  const textPosition = isPortrait
    ? styles.textPortraitContainer
    : styles.textLandscapeContainer;

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <View style={[styles.container, commonContainerStyle]}>
      <View style={commonGridStyle}>
        <View style={[styles.textContainer, textPosition]}>
          <TouchableOpacity
            style={[styles.arrowLeftContainer, arrowLeftPosition]}
            onPress={() => navigation.navigate("Screen2")}
          >
            <Feather name="chevron-left" size={50} />
          </TouchableOpacity>
          <Text style={styles.heading}>Become a Lanlee Customer?</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet {"\n"}consectetur adipisicing elit.
          </Text>
          <TouchableOpacity onPress={handleButtonClick}>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Learn More</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          {isPortrait ? (
            <Image source={logo3} style={styles.logo} resizeMode="cover" />
          ) : (
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={logo3}
                style={styles.landscapeLogo}
                resizeMode="cover"
              />
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}

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
  },
  textPortraitContainer: {
    paddingLeft: 20,
  },
  textLandscapeContainer: {
    paddingLeft: 50,
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
  buttonContainer: {
    alignSelf: "flex-start",
    marginTop: 10,
    width: 150,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#F78FB3",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
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
  landscapeRightArrow: {
    left: "160%",
    top: "45%",
    transform: [{ translateX: 100 }],
  },
  arrowLeftContainer: {
    position: "absolute",
    top: "85%",
  },
  landscapeLeftArrow: {
    top: "45%",
  },
});
