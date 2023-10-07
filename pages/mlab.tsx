import styled from 'styled-components';

import Layout from '../components/layout';
import { People, Person } from '../components/people';
import { Paragraph, Section, Title } from '../components/section';

const EventContainer = styled.div`
  display: flex;
`;

const EventText = styled.p`
  font-size: 18px;
  line-height: 1.8em;
  margin-bottom: 0;
`;

const EventDate = styled(EventText)`
  flex: 3;
`;

const EventTitle = styled(EventText)`
  flex: 4;
  font-weight: bold;
`;

function Event({ date, title }: { date: Date; title: string }) {
  return (
    <EventContainer>
      <EventDate>{date.toDateString().replace(' 2023', '')}</EventDate>
      <EventTitle>{title}</EventTitle>
    </EventContainer>
  );
}

const PublicationContainer = styled.div`
  margin: 20px 0;
`;

const PublicationTitle = styled.h3`
  font-weight: bold;
`;

const PublicationAuthors = styled.div`
  font-size: 15px;
  line-height: 1.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const PublicationDescription = styled.div`
  font-size: 15px;
  line-height: 1.5em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const PublicationSpacer = styled.hr`
  font-weight: bold;
`;

function Publication({
  title,
  authors,
  description
}: {
  title: string;
  authors: string;
  description: string;
}) {
  return (
    <PublicationContainer>
      <PublicationTitle>{title}</PublicationTitle>
      <PublicationAuthors>{authors}</PublicationAuthors>
      <PublicationDescription>{description}</PublicationDescription>
      <PublicationSpacer />
    </PublicationContainer>
  );
}

export default function Contact() {
  return (
    <Layout title="MLab" pageName="mlab">
      <Section id="mlab">
        <Title>MLab</Title>
        <Paragraph>
          ACMLab is Stanford&apos;s premier machine learning club. Its goal is
          to teach anyone with basic CS experience machine learning. After an
          intensive ramp-up workshop in the fall, members work on publishing
          papers at top ML conferences and workshops. We have published 6
          workshop papers so far at top conferences and workshops such as ACL
          and ICLR. Alumni have gone on to Google AI, Stanford ML Group,
          Stanford NLP Group, and VMWare.
        </Paragraph>
      </Section>
      <Section id="board">
        <People title="Board" startShown={true} bigTitle>
          <Person name="Kenan Hasanaliyev" year={2025} position="Co-Director" />
          <Person name="Conner Takehana" year={2026} position="Co-Director" />
        </People>
      </Section>
      <Section id="schedule">
        <Title>Fall 2023 Schedule</Title>
        <Paragraph>
          This year, we&apos;ll be meeting weekly on Wednesday from 4:30-6:00pm
          PT.
        </Paragraph>
        <Event date={new Date(2023, 9, 8)} title="ACM Info Session" />
        <Event
          date={new Date(2023, 9, 11)}
          title="Workshop 1: Shallow Neural Networks"
        />
        <Event
          date={new Date(2023, 9, 18)}
          title="Workshop 2: Deep Neural Networks with Pytorch"
        />
        <Event date={new Date(2023, 9, 25)} title="Workshop 3: CNNs" />
        <Event
          date={new Date(2023, 10, 1)}
          title="Workshop 4: Implementation I"
        />
        <Event
          date={new Date(2023, 10, 8)}
          title="Workshop 5: Implementation II"
        />
        <Event date={new Date(2023, 10, 15)} title="Workshop 6: Transformers" />
        <Event date={new Date(2023, 10, 29)} title="Onboarding Projects Demo" />
      </Section>
      <Section id="recent-projects">
        <Title>Recent Projects</Title>
        <h2>SemEVAL</h2>
        <Paragraph>
          We submitted to the Workshop on Semantic Evaluation&apos;s Task 1
          (lexical complexity modelling) and Task 8 (automatically extracting
          measurements from scientific text). Our teams performed competitively
          on both tasks, including second place in one of the Task 8
          subcategories. Our task description papers will appear at SemEval at
          ACL 2021.
        </Paragraph>
        <h2>Google BIG-Bench</h2>
        <Paragraph>
          Members proposed 4 tasks to be used in Google&apos;s BIG-Bench
          challenge. The purpose of this challenge was to create a collaborative
          benchmark for enourmous language models like GPT-3. MLab submitted
          tasks about temporal sequences, logic puzzles, sarcasm, and IPA
          translation.
        </Paragraph>
        <h2>VQA</h2>
        <Paragraph>
          We are currently preparing a submission on the ChartQA workshop at
          CVPR 2021, aiming to automatically parse structured information from
          diverse chart-based visual representations.
        </Paragraph>
      </Section>
      <Section id="recent-publications">
        <Title>Recent Publications</Title>
        <Publication
          title="An IPA Translation Task for Probing Large Language Models."
          authors="O Zhang, EA Chi"
          description="The Workshop on Enormous Language Models @ ICLR 2021."
        />
        <Publication
          title="SNARKS: Single-Edit Non-Contextual Adversarial Knowledge-agnostic Sarcasm."
          authors="R Chi, I Ng, EA Chi, T Chang"
          description="The Workshop on Enormous Language Models @ ICLR 2021."
        />
        <Publication
          title="A Logic Puzzles Task for Probing Large Language Models."
          authors="R Garg, W Zhang, R Sikand, J Kim, EA Chi, J Tang"
          description="The Workshop on Enormous Language Models @ ICLR 2021."
        />
        <Publication
          title="A Temporal Sequences Task for Probing Large Language Models."
          authors="H Kim, J Zheng, EA Chi†"
          description="The Workshop on Enormous Language Models @ ICLR 2021."
        />
        <Publication
          title="Stanford MLab at SemEval Shared Task 8: 48 Hours is All You Need."
          authors="P Liu, NS Iyer, E Rozi, EA Chi†"
          description="SemEval 2021 @ ACL-IJCNLP 2021."
        />
        <Publication
          title="Stanford MLab at SemEval Shared Task 1: Tree-Based Methods for Lexical Complexity Prediction."
          authors="E Rozi*, NS Iyer*, E Choe, G Chi, KJ Lee, K Liu, P Liu, Z Lack, J Tang†, EA Chi†"
          description="SemEval 2021 @ ACL-IJCNLP 2021."
        />
      </Section>
    </Layout>
  );
}
