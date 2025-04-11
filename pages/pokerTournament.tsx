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
          On May 17, 2025, Stanford ACM is hosting Stanford&apos;s annual{' '}
          <b>Poker Tournament</b>, sponsored by the premier trading firms in the
          nation.
        </Paragraph>
        <Paragraph>
          Think you might be the best poker player on campus? Or just looking
          for a good time? What are you waiting for?
          <br />
          All skill levels are welcome. There will be boba, swag, and prizes.
        </Paragraph>
        <Paragraph>
          <b>Date:</b> Sat, May 17, 2025
          <br />
          <b>Time:</b> 10 AM
          <br />
          <b>Location:</b> Lathrop
          <br />
          (We expect the preliminary rounds will last several hours, with one
          final table to conclude the event. We will also have tables /
          slideshows from our sponsors.)
        </Paragraph>
      </Section>
      <Section id="sponsors">
        <Title>Sponsors</Title>
        <SponsorsRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/hrt.png" alt="Hudston River Trading" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/citadel.png" alt="Citadel" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/janestreet.png" alt="Jane Street" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/deshaw.png" alt="DE Shaw" />
          </SponsorRow>
        </SponsorsRow>
      </Section>
    </Layout>
  );
}
