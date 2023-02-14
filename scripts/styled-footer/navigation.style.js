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

/* eslint valid-jsdoc: off */
//
// import styled, { css } from 'styled-components';
const {
  number,
  oneOfType,
  string,
} = PropTypes;
const {css}=styled;
import { STOCK_COLOR_NAVBAR_BACKGROUND } from './design/stock/colors.js';
import { fontSmoothing, media } from './design/stock/helpers.js';
import {
  CREDIT_LABEL_MARGIN_SIZE,
  HEADER_HEIGHT,
  NAVIGATION_PADDING_LEFT_RIGHT,
} from './constants/index.js';
import {
  SPECTRUM_COLOR_GRAY_400,
  SPECTRUM_COLOR_GRAY_800,
} from './design/spectrumDna/colors.js';
import { SPECTRUM_COLOR_STATIC_BLACK } from './design/spectrumDna/colorsCommon.js';
import { SPECTRUM_MOTION_DURATION_1000 } from './design/spectrumDna/motion.js';
import {
  STOCK_BREAKPOINT_LARGE,
  STOCK_BREAKPOINT_MEDIUM_LEGACY,
} from './design/stock/breakpoints.js';
import { SPECTRUM_TYPOGRAPHY_FONT_SIZE_100 } from './design/spectrumDna/typography.js';

/**
 * Note:
 * The font-size is 15px by default on mobile and becomes 14px on larger screen.
 * This is a Stock-only rule for the navigation items.
 */
const NavItem = styled.a`
  align-items: center;
  box-sizing: border-box;
  color: ${SPECTRUM_COLOR_GRAY_400};
  display: inline-flex;
  font-size: 15px;
  line-height: 1;
  padding: 0 ${NAVIGATION_PADDING_LEFT_RIGHT}px;
  text-decoration: none;
  transition: background-color ${SPECTRUM_MOTION_DURATION_1000} ease;

  &:focus,
  &:hover {
    background-color: ${SPECTRUM_COLOR_STATIC_BLACK};
  }

  /* reset style for button element */
  ${({ as }) => as === 'button' && css`
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    text-align: left;
    -webkit-appearance: none;
    -moz-appearance: none;
  `}
`;

/**
 * Style of the main container.
 */
const StyledBar = styled.nav`
  ${fontSmoothing()}
  background-color: ${STOCK_COLOR_NAVBAR_BACKGROUND};
  display: flex;
  height: ${HEADER_HEIGHT}px;
  padding: 0 10px;
  position: relative;
  z-index: ${({ zIndex }) => zIndex};
`;

StyledBar.defaultProps = {
  zIndex: 'auto',
};

StyledBar.propTypes = {
  zIndex: oneOfType([
    number,
    string,
  ]),
};

/**
 * Common style for left, center and right containers.
 */
const StyledContainer = styled.div`
  display: flex;
  flex: 1;
`;

/**
 * Style of the left container of links.
 */
const StyledLeftContainer = styled(StyledContainer)`
  justify-content: flex-start;
`;

/**
 * Style of the right container of links.
 */
const StyledRightContainer = styled(StyledContainer)`
  justify-content: flex-end;
`;

/**
 * Style of the list wrapper.
 */
const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledFlexUl = styled(StyledUl)`
  display: flex;
  /* Must not be a bool due to bug; https://github.com/styled-components/styled-components/issues/1198 */
  flex-wrap: ${props => (props.wrap === 'true' ? 'wrap' : 'nowrap')};
`;

StyledFlexUl.defaultProps = {
  wrap: 'false',
};

StyledFlexUl.propTypes = {
  wrap: string,
};

/**
 * Style of the list items.
 */
const StyledLi = styled.li`
  display: inline-flex;
  min-height: 28px;
  position: relative;
`;

const StyledSpacedIcon = styled.span`
  padding-right: 5px;
`;

/**
 * Style of credit label badges.
 */
const StyledCreditLabel = styled.span`
  align-self: center;
  margin-right: ${CREDIT_LABEL_MARGIN_SIZE}px;
`;

/**
 * Style of the Dropdown.
 */
const Dropdown = styled.span`
  display: none;
  top: calc(100% - 4px); /* Offset 4px higher into the navbar */
  left: 0;
  position: absolute;

  li:hover &,
  li:focus &,
  a:focus + & {
    display: block;
  }
`;

/**
 * Style of the Dropdown Sublist.
 */
const StyledSublist = styled.ul`
  background-color: ${STOCK_COLOR_NAVBAR_BACKGROUND};
  border: 1px solid ${SPECTRUM_COLOR_GRAY_800};
  box-shadow: 0px 1px 4px ${SPECTRUM_COLOR_STATIC_BLACK};
  border-radius: 4px;
  padding: 0;
  min-width: 176px;
`;

/**
 * Style of the Dropdown Sublink.
 */
const StyledSublink = styled.li`
  position: relative;
  box-sizing: border-box;
  border-left: 2px solid transparent;
  min-height: 32px;
  list-style: none;
  width: 100%;

  &:hover {
    background-color: ${SPECTRUM_COLOR_STATIC_BLACK};
  }

  a {
    color: ${SPECTRUM_COLOR_GRAY_400};
    text-decoration: none;
    align-items: center;
    box-sizing: border-box;
    font-size: ${SPECTRUM_TYPOGRAPHY_FONT_SIZE_100}px;
    line-height: 1;
    padding: 0 10px;
    transition: background-color ${SPECTRUM_MOTION_DURATION_1000} ease;
    line-height: ${HEADER_HEIGHT}px;
    white-space: nowrap;
    display: block;
  }
`;

/**
 * Toggle the visibility of the More navbar link which should only show for
 * small screens and be hidden on larger screens and in the tray.
 */
const StyledToggleMoreContainer = styled.div`
  display: inherit;

  [data-hideable] {
   display: block; /* Shown in Tray */
  }
  [data-id="more"] {
    display: none;
  }

  &:lang(fr),
  &:lang(ja),
  &:lang(ru),
  &:lang(uk) {
    ${media[STOCK_BREAKPOINT_MEDIUM_LEGACY]`
      [data-id="more"] {
        display: inline-flex;
      }

      [data-hideable] {
        display: none; /* Hidden on small screens */
      }
    `}

    ${media[STOCK_BREAKPOINT_LARGE]`
      [data-id="more"] {
        display: none;
      }

      [data-hideable] {
        display: inline-flex; /* Shown in navbar */
      }
    `}
  }
`;

export default {
  Dropdown,
  NavItem,
  StyledBar,
  StyledContainer,
  StyledCreditLabel,
  StyledFlexUl,
  StyledLeftContainer,
  StyledLi,
  StyledRightContainer,
  StyledSpacedIcon,
  StyledSublink,
  StyledSublist,
  StyledUl,
  StyledToggleMoreContainer,
};
