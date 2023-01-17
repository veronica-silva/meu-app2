import { StatusBar } from "expo-status-bar";
import { React, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BlurView } from "expo-blur";

const uri =
  "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";

export default function App() {
  const text = "Hello world!";
  return (
    <View style={styles.container}>
      <Image style={[StyleSheet.absoluteFill, styles.image]} source={{ uri }} />

      <BlurView intensity={80} tint="light" style={styles.blurContainer}>
        <Text style={styles.text}>{text}</Text>
      </BlurView>
      <BlurView intensity={90} style={styles.blurContainer}>
        <Text style={styles.text}>{text}</Text>
      </BlurView>
      <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
        <Text style={[styles.text, { color: "#fff" }]}>{text}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  text: {
    fontSize: 68,
  },
  blurContainer: {},
});
