import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Styles from "./src/styles/mainStyles";
import Nav from "./src/components/nav";
import AlertMsg from "./src/components/AlertMsg";
export default function App() {
  const [fontsLoaded] = useFonts({
    Bold: require("./assets/fonts/Montserrat-Bold.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={Styles.container}>
      <Nav />
      <AlertMsg></AlertMsg>
    </View>
  );
}
