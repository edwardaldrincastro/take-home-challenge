import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

import { SafeAreaPage } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <SafeAreaPage
      barStyle="light-content"
      bottomBackgroundColor="red"
      headerTitle="Test"
      topBackgroundColor="red">
        <View />
    </SafeAreaPage>,
  );
});