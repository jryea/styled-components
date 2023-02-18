import React from 'react';
import styled from 'styled-components';

function DynamicTagButton({ href, children }) {
  return (
    <Wrapper href={href} as={href ? 'a' : 'button'}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: blue;
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 4px;
`;

export default DynamicTagButton;
