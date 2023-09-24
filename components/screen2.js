import React from "react";
import PortraitView from "../PortraitView";
import useIsPortrait from "../useIsPortrait";
import logo2 from "../assets/Logo-2.png";
import { useNavigation } from "@react-navigation/native";

export default function Screen2() {
  const navigation = useNavigation();
  const isPortrait = useIsPortrait();

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <PortraitView
      heading="Become a Lanlee Employee?"
      paragraph={`Lorem ipsum dolor sit amet \nconsectetur adipisicing elit.`}
      content="Learn More"
      showLeftArrow={true}
      showRightArrow={true}
      showButton={true}
      onLeftArrowPress={() => navigation.navigate("Screen1")}
      onRightArrowPress={() => navigation.navigate("Screen3")}
      onButtonClick={handleButtonClick}
      logoSource={logo2}
      isPortrait={isPortrait}
    />
  );
}
