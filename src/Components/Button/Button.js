import React from 'react';
import styled from 'styled-components/macro';

const SIZES = {
  small: {
    '--borderRadius': '2px',
    '--fontSize': '1rem',
    '--padding': '6px 12px',
  },
  medium: {
    '--borderRadius': '2px',
    '--fontSize': '1.125rem',
    '--padding': '16px 24px',
  },
  large: {
    '--borderRadius': '4px',
    '--fontSize': '1.3125rem',
    '--padding': '20px 36px',
  },
};

function Button({ size, variant, children }) {
  const styles = SIZES[size];

  let Component;
  if (variant === 'fill') {
    Component = ButtonFill;
  } else if (variant === 'outline') {
    Component = ButtonOutline;
  } else if (variant === 'ghost') {
    Component = ButtonGhost;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant} `);
  }
  return <Component style={styles}>{children}</Component>;
}

const ButtonBase = styled.button`
  text-transform: uppercase;
  border: none;
  font-size: var(--fontSize);
  background-color: blue;
  border-radius: var(--borderRadius);
  padding: var(--padding);
  margin: 20px;
  color: white;
  cursor: pointer;
`;

const ButtonFill = styled(ButtonBase)`
  background-color: blue;
  color: white;
  &:hover {
    background-color: hsla(235, 100%, 66%, 1);
  }
  &:focus {
    outline: 2px solid blue;
    border: 2px solid white;
  }
`;

const ButtonOutline = styled(ButtonBase)`
  background-color: white;
  color: blue;
  border: 2px solid blue;
  &:hover {
    background-color: hsla(235, 85%, 97%, 1);
  }
  &:focus {
    outline: 2px solid blue;
    outline-offset: 4px;
  }
`;

const ButtonGhost = styled(ButtonBase)`
  background-color: transparent;
  color: hsla(240, 10%, 50%, 1);
  &:hover {
    color: black;
    background-color: rgba(115, 115, 140, 0.15);
  }
  &:focus {
    border: 2px solid hsla(240, 10%, 50%, 0.75);
  }
`;

export default Button;
