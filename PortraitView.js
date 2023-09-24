import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PortraitView({
  heading,
  paragraph,
  content,
  showLeftArrow,
  showRightArrow,
  showButton,
  onLeftArrowPress,
  onRightArrowPress,
  onButtonClick,
  logoSource,
  isPortrait,
}) {
  const commonContainerStyle = isPortrait
    ? styles.portraitContainer
    : styles.landscapeContainer;
  const commonGridStyle = isPortrait
    ? styles.portraitGrid
    : styles.landscapeGrid;
  const arrowRightPosition = isPortrait
    ? styles.portraitRightArrow
    : styles.landscapeRightArrow;
  const arrowLeftPosition = isPortrait ? "" : styles.landscapeLeftArrow;
  const textPosition = isPortrait
    ? styles.textPortraitContainer
    : styles.textLandscapeContainer;

  return (
    <View style={[styles.container, commonContainerStyle]}>
      <View style={commonGridStyle}>
        <View style={[styles.textContainer, textPosition]}>
          {showLeftArrow && (
            <TouchableOpacity
              style={[styles.arrowLeftContainer, arrowLeftPosition]}
              onPress={onLeftArrowPress}
            >
              <Feather name="chevron-left" size={50} />
            </TouchableOpacity>
          )}
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.paragraph}>{paragraph}</Text>
          {showButton && (
            <TouchableOpacity onPress={onButtonClick}>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{content}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          {showRightArrow && (
            <TouchableOpacity
              style={[styles.arrowRightContainer, arrowRightPosition]}
              onPress={onRightArrowPress}
            >
              <Feather name="chevron-right" size={50} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.imageContainer}>
          {isPortrait ? (
            <Image source={logoSource} style={styles.logo} resizeMode="cover" />
          ) : (
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={logoSource}
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
    zIndex: -1,
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
  arrowRightContainer: {
    position: "absolute",
    top: "85%",
  },
  portraitRightArrow: {
    left: "75%",
    transform: [{ translateX: 50 }],
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
