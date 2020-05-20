import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

import { ContentPage, SafeAreaPage } from "../components";

interface SignUpPageProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const SignUpPage = ({ navigation }: SignUpPageProps) => {
  const handlePressNext = () => {
    navigation?.navigate("Login");
  };
  return (
    <SafeAreaPage backButton={true} headerTitle="Sign Up">
      <ContentPage
        heading="Heading"
        subheading="subheading"
        subtitle="subtitle"
        buttonText="Next"
        handleOnPressButton={handlePressNext}
        textLink="Text Link"
        handleOnPressTextLink={handlePressNext}
      />
    </SafeAreaPage>
  );
};
