import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

import { BasicModal } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <BasicModal
      Content={() => {
        return <View />;
      }}
      Controller={<View />}>
        <View />
    </BasicModal>,
  );
});
