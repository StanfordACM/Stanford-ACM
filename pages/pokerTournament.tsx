import Layout from '../components/layout';
import { PokerTitle } from '../components/poker';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';
import {
  SponsorRow,
  SponsorRowImage,
  SponsorsRow
} from '../components/sponsors';

export default function PokerTournament() {
  return (
    <Layout title="Poker Tournament" pageName="pokerTournament">
      <Section>
        <PokerTitle />
        <Paragraph>
          This spring quarter May 2026, Stanford ACM is hosting Stanford&apos;s
          annual <b>Poker Tournament</b>, sponsored by the premier trading firms
          in the nation.
        </Paragraph>
        <Paragraph>
          Think you might be the best poker player on campus? Or just looking
          for a good time? What are you waiting for?
          <br />
          All skill levels are welcome. There will be boba, swag, and prizes.
        </Paragraph>
        <Paragraph>
          <b>Date:</b> Saturday, May 9th, 2026
          <br />
          <b>Location:</b> Lathrop 282
          <br />
          (We expect the preliminary rounds will last several hours, with one
          final table to conclude the event. We will also have tables /
          slideshows from our sponsors.)
        </Paragraph>
        <Paragraph>
          <b>Sign up here: </b>
          <LinkComponent href="https://bit.ly/acmpokertournament2026">
            bit.ly/acmpokertournament2026
          </LinkComponent>
        </Paragraph>
      </Section>
      <Section id="sponsors">
        <Title>Sponsors</Title>
        <SponsorsRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/deshaw.png" alt="D.E. Shaw & Co" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/hrt.png" alt="Hudson River Trading" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/janestreet.png" alt="Jane Street" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/walleye.jpg" alt="Walleye" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/sig.png" alt="Susquehanna" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/jump.png" alt="Jump Trading" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/citadel.png" alt="Citadel" />
          </SponsorRow>
        </SponsorsRow>
        <Paragraph>
          If you are interested in partnering with us, please email{' '}
          <LinkComponent href="mailto:stanfordpokertournament@gmail.com">
            stanfordpokertournament@gmail.com
          </LinkComponent>{' '}
          to discuss details.
        </Paragraph>
      </Section>
    </Layout>
  );
}
