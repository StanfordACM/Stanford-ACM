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
      <Section>
        <Title>Workshop Notes</Title>
        <Paragraph>We have compiled notes from selected workshops:</Paragraph>

        <SectionTitle href="/aiClinic/s1">
          Reasoning with the s1 method
        </SectionTitle>
        <Paragraph>
          The s1 paper develops reasoning capabilities in a large language model
          for just $50. In this workshop, we discussed the paper, how to run a
          similar experiment for free on Google Colab (or for $5 on Vast.ai, a
          GPU rental service), the HuggingFace library, and techniques to make
          the most of a limited GPU.
        </Paragraph>
        <Paragraph>
          Beyond the technical notes, the most interesting discussion question
          was whether future deep learning advances will be driven by better
          data sources (like s1 curating a high-quality reasoning dataset and
          DeepSeek) or by even larger datasets. It opens related questions to
          whether the model providers need to continue scraping so much data,
          without permission even. We will continue discussing these questions
          and identifying solutions!
        </Paragraph>
        <Paragraph>
          <LinkComponent href="/aiClinic/s1">
            Further notes and code can be found here.
          </LinkComponent>
        </Paragraph>
      </Section>
    </Layout>
  );
}
