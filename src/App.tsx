import React, { Fragment } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Loader } from "./components";
import {
  createRegistrationData,
  createStateData,
  IRegistrationDataContext,
  IStateDataContext,
  RegistrationDataContext,
  StateDataContext,
} from "./contexts";
import { RootNavigator } from "./Navigator";
import { flexChild } from "./styles";

export const App = () => {
  const registrationData: IRegistrationDataContext = createRegistrationData();
  const stateData: IStateDataContext = createStateData();
  const loadingVisible = stateData.stateData.loading;

  return (
    <Fragment>
      <StateDataContext.Provider value={stateData}>
        <RegistrationDataContext.Provider value={registrationData}>
          <SafeAreaProvider>
            {Platform.select({
              android: <RootNavigator />,
              ios: (
                <KeyboardAvoidingView behavior="padding" style={flexChild}>
                  <RootNavigator />
                </KeyboardAvoidingView>
              ),
            })}
            <Loader visible={loadingVisible} />
          </SafeAreaProvider>
        </RegistrationDataContext.Provider>
      </StateDataContext.Provider>
    </Fragment>
  );
};
