import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

export default function QuantGym() {
  return (
    <Layout title="Contact" pageName="quantGym">
      <Section>
        <Title>QuantGym</Title>
        <Paragraph>
          Quant Gym is Stanford ACM's premier quantitative analyst training
          program. Get ready to flex those muscles!
        </Paragraph>
        <Paragraph>
          To get in touch, send us an email at{' '}
          <LinkComponent href="mailto:acm-members-owners@lists.stanford.edu">
            acm-members-owners@lists.stanford.edu
          </LinkComponent>{' '}
          and we&apos;ll follow up! Or simply join our{' '}
          <LinkComponent href="https://mailman.stanford.edu/mailman/listinfo/acm-members">
            mailing list
          </LinkComponent>
          .
        </Paragraph>
      </Section>
    </Layout>
  );
}
