import React from "react";
import renderer from "react-test-renderer";

import { LinkTextPage } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <LinkTextPage space={10} textLink="Test" textLinkPress={() => {}}/>
  );
});
