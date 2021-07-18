import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Layout, Text, ViewPager } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";

export const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Layout style={styles.container}>
      <Text style={styles.title} category="h6">
        Main
      </Text>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <Layout style={styles.tab}>
          <LinearGradient
            colors={["#3AB878", "#12B6D8"]}
            style={styles.tabWrapper}
          >
            <Text style={styles.tabTitle} category="s1">
              USERS
            </Text>
          </LinearGradient>
        </Layout>
      </ViewPager>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  title: {
    color: "#222",
    marginHorizontal: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  tab: {
    marginHorizontal: 16,
    height: 128,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
  },
  tabWrapper: {
    height: "100%",
    width: "100%",
    padding: 8,
    borderRadius: 8,
  },
  tabTitle: {
    color: "#222",
    fontWeight: "bold",
  },
});

export default Carousel;
