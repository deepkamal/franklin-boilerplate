"use strict";

var _propTypes = PropTypes;//require("prop-types");
import _navigation from "./styled-footer/navigation.style.js";
import _footer from "./styled-footer/footer.style.js";
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Footer component.
 *
 * @returns {ReactElement}
 */
function Footer({
  copyright,
  leftLinks,
  rightLinks
}) {
  const linkMapper = (Link, item) => {
    const conditionalProps = typeof item.callback === 'function' ? {
      onClick: () => item.callback()
    } : {};
    return /*#__PURE__*/React.createElement(_navigation.StyledLi, _extends({
      key: item.text || item.key
    }, conditionalProps), item.element && item.element, !item.element && /*#__PURE__*/React.createElement(Link, {
      "data-t": `footer-${item.dataT}-link`,
      href: item.href,
      title: item.title,
      as: item.as
    }, item.text));
  };
  const leftLinkComponents = leftLinks.map(linkMapper.bind(null, _footer.StyledLink));
  const rightLinkComponents = rightLinks.map(linkMapper.bind(null, _footer.StyledRightLink));
  return React.createElement(_footer.StyledFooter, {
    "data-t": "footer-section"
  }, React.createElement(_navigation.StyledFlexUl, {
    wrap: "true"
  }, leftLinkComponents), React.createElement(_navigation.StyledFlexUl, {
    wrap: "true"
  }, React.createElement(_navigation.StyledLi, null, React.createElement(_footer.StyledCopyright, {
    "data-t": "footer-copyright-text"
  }, copyright)), rightLinkComponents));
}
Footer.defaultProps = {
  copyright: `\u00A9 ${new Date().getFullYear()} Adobe. All rights reserved.`
};
Footer.propTypes = {
  /** Copyright notice */
  copyright: _propTypes.string,
  /** Array of links to show on the left side ("License terms", "Learn & Support"...) */
  leftLinks: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    element: _propTypes.element,
    key: _propTypes.string,
    href: _propTypes.string,
    text: _propTypes.string,
    title: _propTypes.string,
    dataT: _propTypes.string
  })).isRequired,
  /** Array of links to show on the right side ("Privacy", "Terms of Use"...) */
  rightLinks: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    as: _propTypes.string,
    element: _propTypes.element,
    key: _propTypes.string,
    href: _propTypes.string,
    text: _propTypes.string,
    title: _propTypes.string,
    dataT: _propTypes.string
  })).isRequired
};
// var _default = Footer;
// exports.default = _default;
export default Footer;
