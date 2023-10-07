import styled from 'styled-components';

import Layout from '../components/layout';
import { People, Person } from '../components/people';
import { Title } from '../components/section';

const Container = styled.div`
  margin-bottom: 60px;
`;

export default function Contact() {
  return (
    <Layout title="Officers" pageName="officers">
      <Container>
        <Title>Meet the ACM Officers!</Title>
        <People title="2023-2024" startShown={true}>
          <Person name="Scott Hickmann" year={2025} position="Co-President" />
          <Person name="Nathan Chi" year={2026} position="Co-President" />
          <Person name="Kevin Li" year={2025} position="Vice-President" />
          <Person name="Sydney Yan" year={2025} position="Financial Officer" />
          <Person name="Hannah Kim" year={2024} position="Financial Officer" />
          <Person
            name="Kenan Hasanaliyev"
            year={2025}
            position="MLab Co-Director"
          />
          <Person
            name="Conner Takehana"
            year={2026}
            position="MLab Co-Director"
          />
          <Person name="Tanmay Garg" year={2026} position="ProCo Director" />
          <Person
            name="Ian Ng"
            year={2024}
            position="Puzzle Hunt Co-Director"
          />
          <Person
            name="Bradley Moon"
            year={2025}
            position="Puzzle Hunt Co-Director"
          />
          <Person name="Ishan Khare" year={2025} position="Reading Group" />
          <Person name="William Li" position="Social Chair" />
        </People>
        <People title="Alumni" startShown={false}>
          <Person name="Jeremy Kim" year={2024} position="Co-President" />
          <Person name="Ian Ng" year={2024} position="Co-President" />
          <Person name="Patrick Liu" year={2024} position="MLab Co-Director" />
          <Person
            name="Niveditha Iyer"
            year={2024}
            position="MLab Co-Director"
          />
          <Person name="Bradley Moon" year={2025} position="Vice-President" />
          <Person name="Isaac Dan Zhao" year={2025} position="Vice-President" />
          <Person name="Sonny Young" year={2025} position="Puzzle Hunt Chair" />
          <Person name="Sydney Yan" year={2025} position="Puzzle Hunt Chair" />
          <Person name="Ishan Khare" year={2025} position="Reading Group" />
          <Person
            name="Siddharth Sharma"
            year={2025}
            position="Reading Group"
          />
          <Person name="Rohan Sikand" year={2023} position="Social Chair" />
          <Person name="Rishi Verma" year={2025} position="ProCo Chair" />
          <Person name="Hannah Kim" year={2024} position="Financial Officer" />
          <Person
            name="Scott Hickmann"
            year={2025}
            position="W3Lab Director Webmaster"
          />
          <Person name="Ryan Chi" year={2024} />
          <Person name="Erik Rozi" year={2024} />
          <Person name="William Zhang" year={2024} />
          <Person name="Nathan Kim" year={2024} />

          <Person name="James Zheng" year={2024} />
          <Person name="Rhythm Garg" year={2024} />
          <Person name="Gordon Chi" year={2023} />
          <Person name="Yasmine Mitchell" year={2023} />

          <Person name="Enok Choe" year={2023} />
          <Person name="Mihir Patel" year={2022} />
          <Person name="Vinjai Vale" year={2022} />
          <Person name="Ethan Chi" year={2022} />

          <Person name="Jillian Tang" year={2022} />
          <Person name="Divyahans Gupta" year={2018} />
          <Person name="Allan Jiang" year={2018} />
          <Person name="Addison Leong" year={2018} />

          <Person name="Brandon Yang" year={2018} />
          <Person name="Brendon Go" year={2017} />
          <Person name="Sydney Li" year={2017} />
          <Person name="Nathaniel Okun" year={2017} />

          <Person name="Aaron Brown" year={2016} />
          <Person name="David Eng" year={2016} />
          <Person name="Andrew Luo" year={2016} />
          <Person name="Ray Zhou" year={2016} />

          <Person name="Jenny Hong" year={2015} />
          <Person name="Howon Lee" year={2015} />
          <Person name="Derrick Liu" year={2015} />
          <Person name="Karanveer Mohan" year={2015} />

          <Person name="Vivek Nair" year={2015} />
          <Person name="Karthik Viswanathan" year={2015} />
          <Person name="Yushi Wang" year={2015} />
          <Person name="Alex Atallah" year={2014} />

          <Person name="Catherine Lu" year={2014} />
          <Person name="Evan Shieh" year={2014} />
          <Person name="Ayush Sood" year={2014} />
          <Person name="John Yang-Sammataro" year={2014} />

          <Person name="Daniel Robbins" year={2013} />
          <Person name="Kingston Tam" year={2013} />
          <Person name="Kapil Yedidi" year={2013} />
          <Person name="Feross Aboukhadijeh" year={2012} />

          <Person name="Jake Becker" year={2012} />
          <Person name="Xuwen Cao" year={2012} />
          <Person name="Michael Duong" year={2011} />
          <Person name="Beyang Liu" year={2011} />

          <Person name="David Gobaud" year={2010} />
          <Person name="Greg Goldgof" year={2009} />
          <Person name="Gunjit Singh" year={2008} />
          <Person name="Tongke Xue" year={2007} />
        </People>
      </Container>
    </Layout>
  );
}
