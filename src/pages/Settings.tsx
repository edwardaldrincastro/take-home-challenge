import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

import { ContentPage, ListItem, SafeAreaPage } from "../components";
import { useStateData } from "../contexts";

interface SettingsPageProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const SettingsPage = ({ navigation }: SettingsPageProps) => {
  const { clearStateData } = useStateData();
  const handlePressLogOut = () => {
    // Mock logout
    clearStateData();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      }),
    );
  };
  const handlePressAccount = () => {
    navigation.navigate("Account");
  };

  return (
    <SafeAreaPage backButton={true} headerTitle="Settings">
      <ContentPage spaceToTop={0}>
        <ListItem leftIcon="person" rightIcon="caret-right" text="Account Information" onPress={handlePressAccount} />
        <ListItem leftIcon="log-out" rightIcon="caret-right" text="Log Out" onPress={handlePressLogOut} />
      </ContentPage>
    </SafeAreaPage>
  );
};
