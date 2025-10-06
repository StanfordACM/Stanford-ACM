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

export default function Archive() {
  return (
    <Layout title="Archive" pageName="archive">
      <Section>
        <Title>Archive</Title>
        <Paragraph>
          This page contains archived content from previous Stanford ACM activities and workshops. 
          This content is preserved for historical reference but may no longer be current or active.
        </Paragraph>
      </Section>
      
      <Section>
        <Title>AI Clinic Workshop Notes</Title>
        <Paragraph>
          <em>Note: These are archived workshop notes from previous AI Clinic activities.</em>
        </Paragraph>

        <SectionTitle href="/aiClinic/s1">
          Reasoning with the s1 method (Archived)
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