import { Dimensions } from 'react-native';

import { colorGray, colorRed } from './colors';

export const alignSelfStart = { alignSelf: 'flex-start' } as const;
export const centerHorizontal = { justifyContent: 'center' } as const;
export const centerVertical = { alignItems: 'center' } as const;
export const centerHV = { ...centerHorizontal, ...centerVertical } as const;
export const spaceBetweenHorizontal = { justifyContent: 'space-between' } as const;
export const spaceBetweenVertical = { alignContent: 'space-between' } as const;
export const spaceBetweenHV = { ...spaceBetweenHorizontal, ...spaceBetweenVertical } as const;
export const spaceAroundHorizontal = { justifyContent: 'space-around' } as const;
export const spaceAroundVertical = { alignContent: 'space-around' } as const;
export const spaceAroundHV = { ...spaceAroundHorizontal, ...spaceAroundVertical } as const;

export const flexChild = { flex: 1 } as const;
export const flexGrow = { flexGrow: 1 } as const;
export const flexNone = { flex: 0 } as const;

export const flexContainer = { display: 'flex' } as const;
export const flexCol = { ...flexContainer, flexDirection: 'column' } as const;
export const flexRow = { ...flexContainer, flexDirection: 'row' } as const;
export const flexColCC = { ...flexCol, ...centerHV } as const;
export const flexRowCC = { ...flexRow, ...centerHV } as const;
export const flexColSbSb = { ...flexCol, ...spaceBetweenHV } as const;
export const flexRowSbSb = { ...flexRow, ...spaceBetweenHV } as const;
export const flexColSaSa = { ...flexCol, ...spaceAroundHV } as const;
export const flexRowSaSa = { ...flexRow, ...spaceAroundHV } as const;
export const fullHeight = { height: '100%' } as const;
export const fullWidth = { width: '100%' } as const;
export const fullHW = { ...fullHeight, ...fullWidth } as const;
export const borderBottomGray1 = { borderBottomWidth: 1, borderBottomColor: colorGray.secondary_8 } as const;
export const borderBottomGray2 = { borderBottomWidth: 1, borderBottomColor: colorGray.secondary_5 } as const;
export const borderBottomGray3 = { borderBottomWidth: 1, borderBottomColor: colorGray._3 } as const;
export const borderBottomRed = { borderBottomWidth: 1, borderBottomColor: colorRed.primary } as const;
export const noMargin = { margin: 0 } as const;
export const noPadding = { padding: 0 } as const;

export const circle = (height: number, backgroundColor?: string) => ({
  height: height,
  width: height,
  borderRadius: height / 2,
  backgroundColor: backgroundColor,
});

export const circleBorder = (height: number, borderWidth: number, borderColor: string, backgroundColor?: string) => ({
  ...circle(height, backgroundColor),
  borderWidth: borderWidth,
  borderColor: borderColor,
});

export const px = (points: number) =>
  ({
    paddingLeft: points,
    paddingRight: points,
  } as const);

export const py = (points: number) =>
  ({
    paddingTop: points,
    paddingBottom: points,
  } as const);

export interface DeviceSizeType {
  WIDTH: number;
  HEIGHT: number;
}

export const DEVICE: {
  WINDOW: DeviceSizeType;
  SCREEN: DeviceSizeType;
} = {
  WINDOW: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  SCREEN: {
    WIDTH: Dimensions.get('screen').width,
    HEIGHT: Dimensions.get('screen').height,
  },
};
