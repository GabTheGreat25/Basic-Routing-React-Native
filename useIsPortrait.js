import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export default function useIsPortrait() {
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

  return isPortrait;
}
