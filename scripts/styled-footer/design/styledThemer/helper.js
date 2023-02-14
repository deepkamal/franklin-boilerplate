/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2022 Adobe
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
  THEME_IDENTIFIER,
  LIGHT_MODE,
  DARKEST_MODE,
} from '@astock/core-react-spectrum/constants';

/**
 * Helper method to build the theming function to easily config the dark & light mode styles
 *
 * @param {string|Object} lightModeStyles - Any interpolation that's supported in styled-components
 * @param {string|Object} darkModeStyles - Any interpolation that's supported in styled-components
 * @returns {Function}
 */
export const lightAndDarkStyleConfigurator = (lightModeStyles, darkModeStyles) => styledThemer(
  THEME_IDENTIFIER,
  {
    [LIGHT_MODE]: lightModeStyles,
    [DARKEST_MODE]: darkModeStyles,
  },
);
