import React from "react";
import renderer from "react-test-renderer";

import { TextSpaceArea } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <TextSpaceArea space={8} text="Test"/>
  );
});
