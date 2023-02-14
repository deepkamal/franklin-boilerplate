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

// import { css } from 'styled-components';
import {
  SPECTRUM_TYPOGRAPHY_FONT_SIZES,
  SPECTRUM_TYPOGRAPHY_MARGIN_HEADING_BOTTOM,
  SPECTRUM_TYPOGRAPHY_MARGIN_HEADING_TOP,
  SPECTRUM_TYPOGRAPHY_STYLE_DISPLAY,
} from './typography.js';

/**
 * Heading margins helper
 * @see https://spectrum.corp.adobe.com/page/typography#Margins
 *
 * @param {number} fontSize Font size in px
 * @returns {number} bottom|top margin
 */
export const headingBottomMargin = fontSize => Math.round(fontSize * SPECTRUM_TYPOGRAPHY_MARGIN_HEADING_BOTTOM);
export const headingTopMargin = fontSize => Math.round(fontSize / SPECTRUM_TYPOGRAPHY_MARGIN_HEADING_TOP);

/**
 * Heading mixin returning the font-size and the margins based on the character style and size.
 * @see https://spectrum.corp.adobe.com/page/typography#Character-styles
 *
 * @param {Object} params
 * @param {string} params.style
 * @param {number} params.size
 * @param {boolean} params.hasTopMargin
 * @returns {string}
 */
export const headingMixin = ({
  style = SPECTRUM_TYPOGRAPHY_STYLE_DISPLAY,
  size = 1,
  hasBottomMargin = true,
  hasTopMargin = true,
  align,
}) => {
  const spectrumSize = SPECTRUM_TYPOGRAPHY_FONT_SIZES[style][size];
  return css`
    font-size: ${spectrumSize}px;
    margin-bottom: ${hasBottomMargin ? headingBottomMargin(spectrumSize) : 0}px;
    margin-top: ${hasTopMargin ? headingTopMargin(spectrumSize) : 0}px;
    text-align: ${align};
  `;
};

/**
 * Converts HEX to RGB/RGBA
 * @example hexToRgba('#1473E6', 0.1) => rgba(20, 115, 230, 0.1)
 *
 * @param {string} hex Initial HEX value
 * @param {number} [alpha] Transparency value
 * @returns {string} RGB/RGBA value
 */
export const hexToRgba = (hex, alpha) => {
  const hexRegexp = /^#[a-fA-F0-9]{6}$/;

  if (hex.match(hexRegexp)) {
    const red = parseInt(`${hex[1]}${hex[2]}`, 16);
    const green = parseInt(`${hex[3]}${hex[4]}`, 16);
    const blue = parseInt(`${hex[5]}${hex[6]}`, 16);
    const values = `${red}, ${green}, ${blue}`;

    return typeof alpha === 'number'
      ? `rgba(${values}, ${alpha})`
      : `rgb(${values})`;
  }

  return typeof alpha === 'number'
    ? 'rgba(0, 0, 0, 0)'
    : 'rgb(0, 0, 0)';
};

/**
 * Mixin for the hero component inside of Creative Cloud Desktop
 * Using & to override headingMixin and !important to override 'contextFontSize'
 * Setting display: inline-flex to center content when max-width is set
 * @param {Object} params
 * @returns {string}
 */
export const ccdHeroMixin = ({
  fontSize = 28,
  maxWidth = 800,
  removeBottomMargin = false,
}) => css`
  & {
    font-size: ${fontSize}px !important;
    max-width: ${maxWidth}px;
    display: inline-flex;
    ${removeBottomMargin ? `
      margin-bottom: 0;
    ` : ''}
  }
`;
