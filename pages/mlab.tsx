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
  console.log(date);
  return (
    <EventContainer>
      <EventDate>{date.toDateString().replace(' 2024', '')}</EventDate>
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
          <Person name="Ryan Rong" year={2028} position="Director" />
          <Person name="Sabrina Yen-Ko" year={2028} position="Director" />
        </People>
      </Section>
      <Section id="tas">
        <Title>Teaching Assistants</Title>
        
        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/arpandeep_khatua.jpeg" 
            alt="Arpandeep Khatua" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Arpandeep Khatua</h3>
            <Paragraph>
              Arpandeep Khatua is an MSCS student at Stanford interested in large language model reasoning, alignment, and evaluation, particularly in mid- and post-training analysis, adversarial behavior, and inconsistency detection.
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/baani_kaur.png" 
            alt="Baani Kaur" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Baani Kaur</h3>
            <Paragraph>
              {/* Description for Baani Kaur - to be added when provided */}
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/kaitlyn_wang.png" 
            alt="Kaitlyn Wang" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Kaitlyn Wang</h3>
            <Paragraph>
              Kaitlyn is a sophomore studying Math/CS and Art History. She's worked on ML/astrophysics, open-source projects at SAIL, and is currently at Stanford NLP studying pretraining-time interventions to shape RL reasoning behavior in LLMs.
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/mark_athiri.png" 
            alt="Mark Athiri" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Mark Athiri</h3>
            <Paragraph>
              Mark Athiri is a senior at Stanford studying Computer Science (AI, Systems). He researches security AI under Profs. Boneh, Liang, and Ho, building RL training infrastructure for LLM agents. His work spans ML systems deployment, security research, and infrastructure engineering across multiple companies.
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/rany_stephan.jpg" 
            alt="Stephan Rany" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Stephan Rany</h3>
            <Paragraph>
              Rany is an M.S. student in Mathematical and Computational Engineering @ Stanford. He works on convex optimization-driven portfolio models, HJB models for fixed-income microstructure, and machine learning models for computational pathology. He is excited to help turn ideas into well-scoped, clear and reproducible ML projects.
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/rydham_goyal.jpg" 
            alt="Rydham Goyal" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Rydham Goyal</h3>
            <Paragraph>
              Rydham is a junior studying computer science and statistics with a focus on AI and data science. He is passionate about applying machine learning to solve real-world problems in healthcare, finance, and automation.
            </Paragraph>
          </div>
        </div>

        <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
          <img 
            src="/TAs/vidur_gupta.png" 
            alt="Vidur Gupta" 
            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              flexShrink: 0
            }} 
          />
          <div>
            <h3 style={{ fontWeight: 'bold', marginBottom: '10px', marginTop: '0' }}>Vidur Gupta</h3>
            <Paragraph>
              Vidur is a second year masters student studying electrical engineering and computer science at Stanford, working on the intersection of AI/ML, natural language, and embedded systems. He is interested in working on real-world problems to use natural language to control real world physical devices in a secure and private way.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section id="meetings">
        <Title>Meeting Information</Title>
        <Paragraph>
          Meeting Time: 7:30 - 9:00 p.m. Thursdays at CoDA B90.
        </Paragraph>
        <Paragraph>First meeting this Thursday, Oct 9th!</Paragraph>
        <Paragraph>
          Contact: Ryan Rong (ryanrong@stanford.edu), Sabrina Yen-Ko
          (syenko@stanford.edu)
        </Paragraph>
      </Section>
      <Section id="project">
        <Title>Winter 2025 SemEval</Title>
        <Paragraph>
          We submitted to Tasks 2, 3, 8, and 11 of the{' '}
          <a href="https://semeval.github.io/SemEval2025/">
            Workshop on Semantic Evaluation
          </a>
          .
        </Paragraph>
      </Section>
      <Section id="recent-projects">
        <Title>Recent Projects</Title>
        <h2>Fall 2024 Onboarding Project</h2>
        <Paragraph>
          This year 30 teams with 94 participants participated in the Fall
          Onboarding Project, developing custom models for the task of bird
          classification.
        </Paragraph>
        <h2>SemEVAL</h2>
        <Paragraph>
          We submitted to the Workshop on Semantic Evaluation&apos;s Task 1
          (lexical complexity modelling) and Task 8 (automatically extracting
          measurements from scientific text). Our teams performed competitively
          on both tasks, including second place in one of the Task 8
          subcategories. Our task description papers appeared at SemEval at ACL
          2021.
        </Paragraph>
        <h2>Google BIG-Bench</h2>
        <Paragraph>
          Members proposed 4 tasks to be used in Google&apos;s BIG-Bench
          challenge. The purpose of this challenge was to create a collaborative
          benchmark for enourmous language models like GPT-3. MLab submitted
          tasks about temporal sequences, logic puzzles, sarcasm, and IPA
          translation.
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
