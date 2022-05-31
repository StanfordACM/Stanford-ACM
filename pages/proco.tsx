import styled from 'styled-components';

import Layout from '../components/layout';
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

const Introduction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProcoImage = styled.img`
  height: 20%;
  width: 20%;
`;

const SponsorParagraph = styled(Paragraph)`
  font-size: smaller;
`;

export default function Contact() {
  return (
    <Layout title="ProCo" pageName="proco">
      <Section>
        <Title>ProCo</Title>
        <Introduction>
          <Paragraph>
            ProCo is a computer programming contest for high school students in
            the style of the college-level ACM-ICPC. ProCo aims to provide a fun
            and engaging opportunity for high school students in the Bay Area to
            explore their passion in computer science.
          </Paragraph>
          <ProcoImage src="proco/logo.png" />
        </Introduction>
      </Section>
      <Paragraph>
        Interested?{' '}
        <LinkComponent href="https://mailman.stanford.edu/mailman/listinfo/proco-interest">
          Sign up on our mailing list
        </LinkComponent>{' '}
        to keep up to date on ProCo news.
      </Paragraph>
      <Section>
        <Title>About ProCo</Title>
        <Paragraph>
          ProCo is hosted by Stanford ACM.{' '}
          <strong>
            The contest will happen on March 5, 2022. Registration has closed.
          </strong>
        </Paragraph>
        <Paragraph>
          Students compete in teams of up to three to compete in solving
          algorithmic problems. The contest will last 3 hours and consist of 9 -
          15 unweighted problems.
        </Paragraph>
        <Paragraph>
          The contest is also split between two separate divisions: Novice and
          Advanced. The problem set will be shared for both divisions, however,
          final team placements and prizes will be determined within each
          division.
        </Paragraph>
        <Paragraph>
          <em>
            For full rules and more detailed information, see our{' '}
            <LinkComponent href="/proco/info">ProCo info page.</LinkComponent>
          </em>
        </Paragraph>
      </Section>
      <Section>
        <Title>Sponsors</Title>
        <SponsorsRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/verkada.png" alt="Verkada" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/citadelDouble.png" alt="Citadel" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/amber.png" alt="Amber" />
          </SponsorRow>
        </SponsorsRow>
        <SponsorParagraph>
          Citadel: Citadel and Citadel Securities, two of the leading firms
          within the financial services industry, are proud to be a sponsoring
          partner of Stanford&apos;s 2022 ProCo content. We recruit software
          engineers, quantiative researchers, and investment and trading
          professionals into internship and new grad positions from campuses
          such as Stanford and more broadly across the U.S. For ProCo, we will
          be offering Citadel swag bags to every programmer and top performers
          will be competiting for exciting branded prizes across both Division 1
          and Division 2! See below for more information about us, including
          details on our Discover Citadel insight progam &ndash; an exclusive
          opportunity for select freshman and sophomores to visit our offices,
          network with our employees and other partcipants, and get an exlusive,
          in-depth look at all our offerings.
        </SponsorParagraph>
        <SponsorParagraph>
          Amber was developed at LatticeWork by leading experts in cloud and
          data storage technologies. Founded in 2014 by Dr. Pantas Sutardja,
          Co-Founder & former CTO of Marvell Technology Group - a global leader
          in digital storage technologies, LatticeWork is uniquely positioned to
          be a transformational leader for edge computing data storage
          technology with the world&apos;s first Personal Hybrid Cloud Storage
          Platform. LatticeWork is proud to be a sponsor for Stanford ACM&apos;s
          2022 ProCo event. We are offering participants special promo code:
          ACMPROCO20 for 20% discount on all Amber products at
          www.myamberlife.com.
        </SponsorParagraph>
      </Section>
      <Section>
        <Title>Frequently Asked Questions</Title>
        <Paragraph>
          <strong>
            Q: How much programming experience do I need to compete?
          </strong>
        </Paragraph>
        <Paragraph>
          A: Most competitors will have had at least one year of programming
          experience. You will need to know how to manipulate integers, strings
          and arrays. It is not necessary to know advanced data structures
          (lists, sets, maps, stacks, queues, trees), though you may find this
          knowledge helpful. If we introduce a concept that you are not expected
          to know, we will explain it thoroughly in the problem description.
        </Paragraph>

        <Paragraph>
          <strong>Q: What division should I be in? </strong>
        </Paragraph>
        <Paragraph>
          A: The Novice division is designed for first-timers and competitors
          with less than two years of programming experience. The Advanced
          division is designed for returning competitors and competitors with at
          least two years of programming experience, or who have previously
          competed in ProCo.
        </Paragraph>

        <Paragraph>
          <strong>
            Q: Is there an advantage to coding in a particular language?
          </strong>
        </Paragraph>
        <Paragraph>
          A: No. Each language has pros and cons, and you should choose the
          language you are most comfortable with. In general, we have written
          the problems carefully so that language-specific features will not
          give anyone an unfair advantage.
        </Paragraph>

        <Paragraph>
          <strong>Q: How will input and output work with my IDE? </strong>
        </Paragraph>
        <Paragraph>
          A: This depends on the language and software package you&apos;re
          using.
        </Paragraph>
        <ul>
          <li>
            C and C++ programs run from the console and take input and output
            from the console.
          </li>
          <li>
            Java with Eclipse: Input and output can be passed through the
            Console window.
          </li>
          <li>
            Java with JCreator: By default, JCreator 4 captures output. You can
            pass input by typing directly into General Output window. You can
            also bring up the console by going to Configure &gt; Options &gt;
            JDK Tools &gt; Run Application &gt; Edit and unchecking Capture
            output.
          </li>
          <li>
            Python 2.7 with IDLE: The console is built into the scripting
            environment.
          </li>
        </ul>

        <Paragraph>
          <strong>
            Q: Will all the input be in one terminal entry, or will each line be
            separate?
          </strong>
        </Paragraph>
        <Paragraph>
          A: Each problem has its own input format. For some problems, the input
          will be a single integer, for other problems, the input will consist
          of multiple lines. We have designed the problems such that parsing the
          input will be as simple as possible.
        </Paragraph>

        <Paragraph>
          <strong>Q: Will my travel expenses be reimbursed? </strong>
        </Paragraph>
        <Paragraph>
          A: Since this year&apos;s contest is online, there are no travel
          expenses.
        </Paragraph>

        <Paragraph>
          <strong>
            Q: What if I forget to submit the ProCo Participant Waiver Form
            before the day of the contest?
          </strong>
        </Paragraph>
        <Paragraph>
          A: Unfortunately, due to liability issues, you will not be able to
          participate in the contest. Don&apos;t forget!
        </Paragraph>

        <Paragraph>
          <strong>Q: Can international students participate? </strong>
        </Paragraph>
        <Paragraph>
          A: International students are welcome but are not eligible for swag.
        </Paragraph>

        <hr />

        <div>
          Information originally from Lennart Jansson and maintained by Jeremy
          Kim.
        </div>
      </Section>
    </Layout>
  );
}
