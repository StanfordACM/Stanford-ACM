import styled from 'styled-components';

import Layout from '../components/layout';
import { Paragraph, Section, Title } from '../components/section';

const CenteredParagraph = styled(Paragraph)`
  text-align: center;
`;

export default function Contact() {
  return (
    <Layout title="404" pageName="404">
      <Section>
        <Title>404</Title>
        <CenteredParagraph>
          Sorry, that page doesn&apos;t exist!
        </CenteredParagraph>
      </Section>
    </Layout>
  );
}
