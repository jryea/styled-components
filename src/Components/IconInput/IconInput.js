import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: { fontSize: 14, iconSize: 16, borderThickness: 1, height: 24 },
  large: { fontSize: 18, iconSize: 24, borderThickness: 2, height: 36 },
};

const IconInput = ({
  label,
  icon = 'search',
  width = 250,
  size = 'large',
  placeholder = 'Search...',
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--height': styles.height + 'px',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'px',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
          '--padding-left': styles.height + 'px',
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`;

const TextInput = styled.input`
  color: inherit;
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--padding-left);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: 2px solid hsla(218, 57%, 53%, 1);
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export default IconInput;
