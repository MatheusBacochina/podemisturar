import { StyleSheet, Text, View, ImageBackground } from "react-native";
import styles from "../styles/mainStyles";
export default function Nav() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.bg}
      source={require("../images/produtosbg.svg")}
    ></ImageBackground>
  );
}
