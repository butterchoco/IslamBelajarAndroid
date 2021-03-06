import React, { Fragment, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  MenuItem,
  OverflowMenu,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const MenuIcon = (props) => <Icon {...props} name="more-vertical-outline" />;

const InfoIcon = (props) => <Icon {...props} name="info-outline" />;

const Title = (props) => (
  <View style={styles.titleContainer}>
    <Avatar source={require("../../assets/icon.png")} />
    <Text {...props}>Islam Belajar</Text>
  </View>
);

const Navigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const MenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const AccessoryRight = () => (
    <Fragment>
      <OverflowMenu
        anchor={MenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={InfoIcon} title="About" />
      </OverflowMenu>
    </Fragment>
  );

  return (
    <TopNavigation
      style={styles.container}
      title={<Title style={styles.logoTitle} />}
      accessoryRight={AccessoryRight}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
    paddingTop: 32,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginHorizontal: 16,
  },
  logoTitle: {
    fontWeight: "bold",
  },
});

export default Navigation;
