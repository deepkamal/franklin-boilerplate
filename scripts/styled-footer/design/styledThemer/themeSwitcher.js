/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2021 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/

import styledThemer from 'src/design/styledThemer/styledThemer';
import {
  DARKEST_MODE,
  LIGHT_MODE,
  THEME_IDENTIFIER,
} from '@astock/core-react-spectrum/constants';
import * as lightThemePalette from 'src/design/spectrumDna/colorsLight';
import * as darkestThemePalette from 'src/design/spectrumDna/colorsDarkest';

const themeSwitcherExportCollections = Object.freeze([
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_50', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_50' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_75', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_75' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_100', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_100' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_200', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_200' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_300', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_300' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_400', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_400' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_500', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_500' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_600', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_600' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_700', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_700' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_800', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_800' },
  { key: 'THEME_SWITCH_SP_COLOR_GRAY_900', value: '{{THEME}}_SPECTRUM_COLOR_GRAY_900' },
  { key: 'THEME_SWITCH_SP_COLOR_BLUE_400', value: '{{THEME}}_SPECTRUM_COLOR_BLUE_400' },
  { key: 'THEME_SWITCH_SP_COLOR_BLUE_500', value: '{{THEME}}_SPECTRUM_COLOR_BLUE_500' },
  { key: 'THEME_SWITCH_SP_COLOR_BLUE_600', value: '{{THEME}}_SPECTRUM_COLOR_BLUE_600' },
  { key: 'THEME_SWITCH_SP_COLOR_BLUE_700', value: '{{THEME}}_SPECTRUM_COLOR_BLUE_700' },
  { key: 'THEME_SWITCH_SP_COLOR_RED_400', value: '{{THEME}}_SPECTRUM_COLOR_RED_400' },
  { key: 'THEME_SWITCH_SP_COLOR_RED_500', value: '{{THEME}}_SPECTRUM_COLOR_RED_500' },
  { key: 'THEME_SWITCH_SP_COLOR_RED_600', value: '{{THEME}}_SPECTRUM_COLOR_RED_600' },
  { key: 'THEME_SWITCH_SP_COLOR_RED_700', value: '{{THEME}}_SPECTRUM_COLOR_RED_700' },
  { key: 'THEME_SWITCH_SP_COLOR_ORANGE_400', value: '{{THEME}}_SPECTRUM_COLOR_ORANGE_400' },
  { key: 'THEME_SWITCH_SP_COLOR_ORANGE_500', value: '{{THEME}}_SPECTRUM_COLOR_ORANGE_500' },
  { key: 'THEME_SWITCH_SP_COLOR_ORANGE_600', value: '{{THEME}}_SPECTRUM_COLOR_ORANGE_600' },
  { key: 'THEME_SWITCH_SP_COLOR_ORANGE_700', value: '{{THEME}}_SPECTRUM_COLOR_ORANGE_700' },
  { key: 'THEME_SWITCH_SP_COLOR_GREEN_400', value: '{{THEME}}_SPECTRUM_COLOR_GREEN_400' },
  { key: 'THEME_SWITCH_SP_COLOR_GREEN_500', value: '{{THEME}}_SPECTRUM_COLOR_GREEN_500' },
  { key: 'THEME_SWITCH_SP_COLOR_GREEN_600', value: '{{THEME}}_SPECTRUM_COLOR_GREEN_600' },
  { key: 'THEME_SWITCH_SP_COLOR_GREEN_700', value: '{{THEME}}_SPECTRUM_COLOR_GREEN_700' },
]);

/**
 * Converts a color to a color that respects the current theme. One-shot export for all mappers
 * @returns {}
 */
export const themeSwitcher = themeSwitcherExportCollections.reduce(
  (obj, { key, value }) => {
    const updatedObj = obj;
    updatedObj[key] = styledThemer(
      THEME_IDENTIFIER,
      {
        [LIGHT_MODE]: lightThemePalette[value.replace(/{{THEME}}/, LIGHT_MODE.toUpperCase())],
        [DARKEST_MODE]: darkestThemePalette[value.replace(/{{THEME}}/, DARKEST_MODE.toUpperCase())],
      },
      LIGHT_MODE
    );
    return updatedObj;
  },
  {} // initial value for reducer of an empty object
);
