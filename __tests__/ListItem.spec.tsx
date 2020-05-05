import React from "react";
import renderer from "react-test-renderer";

import { ListItem } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <ListItem text="Test" onPress={() => {}}/>
  );
});
