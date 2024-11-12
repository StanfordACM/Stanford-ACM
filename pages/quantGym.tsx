import Image from 'next/image';
import styled from 'styled-components';

import Layout from '../components/layout';
import { QuantTitle } from '../components/quant';
import { LinkComponent, Paragraph, Section } from '../components/section';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export default function QuantGym() {
  return (
    <Layout title="Quant Gym" pageName="quantGym">
      <Section>
        <QuantTitle />
        <Center>
          <Image
            src="/quantGym/greenbook.png"
            alt="Puzzle Hunt"
            style={{ borderRadius: '5px' }}
            width={350}
            height={336}
          />
        </Center>
        <Paragraph>
          Quant Gym is Stanford ACM&apos;s premier quantitative trading training
          program. The key to getting a Quant Job is to practice Quant
          Questions, so get ready to flex those mind muscles. Let&apos;s work
          together to practice our skills and <b>ACE</b> the interviews 😤!
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
