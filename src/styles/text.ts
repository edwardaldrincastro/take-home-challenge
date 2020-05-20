import { TextStyle } from "react-native";

import { RobotoLight, RobotoMedium } from "../constants";
import { colorBlack, colorDarkBlue, colorOrange, colorRed, colorWhite } from "./colors";
import { sh12, sh15, sh16, sh18, sh24, sh40 } from "./sizes";

export const fsAlignCenter: TextStyle = { textAlign: "center" };
export const fsCapitalize: TextStyle = {
  textTransform: "capitalize",
};
export const fsUnderline: TextStyle = {
  textDecorationLine: "underline",
};

export const fs12MedBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoMedium,
  fontSize: sh12,
};

export const fs12MedDarkBlue1: TextStyle = {
  color: colorDarkBlue.primary,
  fontFamily: RobotoMedium,
  fontSize: sh12,
};

export const fs15LightBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoLight,
  fontSize: sh15,
};

export const fs15LightWhite: TextStyle = {
  color: colorWhite.primary,
  fontFamily: RobotoLight,
  fontSize: sh15,
};

export const fs15LightDarkBlue1: TextStyle = {
  color: colorDarkBlue.primary,
  fontFamily: RobotoLight,
  fontSize: sh15,
};

export const fs15MedDarkBlue1: TextStyle = {
  color: colorDarkBlue.primary,
  fontFamily: RobotoMedium,
  fontSize: sh15,
};

export const fs15MedBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoMedium,
  fontSize: sh15,
};

export const fs15MedWhite: TextStyle = {
  color: colorWhite.primary,
  fontFamily: RobotoMedium,
  fontSize: sh15,
};

export const fs16MedBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoMedium,
  fontSize: sh16,
};

export const fs16MedOrange: TextStyle = {
  color: colorOrange.primary,
  fontFamily: RobotoMedium,
  fontSize: sh16,
};

export const fs16MedRed: TextStyle = {
  color: colorRed.primary,
  fontFamily: RobotoMedium,
  fontSize: sh16,
};

export const fs16MedWhite: TextStyle = {
  color: colorWhite.primary,
  fontFamily: RobotoMedium,
  fontSize: sh16,
};

export const fs18MedBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoMedium,
  fontSize: sh18,
};

export const fs18MedOrange: TextStyle = {
  color: colorOrange.primary,
  fontFamily: RobotoMedium,
  fontSize: sh18,
};

export const fs24MedBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoMedium,
  fontSize: sh24,
};

export const fs24LightBlack: TextStyle = {
  color: colorBlack.primary,
  fontFamily: RobotoLight,
  fontSize: sh24,
};

export const fs40MedWhite: TextStyle = {
  color: colorWhite.primary,
  fontFamily: RobotoMedium,
  fontSize: sh40,
};
