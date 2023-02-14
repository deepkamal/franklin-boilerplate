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
 * Spectrum reference
 * @see https://spectrum.corp.adobe.com/page/typography
 *
 * Version:
 * The style below is based on Spectrum v5.0.0.
 */

/**
 * Character styles.
 * @see https://spectrum.corp.adobe.com/page/typography#Character-styles
 */
export const SPECTRUM_TYPOGRAPHY_STYLE_BODY = 'body';
export const SPECTRUM_TYPOGRAPHY_STYLE_DISPLAY = 'display';
export const SPECTRUM_TYPOGRAPHY_STYLE_HEADING = 'heading';
export const SPECTRUM_TYPOGRAPHY_STYLE_SUBHEADING = 'subheading';
export const SPECTRUM_TYPOGRAPHY_STYLE_DETAIL = 'detail';

/**
 * Type scale.
 * @see https://spectrum.corp.adobe.com/page/typography#Type-scale
 */
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_50 = 11;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_75 = 12;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_100 = 14;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_200 = 16;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_300 = 18;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_400 = 20;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_500 = 22;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_600 = 25;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_700 = 28;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_800 = 32;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_900 = 36;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_1000 = 40;
export const SPECTRUM_TYPOGRAPHY_FONT_SIZE_1100 = 45;

/**
 * Mapping character style with type scale.
 * @see https://spectrum.corp.adobe.com/page/typography#Character-styles
 */
export const SPECTRUM_TYPOGRAPHY_FONT_SIZES = {
  // @see https://spectrum.corp.adobe.com/page/typography#Body
  [SPECTRUM_TYPOGRAPHY_STYLE_BODY]: {
    // Body 1
    1: SPECTRUM_TYPOGRAPHY_FONT_SIZE_400,
    // Body 2
    2: SPECTRUM_TYPOGRAPHY_FONT_SIZE_300,
    // Body 3
    3: SPECTRUM_TYPOGRAPHY_FONT_SIZE_200,
    // Body 4
    4: SPECTRUM_TYPOGRAPHY_FONT_SIZE_100,
    // Body 5
    5: SPECTRUM_TYPOGRAPHY_FONT_SIZE_75,
  },
  // @see https://spectrum.corp.adobe.com/page/typography#Display
  [SPECTRUM_TYPOGRAPHY_STYLE_DISPLAY]: {
    // Display 1
    1: SPECTRUM_TYPOGRAPHY_FONT_SIZE_1100,
    // Display 2
    2: SPECTRUM_TYPOGRAPHY_FONT_SIZE_1000,
  },
  // @see https://spectrum.corp.adobe.com/page/typography#Heading
  [SPECTRUM_TYPOGRAPHY_STYLE_HEADING]: {
    // Heading 1
    1: SPECTRUM_TYPOGRAPHY_FONT_SIZE_900,
    // Heading 2
    2: SPECTRUM_TYPOGRAPHY_FONT_SIZE_700,
    // Heading 3
    3: SPECTRUM_TYPOGRAPHY_FONT_SIZE_500,
    // Heading 4
    4: SPECTRUM_TYPOGRAPHY_FONT_SIZE_300,
    // Heading 5
    5: SPECTRUM_TYPOGRAPHY_FONT_SIZE_200,
    // Heading 6
    6: SPECTRUM_TYPOGRAPHY_FONT_SIZE_100,
  },
  // @see https://spectrum.corp.adobe.com/page/typography#Subheading
  [SPECTRUM_TYPOGRAPHY_STYLE_SUBHEADING]: SPECTRUM_TYPOGRAPHY_FONT_SIZE_50,
  // @see https://spectrum.corp.adobe.com/page/typography#Detail
  [SPECTRUM_TYPOGRAPHY_STYLE_DETAIL]: SPECTRUM_TYPOGRAPHY_FONT_SIZE_50,
};

/**
 * Weights.
 * @see https://spectrum.corp.adobe.com/page/typography#Character-styles
 */
export const SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_LIGHT = 300;
export const SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_REGULAR = 400;
export const SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_BOLD = 700;
export const SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_EXTRA_BOLD = 800;
export const SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_BLACK = 900;

export const SPECTRUM_TYPOGRAPHY_WEIGHT_STANDARD = 'standard';
export const SPECTRUM_TYPOGRAPHY_WEIGHT_QUIET = 'quiet';
export const SPECTRUM_TYPOGRAPHY_WEIGHT_STRONG = 'strong';
export const SPECTRUM_TYPOGRAPHY_WEIGHT_ITALIC = 'italic';
export const SPECTRUM_TYPOGRAPHY_WEIGHT_BOLD = 'bold';
export const SPECTRUM_TYPOGRAPHY_WEIGHT_UNDERLINE = 'underline';
export const SPECTRUM_TYPOGRAPHY_WEIGHT_EMPHASIS = 'emphasis';

export const SPECTRUM_TYPOGRAPHY_FONT_WEIGHTS = {
  [SPECTRUM_TYPOGRAPHY_WEIGHT_STANDARD]: SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_BOLD,
  [SPECTRUM_TYPOGRAPHY_WEIGHT_QUIET]: SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_LIGHT,
  [SPECTRUM_TYPOGRAPHY_WEIGHT_STRONG]: SPECTRUM_TYPOGRAPHY_FONT_WEIGHT_BLACK,
};

/**
 * Line height.
 * @see https://spectrum.corp.adobe.com/page/typography#Line-height
 *
 * Usage: n * font size
 */
export const SPECTRUM_TYPOGRAPHY_LINE_HEIGHT_HEADING = 1.3;
export const SPECTRUM_TYPOGRAPHY_LINE_HEIGHT_BODY = 1.5;

/**
 * Margins.
 * @see https://spectrum.corp.adobe.com/page/typography#Margins
 *
 * Usage: n * font size
 */
export const SPECTRUM_TYPOGRAPHY_MARGIN_BODY = 0.75;
export const SPECTRUM_TYPOGRAPHY_MARGIN_HEADING_BOTTOM = 0.25;
export const SPECTRUM_TYPOGRAPHY_MARGIN_HEADING_TOP = 1.125;
