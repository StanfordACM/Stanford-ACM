import Layout from '../components/layout';
import { QuantTitle } from '../components/quant';
import { Paragraph, Section, Title } from '../components/section';

export default function QuantGym() {
  return (
    <Layout title="Quant Gym" pageName="quantGym">
      <Section>
        <QuantTitle />
        <Paragraph>
          Quant Gym is Stanford ACM&apos;s premier quantitative trading training
          program. Get ready to flex those mind muscles, and let&apos;s work
          together to practice our skills and <b>ACE</b> the interviews 😤.
        </Paragraph>
        <Paragraph>
          <b>Time: </b> Fridays 5 PM <br />
          <b>Location: </b> STLC 114 <br />
        </Paragraph>
      </Section>
    </Layout>
  );
}
