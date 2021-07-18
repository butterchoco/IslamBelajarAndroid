import { StatusBar } from "expo-status-bar";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";

import LayoutManager from "./src/LayoutManager";

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
