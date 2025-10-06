import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

function SectionTitle({
  href,
  children
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <h2>
      <LinkComponent href={href}>{children}</LinkComponent>
    </h2>
  );
}

export default function AiClinic() {
  return (
    <Layout title="AI Clinic" pageName="aiClinic">
      <Section>
        <Title>Stanford AI Clinic</Title>
        <Paragraph>
          The Stanford AI Clinic is a student group that studies AI policy and
          offers technical advice and policy recommendations for researchers and
          developers in AI.
        </Paragraph>
        <Paragraph>
          Please join our weekly meetings for technical workshops, policy
          discussions, and to join our quarterly project. This quarter&apos;s
          project is focused on improving people&apos;s access to AI services.
        </Paragraph>
        <Paragraph>
          <b>Where: </b> Kimball Hall Lounge <br />
          <b>When: </b> Thursdays @ 7PM <br />
        </Paragraph>
        <Paragraph>
          (If you are interested in scheduling a pro bono advisory session or
          partnering with us, please email{' '}
          <LinkComponent href="mailto:jk23541@stanford.edu">
            jk23541@stanford.edu
          </LinkComponent>{' '}
          to discuss details.)
        </Paragraph>
      </Section>
    </Layout>
  );
}
