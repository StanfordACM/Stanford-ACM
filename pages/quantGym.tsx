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
            width={275}
            height={325}
          />
        </Center>
        <Paragraph>
          Traders @ Stanford is Stanford&apos;s premier club for quantitative
          finance, trading, research, and engineering. Quant is one of the most
          desirable industries in the world, and yet students simply can&apos;t
          break in. <b>We</b> provide that opportunity to break in. Our flagship
          program, QUANT GYM, prepares students for the interview, superday,
          actual internship, and beyond, through a carefully curated set of
          probability puzzles, mathematical brainteasers, and trading
          challenges, run by a crack team of ex-HRT, Five Rings, and Citadel
          interns. Separately, we run bigger events such as estimathons and
          modeling challenges.
        </Paragraph>
        <Paragraph>
          <b>Where: </b> STLC 114 <br />
          <b>When: </b> Fridays @ 5PM <br />
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
