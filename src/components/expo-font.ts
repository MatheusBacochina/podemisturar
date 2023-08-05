import { Font } from "expo";

export const loadFonts = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    // Add other font variants here, if needed
  });
};
