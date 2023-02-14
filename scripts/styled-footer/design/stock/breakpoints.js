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
 * Breakpoint names.
 *
 * @todo The medium breakpoint is labeled 'legacy' until stock-web uses the stock-navbar package.
 * Ticket: https://jira.corp.adobe.com/browse/STK-42713
 */
export const STOCK_BREAKPOINT_INITIAL = 'initial';
export const STOCK_BREAKPOINT_XXSMALL = 'xxsmall';
export const STOCK_BREAKPOINT_XSMALL = 'xsmall';
export const STOCK_BREAKPOINT_SMALL = 'small';
export const STOCK_BREAKPOINT_MEDIUM_LEGACY = 'medium';
export const STOCK_BREAKPOINT_MEDIUM_LARGE_LEGACY = 'medium-large';
export const STOCK_BREAKPOINT_LARGE = 'large';
export const STOCK_BREAKPOINT_XLARGE = 'xlarge';
export const STOCK_BREAKPOINT_XXLARGE = 'xxlarge';

/**
 * Breakpoint values in px.
 *
 * @todo The medium breakpoint must be changed to 992 when stock-web uses the stock-navbar package.
 * Ticket: https://jira.corp.adobe.com/browse/STK-42713
 */
export const STOCK_BREAKPOINTS = {
  [STOCK_BREAKPOINT_INITIAL]: 0,
  [STOCK_BREAKPOINT_XXSMALL]: 304,
  [STOCK_BREAKPOINT_XSMALL]: 600,
  [STOCK_BREAKPOINT_SMALL]: 768,
  [STOCK_BREAKPOINT_MEDIUM_LEGACY]: 993,
  [STOCK_BREAKPOINT_MEDIUM_LARGE_LEGACY]: 1200,
  [STOCK_BREAKPOINT_LARGE]: 1280,
  [STOCK_BREAKPOINT_XLARGE]: 1768,
  [STOCK_BREAKPOINT_XXLARGE]: 2160,
};
