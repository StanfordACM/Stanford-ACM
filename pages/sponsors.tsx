/* eslint-disable @next/next/no-img-element */

import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';
import { Sponsor, Sponsors } from '../components/sponsors';

export default function Contact() {
  return (
    <Layout title="Sponsors" pageName="sponsors">
      <Section>
        <Title>Interested in Sponsoring ACM?</Title>
        <Paragraph>
          We love to work with companies where great people are solving
          challenging technical problems.{' '}
          <LinkComponent href="mailto:acm-members-owners@lists.stanford.edu">
            Contact us
          </LinkComponent>{' '}
          for more information.
        </Paragraph>
        <Title>Sponsors</Title>
        <Sponsors>
          <Sponsor>
            <img src="/logos/citadel.png" alt="Citadel" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/hrt.png" alt="HRT" width={140} />
          </Sponsor>
          <Sponsor>
            <img src="/logos/janestreet.png" alt="Jane Street" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/sig.png" alt="Sig" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/verkada.png" alt="Verkada" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/latticework.png" alt="LatticeWork" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/unifyid.png" alt="UnifyID" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/haven.png" alt="Haven" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/expo.png" alt="Expo" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/sift_science.jpg" alt="Sift Science" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/datavisor.png" alt="Datavisor" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/quip.jpg" alt="Quip" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/stripe.png" alt="Stripe" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/niantic.png" alt="Niantic" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/addepar.png" alt="Addepar" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/lucidchart.png" alt="Lucidchart" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/qualia.png" alt="Qualia" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/linkedin.png" alt="LinkedIn" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/opendoor.svg" alt="Opendoor" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/square.jpg" alt="Square" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/jump.png" alt="Jump Trading" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/walleye.jpg" alt="Walleye" />
          </Sponsor>
        </Sponsors>
        <br />
        <Title>Partners</Title>
        <Sponsors>
          <Sponsor>
            <img src="/logos/pear.png" alt="Pear" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/lsvp.gif" alt="Lightspeed Venture Partners" />
          </Sponsor>
          <Sponsor>
            <img src="/logos/eff.jpg" alt="Electronic Frontier Foundation" />
          </Sponsor>
        </Sponsors>
      </Section>
    </Layout>
  );
}
