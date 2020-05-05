import React from "react";
import renderer from "react-test-renderer";

import { CustomSpacer } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <CustomSpacer isHorizontal={true} space={8}/>
  );
});
