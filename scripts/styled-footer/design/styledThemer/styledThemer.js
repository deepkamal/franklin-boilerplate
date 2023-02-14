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

import { LIGHT_MODE } from '@astock/core-react-spectrum/constants';

// Borrowed the code from styled-theming & added the fallback approach if there is no theme providers on top.
// Idea is to make our components work without any theme providers on top by defaulting to "light" theme
// Refer: https://github.com/styled-components/styled-theming

/**
 * Pulls the current theme from the props and uses that to get the correct color value
 * @param {string} name
 * @param {object} props
 * @param {array} values List of possible values for the current dimension
 * @param {*} fallback
 * @returns {*}
 */
function getThemeValue(name, props = {}, values, fallback) {
  // pull the value for the specified dimension from the <ThemeProvider/>
  // <ThemeProvider theme={{ mode: 'dark', size: 'compact' }}>
  // In the above example the 'mode' dimension has a value of 'dark' and the 'size' dimension has a value of 'compact'
  const { theme: { [name]: dimensionValue = fallback } = {} } = props;

  // grab the actual value that respects what the dimension is currently set to
  const themeValue = (typeof dimensionValue === 'function') ? dimensionValue(values) : values[dimensionValue];

  if (typeof themeValue === 'function') {
    return themeValue(props);
  }
  return themeValue;
}

/**
 * Main theme helper export
 * @param {string} name
 * @param {array} values
 * @param {*} fallback
 * @returns {*}
 */
function theme(name, values, fallback = LIGHT_MODE) {
  return function (props) {
    return getThemeValue(name, props, values, fallback);
  };
}

/**
 * Helper to deal with variants
 * @param {string} name
 * @param {array} values
 * @param {*} fallback
 * @returns {*}
 */

theme.variants = function (name, prop, values, fallback = LIGHT_MODE) {
  return function (props) {
    const variant = props[prop] && values[props[prop]];
    return variant && getThemeValue(name, props, variant, fallback);
  };
};

export default theme;
