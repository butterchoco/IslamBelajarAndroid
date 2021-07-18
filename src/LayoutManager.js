import React from "react";
import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

import Navigation from "./components/Navigation";

const LayoutManager = () => {
  return (
    <Layout style={styles.container}>
      <Navigation />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff",
  },
});

export default LayoutManager;
