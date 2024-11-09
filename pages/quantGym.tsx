import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

export default function QuantGym() {
  return (
    <Layout title="Quant Gym" pageName="quantGym">
      <Section>
        <Title>🏋️ Quant Gym 🏋️</Title>
        <Paragraph>
          Quant Gym is Stanford ACMs premier quantitative analyst training
          program. Get ready to flex those mind muscles!
        </Paragraph>
        <Paragraph>
          <b>Time: </b> Fridays 5 PM <br />
          <b>Location: </b> STLC 114 <br />
        </Paragraph>
      </Section>
    </Layout>
  );
}
