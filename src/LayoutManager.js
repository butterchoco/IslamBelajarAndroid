import React from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

import Navigation from "./components/Navigation";
import Homescreen from "./screens/Homescreen";

const LayoutManager = () => {
  return (
    <Layout style={styles.container}>
      <Navigation />
      <Homescreen />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default LayoutManager;
