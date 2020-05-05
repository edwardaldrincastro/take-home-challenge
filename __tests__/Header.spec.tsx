import React from "react";
import renderer from "react-test-renderer";

import { CustomHeader } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <CustomHeader headerTitle="Test"/>
  );
});
