'use client';

// Just for testing styled-components with Next.js
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Link
 */
const StyledLink = styled.a`
  font-size: ${(props) => props.$fontSize || 'var(--font-size)'};
  font-family: ${(props) => props.$fontFamily || 'var(--font-family)'};
  font-style: ${(props) => props.$fontStyle || 'var(--font-style)'};
  color: ${(props) => props.$color || 'var(--link-color)'};
  background: ${(props) => props.$bg || 'transparent'};
  padding: ${(props) => `${props.$paddingX || '0'} ${props.$paddingY || '0'}`};
  text-decoration: ${(props) => props.$textDecoration || 'var(--link-decoration)'};
  border-width: ${(props) => props.$borderWidth || 'none'};
  border-style: ${(props) => props.$borderStyle || 'none'};
  border-color: ${(props) => props.$borderColor || 'var(--link-color)'};
  border-radius: ${(props) => props.$borderRadius || '0'};
  cursor: pointer;
`;

StyledLink.propTypes = {
  /** Font size */
  $fontSize: PropTypes.string,
  /** Font family */
  $fontFamily: PropTypes.string,
  /** Font style */
  $fontStyle: PropTypes.string,
  /** Text color */
  $color: PropTypes.string,
  /** Background color */
  $bg: PropTypes.string,
  /** Horizontal padding */
  $paddingX: PropTypes.string,
  /** Vertical padding */
  $paddingY: PropTypes.string,
  /** Text decoration */
  $textDecoration: PropTypes.string,
  /** Border width */
  $borderWidth: PropTypes.string,
  /** Border style */
  $borderStyle: PropTypes.string,
  /** Border color */
  $borderColor: PropTypes.string,
  /** Border radius */
  $borderRadius: PropTypes.string,
}

export default StyledLink;
