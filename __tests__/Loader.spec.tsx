import React from "react";
import renderer from "react-test-renderer";

import { Loader } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <Loader visible={true}/>
  );
});
