import React from "react";
import { View } from "react-native";
import renderer from "react-test-renderer";

import { ContentPage } from "../src/components";

it('renders correctly', () => {
  renderer.create(
    <ContentPage
      buttonDisabled={true} 
      buttonText="Test"
      handleOnPressButton={() => {}} 
      handleOnPressTextLink={() => {}} 
      heading="Test"
      noScroll={true}
      spaceToBottom={0} 
      spaceToButton={0} 
      spaceToTop={0} 
      style={{backgroundColor: "red"}} 
      subheading="Test" 
      subtitle="Test"
      textLink="Test">
        <View />
    </ContentPage>,
  );
});