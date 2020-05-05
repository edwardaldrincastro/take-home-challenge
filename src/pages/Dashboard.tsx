import { StackNavigationProp } from '@react-navigation/stack';
import React, { Fragment, useEffect } from 'react';
import { Text, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

import { CustomFlexSpacer, CustomFooter, CustomSpacer, MockList, SafeAreaPage } from '../components';
import { useStateData } from '../contexts';
import { IcoMoon } from '../icons';
import { getData } from '../integrations';
import {
  centerVertical,
  colorOrange,
  colorWhite,
  flexRow,
  fs15LightWhite,
  fs15MedWhite,
  fs40MedWhite,
  px,
  sh24,
  sh4,
  sh40,
  sh56,
  sw16,
  sw24,
} from '../styles';

interface DashboardProps {
  navigation: StackNavigationProp<RootNavigatorType>;
}

export const DashboardPage = ({ navigation }: DashboardProps) => {
  const { stateData, setStateData } = useStateData();

  const getUser = async () => {
    const currentUser = await getData('user');
    setStateData({ user: currentUser });
  };

  const handleOnPressSettings = () => {
    navigation.navigate('Settings');
  };

  const footer = [{ icon: 'home' }, { icon: 'search' }];
  const name = stateData.user !== undefined ? stateData.user.givenName : '';
  const container: ViewStyle = { ...px(sw24), backgroundColor: colorOrange.primary };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUser();
    });

    return unsubscribe;
  }, [stateData.user === undefined]);

  return (
    <Fragment>
      <SafeAreaPage backButton={true} noHeader={true} barStyle="dark-content" topBackgroundColor={colorOrange.primary}>
        <View style={container}>
          <CustomSpacer space={sh24} />
          <View style={{ ...flexRow, ...centerVertical }}>
            <Text style={fs15LightWhite}>Welcome back, </Text>
            <Text style={fs15MedWhite}>{name}!</Text>
            <CustomFlexSpacer />
            <TouchableWithoutFeedback onPress={handleOnPressSettings}>
              <IcoMoon color={colorWhite.primary} name="action-menu-horizontal" size={30} />
            </TouchableWithoutFeedback>
          </View>
          <CustomSpacer space={sh56} />
          <Text style={fs15MedWhite}>Available Balance</Text>
          <CustomSpacer space={sh4} />
          <View style={{ ...flexRow }}>
            <View>
              <CustomSpacer space={6} />
              <Text style={fs15LightWhite}>MYR</Text>
            </View>
            <CustomSpacer isHorizontal={true} space={sw16} />
            <Text style={fs40MedWhite}>77,827</Text>
          </View>
          <CustomSpacer space={sh4} />
          <Text style={fs15MedWhite}>4% MYR 323.31 earned interest</Text>
          <CustomSpacer space={sh40} />
        </View>
        <MockList />
        <CustomFlexSpacer />
        <CustomFooter activeIndex={0} items={footer} />
      </SafeAreaPage>
    </Fragment>
  );
};
