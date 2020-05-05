import React from "react";
import renderer from "react-test-renderer";

import { CustomFooter } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <CustomFooter activeIndex={0} items={[{ icon: 'home' }, { icon: 'search' }]}/>
  );
});
