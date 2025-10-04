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

const EventWeek = styled(EventText)`
  flex: 2;
  font-weight: bold;
`;

const EventTitle = styled(EventText)`
  flex: 4;
`;

function Workshop({ week, title }: { week: string; title: string }) {
  return (
    <EventContainer>
      <EventWeek>{week}</EventWeek>
      <EventTitle>{title}</EventTitle>
    </EventContainer>
  );
}

export default function DevLab() {
  return (
    <Layout title="DevLab" pageName="devlab">
      <Section id="devlab">
        <Title>DevLab</Title>
        <Paragraph>
          Web dev courses at Stanford are often scarce, outdated, and hands-off.
          Many people end up building projects by themselves.
        </Paragraph>
        <Title>Goals</Title>
        <ul>
          <li>Develop key skills for full-stack development</li>
          <li>Add a cool project to your portfolio</li>
          <li>Meet new people and start hacking together</li>
          <li>Build real projects and have fun!</li>
        </ul>
      </Section>
      <Section id="board">
        <People title="Board" startShown={true} bigTitle>
          <Person name="Emily Han" year={2027} position="Director" />
          <Person name="Ethan Boneh" year={2027} position="Director" />
        </People>
      </Section>
      <Section id="meetings">
        <Title>Meeting Information</Title>
        <Paragraph>
          Meeting Time: 7:00-8:00 p.m. Mondays
        </Paragraph>
        <Paragraph>
          First meeting this Monday, Oct 7th! Location Soon TBD
        </Paragraph>
        <Paragraph>
          Contact: Emily Han (emilyhyf@stanford.edu), Ethan Boneh (ethanbc@stanford.edu)
        </Paragraph>
      </Section>
      <Section id="workshops">
        <Title>Workshops</Title>
        <Workshop week="Week 3:" title="HTML and React Components" />
        <Workshop week="Week 4:" title="Styling and Deployment" />
        <Workshop week="Week 5:" title="React Hooks" />
        <Workshop week="Week 6:" title="Web APIs and GPT 4" />
        <Workshop week="Week 7:" title="Databases" />
        <Workshop week="Week 8:" title="Routing and Authentication" />
        <Workshop week="Week 9:" title="Thanksgiving" />
        <Workshop week="Week 10:" title="Demos and Social" />
      </Section>
    </Layout>
  );
}