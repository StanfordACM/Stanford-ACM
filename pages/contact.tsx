import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

export default function Contact() {
  return (
    <Layout title="Contact" pageName="contact">
      <Section>
        <Title>Get in Touch!</Title>
        <Paragraph>
          The Stanford chapter of the ACM currently has 1000+ members. We serve
          the Stanford community by organizing numerous industry, academic, and
          social events each quarter.
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
