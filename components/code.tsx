import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 4px;
`;

export interface CodeProps {
  language: string;
  code: string;
}

export function Code({ language, code }: CodeProps) {
  return (
    <Container>
      <SyntaxHighlighter language={language} style={atomOneDark}>
        {code}
      </SyntaxHighlighter>
    </Container>
  );
}
