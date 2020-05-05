import React from "react";
import renderer from "react-test-renderer";

import { CustomButton } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <CustomButton text="Test" onPress={() => {}}/>
  );
});
