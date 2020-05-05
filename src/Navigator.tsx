import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import {
  AccountPage,
  DashboardPage,
  LoginPage,
  RegisterEmailPage,
  RegisterIDCardPage,
  RegisterNamePage,
  RegisterPasswordPage,
  SettingsPage,
  SignUpPage,
  SummaryPage,
  WelcomePage,
} from './pages';

const { Navigator, Screen } = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Welcome" headerMode="none">
        <Screen name="Account" component={AccountPage} />
        <Screen name="Dashboard" component={DashboardPage} />
        <Screen name="Login" component={LoginPage} />
        <Screen name="RegisterEmail" component={RegisterEmailPage} />
        <Screen name="RegisterIDCard" component={RegisterIDCardPage} />
        <Screen name="RegisterName" component={RegisterNamePage} />
        <Screen name="RegisterPassword" component={RegisterPasswordPage} />
        <Screen name="Settings" component={SettingsPage} />
        <Screen name="SignUp" component={SignUpPage} />
        <Screen name="Summary" component={SummaryPage} />
        <Screen name="Welcome" component={WelcomePage} />
      </Navigator>
    </NavigationContainer>
  );
};
