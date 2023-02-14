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

import {
  STOCK_BREAKPOINT_INITIAL,
  STOCK_BREAKPOINT_XXSMALL,
  STOCK_BREAKPOINT_XSMALL,
  STOCK_BREAKPOINT_SMALL,
  STOCK_BREAKPOINT_LARGE,
  STOCK_BREAKPOINT_XLARGE,
  STOCK_BREAKPOINT_XXLARGE,
} from 'src/design/stock/breakpoints';

/**
 * List of grid breakpoints.
 */
export const STOCK_GRID_BREAKPOINTS = [
  STOCK_BREAKPOINT_INITIAL,
  STOCK_BREAKPOINT_XXSMALL,
  STOCK_BREAKPOINT_XSMALL,
  STOCK_BREAKPOINT_SMALL,
  STOCK_BREAKPOINT_LARGE,
  STOCK_BREAKPOINT_XLARGE,
  STOCK_BREAKPOINT_XXLARGE,
];

/**
 * Grid max-width in px.
 */
export const STOCK_GRID_MAXWIDTH = {
  [STOCK_BREAKPOINT_INITIAL]: 'none',
  [STOCK_BREAKPOINT_XXSMALL]: 'none',
  [STOCK_BREAKPOINT_XSMALL]: 'none',
  [STOCK_BREAKPOINT_SMALL]: 'none',
  [STOCK_BREAKPOINT_LARGE]: 'none',
  [STOCK_BREAKPOINT_XLARGE]: 1656, // bp xlarge - (2 x (margin - (gutter / 2)))
  [STOCK_BREAKPOINT_XXLARGE]: 1656, // ditto
};

/**
 * Margins width in px.
 */
export const STOCK_GRID_MARGINS = {
  [STOCK_BREAKPOINT_INITIAL]: 16,
  [STOCK_BREAKPOINT_XXSMALL]: 16,
  [STOCK_BREAKPOINT_XSMALL]: 20,
  [STOCK_BREAKPOINT_SMALL]: 20,
  [STOCK_BREAKPOINT_LARGE]: 68,
  [STOCK_BREAKPOINT_XLARGE]: 0, // max-width is set instead
  [STOCK_BREAKPOINT_XXLARGE]: 0, // ditto
};

/**
 * Gutters width in px.
 */
export const STOCK_GRID_GUTTERS = {
  [STOCK_BREAKPOINT_INITIAL]: 16,
  [STOCK_BREAKPOINT_XXSMALL]: 16,
  [STOCK_BREAKPOINT_XSMALL]: 20,
  [STOCK_BREAKPOINT_SMALL]: 20,
  [STOCK_BREAKPOINT_LARGE]: 20,
  [STOCK_BREAKPOINT_XLARGE]: 24,
  [STOCK_BREAKPOINT_XXLARGE]: 24,
};
