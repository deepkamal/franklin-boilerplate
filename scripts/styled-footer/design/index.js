/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2019 Adobe
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

/**
 * Spectrum DNA exports.
 */
export * from './spectrumDna/alert';

/**
 * Holds the color codes for Spectrum light theme.
 *
 * @deprecated use `src/design/spectrumDna/colorsLight` or `@astock/styled-react-components/design` with colors available in the format "LIGHT_SPECTRUM_COLOR_*"
 */
export * from './spectrumDna/colors';

export * from './spectrumDna/colorsCommon';
export * from './spectrumDna/colorsDarkest';
export * from './spectrumDna/colorsLight';
export * from './spectrumDna/motion';
export * from './spectrumDna/typography';

/**
 * Stock UI exports.
 *
 * Note: grid.js doesn't need to be exported, see `src/grid/index.js` instead
 */
export * from './stock/breakpoints';
export * from './stock/brightness';
export * from './stock/colors';
export * from './stock/ratios';
export * from './stock/scale';

/**
 * Helpers exports.
 *
 * @todo These helpers should be combined in 1 file `src/design/helpers.js`.
 */
export * from './spectrumDna/helpers';
export * from './stock/helpers';
export * from './stock/layout';

export * from './styledThemer';
