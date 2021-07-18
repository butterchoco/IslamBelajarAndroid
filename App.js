import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Button,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StyleSheet } from "react-native";
import { default as theme } from "./theme.json";

import Navigation from "./src/components/Navigation";

const LayoutManager = () => {
  return (
    <Layout style={styles.container}>
      <Navigation />
    </Layout>
  );
};

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar style="auto" />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <LayoutManager />
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff",
  },
});
