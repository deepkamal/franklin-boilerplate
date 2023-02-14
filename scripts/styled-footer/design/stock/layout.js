/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe
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
 * Layout helpers
 */
// import styled from 'styled-components';
import {
  STOCK_BREAKPOINTS,
  STOCK_BREAKPOINT_XSMALL,
  STOCK_BREAKPOINT_SMALL,
  STOCK_BREAKPOINT_LARGE,
} from './breakpoints.js';

/**
 * Hide element on mobile
 *
 * @description <HideOnMobile> renders an element that is going to be hidden on mobile.
 * @example <HideOnMobile><p>text</p></HideOnMobile>
 * // renders a div that is hidden on mobile
 * @example <HideOnMobile as="span"><p>text</p></HideOnMobile>
 * // renders a span that is hidden on mobile
 * @see https://styled-components.com/docs/api#as-polymorphic-prop
 */
const HideOnMobile = styled.div`
  @media only screen and (max-width : ${STOCK_BREAKPOINTS[STOCK_BREAKPOINT_XSMALL]}px) {
    display: none;
  }
`;

// 768px breakpoint
const HideOnSmall = styled.div`
  @media screen and (max-width: ${STOCK_BREAKPOINTS[STOCK_BREAKPOINT_SMALL]}px) {
    display: none;
  };
`;

// 1280px breakpoint
const HideOnLarge = styled.div`
  @media screen and (max-width: ${STOCK_BREAKPOINTS[STOCK_BREAKPOINT_LARGE]}px) {
    display: none;
  };
`;

export {
  HideOnMobile,
  HideOnSmall,
  HideOnLarge,
};
