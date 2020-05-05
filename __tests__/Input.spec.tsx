import React from "react";
import renderer from "react-test-renderer";

import { CustomTextInput } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <CustomTextInput
    bottomText="Test"
    errorMessage="Test"
    errorUnderline={true}
    label="Test"
    onPressBottomText={() => {}}
    onPressLabel={() => {}}/>
)});