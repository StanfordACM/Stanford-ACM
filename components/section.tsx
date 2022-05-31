import Link from 'next/link';
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

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8em;
  margin-bottom: 20px;
`;

const LinkContent = styled.a`
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
  ...props
}: React.PropsWithChildren<
  { href?: string } & React.HTMLAttributes<HTMLElement>
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
