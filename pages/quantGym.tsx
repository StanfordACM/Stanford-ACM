import Layout from '../components/layout';
import { Paragraph, Section, Title } from '../components/section';

export default function QuantGym() {
  return (
    <Layout title="Quant Gym" pageName="quantGym">
      <Section>
        <Title>🏋️ Quant Gym 🏋️</Title>
        <Paragraph>
          Quant Gym is Stanford ACMs premier quantitative trading training
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
