import React from 'react';
import styled from 'styled-components/macro';

export function Crumb({ href, isCurrentPage, children }) {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} aria-current={isCurrentPage ? 'page' : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
}

function Breadcrumbs({ children }) {
  return (
    <nav>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
}

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &::before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: revert;
  }
`;

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 16px;
`;

export default Breadcrumbs;
