import Layout from '../components/layout';
import { PokerTitle } from '../components/poker';
import { LinkComponent, Paragraph, Section } from '../components/section';

export default function PokerTournament() {
  return (
    <Layout title="Poker Tournament" pageName="pokerTournament">
      <Section>
        <PokerTitle />
        <Paragraph>
          On May 18, 2024, Stanford ACM is hosting Stanford&apos;s inaugural{' '}
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
          <b>Date:</b> Sat, May 18, 2024
          <br />
          <b>Time:</b> 10 AM
          <br />
          <b>Location:</b> STLC
          <br />
          (We expect the preliminary rounds will last several hours, with one
          final table to conclude the event. We will also have tables /
          slideshows from our sponsors.)
        </Paragraph>
        <Paragraph>
          <b>Sponsors</b>: Hudson River Trading, Jump Trading, Jane Street, SIG
          Street
          <br />
          (If you are interested in partnering with us, please email{' '}
          <LinkComponent href="mailto:stanfordpokertournament@gmail.com">
            stanfordpokertournament@gmail.com
          </LinkComponent>{' '}
          to discuss details.)
        </Paragraph>
      </Section>
    </Layout>
  );
}
