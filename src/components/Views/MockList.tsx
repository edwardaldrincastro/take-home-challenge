import React, { Fragment } from "react";
import { ScrollView, Text, View, ViewStyle } from "react-native";

import {
  centerHV,
  centerVertical,
  circle,
  colorGray,
  colorOrange,
  flexRow,
  fs15LightBlack,
  fs15LightDarkBlue1,
  fs15MedBlack,
  fs15MedDarkBlue1,
  fs15MedWhite,
  px,
  py,
  sh8,
  sw24,
  sw40,
} from "../../styles";
import { CustomFlexSpacer, CustomSpacer } from "./Spacer";

export const MockItem = () => {
  const listContainer: ViewStyle = { ...px(sw24), ...py(sh8) };

  return (
    <Fragment>
      <View style={listContainer}>
        <View style={{ ...flexRow, ...centerVertical }}>
          <View style={{ ...circle(sw40, colorGray.secondary), ...centerHV }}>
            <Text style={fs15MedBlack}>EC</Text>
          </View>
          <CustomSpacer isHorizontal={true} space={sw24} />
          <View>
            <View style={{ ...flexRow, ...centerVertical, ...py(sh8) }}>
              <Text style={fs15MedBlack}>Transfer </Text>
              <Text style={fs15LightBlack}>to Edward Aldrin</Text>
            </View>
            <Text style={fs15LightBlack}>May 6</Text>
          </View>
          <CustomFlexSpacer />
          <View style={{ ...flexRow, ...centerVertical }}>
            <Text style={fs15LightDarkBlue1}>RM </Text>
            <Text style={fs15MedDarkBlue1}>2,000</Text>
          </View>
        </View>
      </View>
      <View style={listContainer}>
        <View style={{ ...flexRow, ...centerVertical }}>
          <View style={{ ...circle(sw40, colorOrange.primary), ...centerHV }}>
            <Text style={fs15MedWhite}>EC</Text>
          </View>
          <CustomSpacer isHorizontal={true} space={sw24} />
          <View>
            <View style={{ ...flexRow, ...centerVertical, ...py(sh8) }}>
              <Text style={fs15MedBlack}>Transfer </Text>
              <Text style={fs15LightBlack}>to Edward Aldrin</Text>
            </View>
            <Text style={fs15LightBlack}>May 6</Text>
          </View>
          <CustomFlexSpacer />
          <View style={{ ...flexRow, ...centerVertical }}>
            <Text style={fs15LightDarkBlue1}>RM </Text>
            <Text style={fs15MedDarkBlue1}>2,000</Text>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export const MockList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MockItem />
      <MockItem />
      <MockItem />
      <MockItem />
      <MockItem />
      <MockItem />
    </ScrollView>
  );
};
