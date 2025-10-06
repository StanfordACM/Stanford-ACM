import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 60px;
`;

export const Title = styled.h1`
  text-align: center;
  font: 27px/1 ${({ theme }) => theme.fonts.mono};
  font-weight: bold;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.screen.desktop}) {
    margin-bottom: 20px;
  }
`;

export const Red = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8em;
  margin-bottom: 20px;
  overflow-wrap: break-word;
`;

const LinkContent = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    text-decoration: underline;
  }
`;

export function LinkComponent({
  children,
  href,
  target,
  ...props
}: React.PropsWithChildren<
  {
    href?: string;
    target?: HTMLAttributeAnchorTarget;
  } & React.HTMLAttributes<HTMLElement>
>) {
  if (!href) {
    return <LinkContent {...props}>{children}</LinkContent>;
  }

  return (
    <Link href={href} passHref>
      <LinkContent {...props}>{children}</LinkContent>
    </Link>
  );
}
