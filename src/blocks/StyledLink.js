'use client';

// Just for testing styled-components with Next.js
import styled from 'styled-components';

export default styled.a`
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
`;
