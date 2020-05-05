import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { Fragment } from "react";
import { useState } from "react";

import { ContentPage, CustomSpacer, CustomTextInput, SafeAreaPage } from "../components";
import { useStateData } from "../contexts";
import { AxiosInstance, SERVICES, storeData } from "../integrations";
import { sh40, sh8 } from "../styles";
import { AlertDialog } from "../utils";

interface LoginPageProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const LoginPage = ({ navigation }: LoginPageProps) => {
  const {setStateData} = useStateData();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [inputEmail, setInputEmail] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

 const showLoader = () => {
   setStateData({loading: true})
 }
 
 const hideLoader = () => {
   setStateData({loading: false})
 }
  
  const handlePressLogin = async () => {
    // Mock login without any security and enhancement
    showLoader()
    const endpoint = `${SERVICES.USERS}?orderBy="email"&equalTo="${inputEmail}"`;
    const res = await AxiosInstance.get(endpoint);
    if (res.status === 200) {
      const key = Object.keys(res.data);
      const id = { id: key[0] };
      const data = res.data[key[0]];
      if (data !== undefined && inputPassword === data.password) {
        await storeData('user', { ...data, ...id });
        hideLoader()
        setTimeout(() => {
          return navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            }),
          );
        }, 500);
      } else {
        return AlertDialog(`The email or password that you've entered is incorrect.`, hideLoader)
      }
    } else {
      return AlertDialog('Error on Login', hideLoader)
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const showPasswordText = showPassword ? 'Show Password' : 'Hide Password';
  const buttonDisabled = inputEmail === '' || inputPassword === '';

  return (
    <Fragment>
    <SafeAreaPage backButton={true}>
      <ContentPage
        buttonDisabled={buttonDisabled}
        buttonText="Log In"
        handleOnPressButton={handlePressLogin}
        heading="Login now,"
        subtitle="Please login to continue using our app.">
        <CustomSpacer space={sh40} />
        <CustomTextInput
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setInputEmail}
          placeholder="Email"
          textContentType="emailAddress"
          value={inputEmail}
        />
        <CustomSpacer space={sh8} />
        <CustomTextInput
          bottomText={showPasswordText}
          onChangeText={setInputPassword}
          onPressBottomText={handleShowPassword}
          placeholder="Password"
          secureTextEntry={showPassword}
          textContentType="password"
          value={inputPassword}
        />
      </ContentPage>
    </SafeAreaPage>
    {/* <Loader visible={true}/> */}
    </Fragment>
  );
};
