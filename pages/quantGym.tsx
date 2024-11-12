import Layout from '../components/layout';
import { QuantTitle } from '../components/quant';
import {
  Paragraph,
  Section,
  Title,
  LinkComponent
} from '../components/section';

export default function QuantGym() {
  return (
    <Layout title="Quant Gym" pageName="quantGym">
      <Section>
        <QuantTitle />
        <Paragraph>
          Quant Gym is Stanford ACM&apos;s premier quantitative trading training
          program. The key to getting a Quant Job is to practice Quant
          Questions, so get ready to flex those mind muscles. Let&apos;s work
          together to practice our skills and <b>ACE</b> the interviews 😤.
        </Paragraph>
        <Paragraph>
          <b>Time: </b> Fridays 5 PM <br />
          <b>Location: </b> STLC 114 <br />
        </Paragraph>
        <Paragraph>
          (If you are interested in partnering with us, please email{' '}
          <LinkComponent href="mailto:stanfordquantgym@gmail.com">
            stanfordquantgym@gmail.com
          </LinkComponent>{' '}
          to discuss details.)
        </Paragraph>
      </Section>
    </Layout>
  );
}
