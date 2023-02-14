/*
* ************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2019 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property
* laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************
*/
"use strict";

/* eslint valid-jsdoc: off */

import { HEADER_HEIGHT } from './constants/index.js';
import navStyle from './navigation.style.js';
const {
  StyledBar,
  NavItem,
} = navStyle;
import {
  SPECTRUM_COLOR_GRAY_500,
  SPECTRUM_COLOR_GRAY_700,
  SPECTRUM_COLOR_BLUE_400,
} from './design/spectrumDna/colors.js';
import {
  SPECTRUM_TYPOGRAPHY_FONT_SIZE_75,
} from './design/spectrumDna/typography.js';

/**
 * Style of the footer container.
 *
 * @augments StyledBar
 */
const StyledFooter = styled(StyledBar).attrs({
  as: 'footer',
})`
  flex-wrap: wrap;
  height: auto;
  justify-content: space-between;
  min-height: ${HEADER_HEIGHT}px;
  padding: 10px;
`;

/**
 * Style of the links.
 *
 * @augments NavItem
 */
const StyledLink = styled(NavItem)`
  color: ${SPECTRUM_COLOR_GRAY_500};
  font-size: ${SPECTRUM_TYPOGRAPHY_FONT_SIZE_75}px;
  padding: 6px 8px;
  transition: color .3s;

  &:focus,
  &:hover {
    background-color: inherit;
    color: ${SPECTRUM_COLOR_BLUE_400};
  }
`;

/**
 * Style of the links.
 *
 * @augments StyledLink
 */
const StyledRightLink = styled(StyledLink)`
  padding: 0;

  li:not(:first-child) &::before {
    content: '/';
    color: ${SPECTRUM_COLOR_GRAY_700};
    padding: 6px 8px;
  }
`;

/**
 * Style of the copyright notice.
 *
 * @augments StyledRightLink
 */
const StyledCopyright = styled(StyledRightLink)`
  padding-left: 6px;

  &:focus,
  &:hover {
    color: ${SPECTRUM_COLOR_GRAY_500};
  }
`;

export default {
  StyledCopyright,
  StyledFooter,
  StyledLink,
  StyledRightLink,
};
