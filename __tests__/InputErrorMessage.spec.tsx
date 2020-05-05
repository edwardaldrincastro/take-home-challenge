import React from "react";
import renderer from "react-test-renderer";

import { InputErrorMessage } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <InputErrorMessage
    errorMessage="Test"/>
)});