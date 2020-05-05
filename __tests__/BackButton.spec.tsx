import React from "react";
import renderer from "react-test-renderer";

import { BackButton } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <BackButton handleBackButton={() => {}}/>
  );
});
