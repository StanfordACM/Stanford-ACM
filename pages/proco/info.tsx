/* eslint-disable @next/next/no-img-element */

import Layout from '../../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../../components/section';

export default function Contact() {
  return (
    <Layout pageName="proco">
      <Section>
        <Title>ProCo Information</Title>
        <h2>Team Registration</h2>
        <Paragraph>
          Due to the online nature of the contest, Stanford requires a maximum
          of 300 participants. Thus, slots to participate are awarded on a first
          come first serve basis. International students are welcome but are not
          eligible for swag.
        </Paragraph>
        <Paragraph>
          <strong>
            The contest happened on March 5, 2022. Registration has closed.
            Information for next year&apos;s ProCo will be released soon.
          </strong>
        </Paragraph>
        <Paragraph>
          Once you submit your registration form, we will send out a
          confirmation email saying if you were accepted or not to participate.
        </Paragraph>
        <Paragraph>
          Teams can have between one and three students. Students on a team do
          not need to be in the same grade, or have the same level of
          programming experience.
        </Paragraph>
        <Paragraph>
          If we reach our participation cap, any remaining teams will be placed
          on a wait list, and they will be notified as soon as possible if spots
          become available. Once you submit your registration form, you will not
          be allowed to replace team members, only drop them if they are unable
          to attend.
        </Paragraph>
        <h2>Divisions</h2>
        <Paragraph>
          There are two different divisions in the competition: Novice and
          Advanced. A team may compete in the Novice division only if all
          members have less than two years of programming experience. If a team
          member has competed in ProCo or some equivalent contest before, they
          should compete in the Advanced division. Teams with participants who
          are at the Silver or higher level of USACO, should compete in the
          Advanced division.
        </Paragraph>
        <Paragraph>
          If eligible for either division, teams may choose compete in the
          Advanced division. One incentive for doing so, is better prizes.
        </Paragraph>
        <Paragraph>
          The ProCo staff has the right to disqualify any team that does not
          follow these rules of division assignment. If you are unsure what
          division to compete in, please reach out to the ProCo staff at{' '}
          <LinkComponent href="mailto:procostaff2022@gmail.com">
            procostaff2022@gmail.com
          </LinkComponent>
          .
        </Paragraph>
        <h2>Laptops and Equipment</h2>
        <Paragraph>
          Each team member will be responsible for using their own computer and
          WiFi to compete in the contest. Communication among team members can
          be facilitated in any fashion.
        </Paragraph>
        <h2>Prizes</h2>
        <Paragraph>
          Cool prizes will be awarded to the highest-scoring teams and vary year
          to year. Previous first place prizes have included Raspberry Pis, iPad
          Minis and Nintendo 3DSes. This year, our prizes are sponsored by
          Citadel Securities, and Amber by LatticeWork.
        </Paragraph>
        <Title>Rules</Title>
        <h2>Access and Communication</h2>
        <ul>
          <li>
            Each team is allowed to use up to three laptops with Internet
            access.
          </li>
          <li>
            The use of the internet is allowed to access free resources.
            Sentient help is strictly prohibited.
          </li>
          <li>External communication is prohibited.</li>
          <li>
            The only programs allowed are IDE, editors, web browsers, and
            programming tools. The use of all other programs are prohibited.
          </li>
        </ul>
        <h2>Input and Output</h2>
        <ul>
          <li>
            All input will be received from console input (System.in in Java,
            cin in C++, stdin in C, sys.stdin in Python 2.7).
          </li>
          <li>
            All output should be sent to console output (System.out in Java,
            cout in C++, stdout in C, sys.stdout in Python 2.7).
          </li>
          <li>
            Each program will specify its own output format. Format all output
            as closely as possible to the specifications. This includes spacing,
            capitalization, and punctuation. See below for examples for input
            and output.
            <ul>
              <li>
                Java
                <img alt="Java IO" src="/proco/java-io.png" />
              </li>
              <li>
                C++
                <img alt="C++ IO" src="/proco/cpp-io.png" />
              </li>
              <li>
                C
                <img alt="C IO" src="/proco/c-io.png" />
              </li>
              <li>
                Python 2.7
                <img alt="Python 2.7 IO" src="/proco/python2.7-io.png" />
              </li>
            </ul>
          </li>
        </ul>
        <h2>Submissions</h2>
        <ul>
          <li>
            We will be accepting submissions in C, C++, Java, Python 2.7, and
            Python 3.6.
          </li>
          <li>
            Solutions will be graded using GNU C++11, Java 1.8.0, Python 2.7,
            and Python 3.6 on Linux machines.
          </li>
          <li>
            All files must be named in the format specified on your problem
            statement. File extensions must be the following:
            <ul>
              <li>C: problem.c</li>
              <li>C++: problem.cc or problem.cpp</li>
              <li>Java: problem.java</li>
              <li>Python: problem.py</li>
            </ul>
          </li>
          <li>
            Java submissions must follow these rules:
            <ul>
              <li>Name of the main class should be the task name.</li>
              <li>All classes should be in one file.</li>
              <li>Don&apos;t include a package statement.</li>
              <li>Avoid using scanner for efficiency.</li>
            </ul>
          </li>
          <li>
            You will be submitting your (single) code file to us using a web
            interface. If you are using Java and want to create multiple
            classes, put all of the class declarations into one file.
          </li>
        </ul>
        <h2>Contest Format</h2>
        <Paragraph>
          ProCo will consist of 9 - 15 unweighted problems and will last for 3
          hours.
        </Paragraph>
        <Paragraph>
          Submissions will be run on a set of test cases which are not revealed
          to the teams during the contest, and they are accepted as correct if
          they pass on all of the test cases. Teams will be notified whether
          their submission is correct within about a minute. If the submission
          is correct, no further points can be awarded for the problem. If the
          submission is not accepted, teams are free to resubmit the problem.
          There is no limit on the number of submissions per problem.
        </Paragraph>
        <Paragraph>
          The submissions from a team do not all need to be in the same
          language. For example, the same team could solve novA in C, novD in
          Java, and novF in C++.
        </Paragraph>
        <h2>Contest Platform</h2>
        <Paragraph>
          This year, ProCo will be using Codeforces to host the contest. Unlike
          last year, some preparation will be required from participants.
          Participants must create a Codeforces account before filling out the
          registration form, and include their username in the form.
        </Paragraph>
        <Paragraph>
          They will also have to create their team on Codeforces, and report
          their team ID upon check-in the day of the contest. Stay tuned for
          more instructions on how to do this. After registration closes, ProCo
          staff members will also be able to help students do this on the day of
          the contest. Furthermore, we will host office hours to help students
          with doing this ahead of time.
        </Paragraph>
        <h2>Scoring</h2>
        <Paragraph>
          Teams are ranked according to the most problems solved. Teams who
          solve the same number of problems will be ranked in accordance with
          ICPC style penalty points. The team with the lowest number of penalty
          points wins the tiebreaker. The rules for assigning penalty points are
          below:
        </Paragraph>
        <ul>
          <li>
            For every minute it takes to solve a problem, 1 penalty point is
            given upon successful completion of that problem. For example, if a
            team solves problem C at minute 11, they will receive 11 penalty
            points. If the same team then solves problem F at minute 35, they
            will receive 35 penalty points for that problem, and have a
            cumulative penalty of 46 points. Thus, their score is 2 problems,
            and 46 penalty points.
          </li>
          <li>
            Furthermore, for every incorrect submission, 20 penalty points are
            assigned. However, these points are only tabulated upon successful
            completion of this problem. Thus, if a team submits to a problem 5
            times, but never solves that problem, their total penalty points
            will not increase. However, if a team submitted 5 times incorrectly,
            and then solved the problem on the 6th attempt, they would receive 5
            * 20 = 100 additional penalty points for incorrect submissions in
            addition to the time it took for them to solve it.
          </li>
        </ul>
        <Title>Past Contests</Title>
        <Paragraph>
          Past contest results and problems can be found{' '}
          <LinkComponent href="/proco/pastContests">here</LinkComponent>.
        </Paragraph>
        <Title>External Resources</Title>
        <Paragraph>
          In order to prepare for ProCo, you may want to familiarize yourself
          with problems from similar contests. At the following sites you can
          find repositories of problems of varying styles and difficulty. Most
          of these problems are for training purposes and will be harder than
          the problems given. Recommended links (similar format or similar
          difficulty level) are listed first.
        </Paragraph>
        <ul>
          <li>
            <LinkComponent href="http://usaco.org/">USACO</LinkComponent>{' '}
            Algorithmic training and practice
          </li>
          <li>
            <LinkComponent href="http://codeforces.com/">
              CodeForces
            </LinkComponent>{' '}
            Online programming competition
          </li>
          <li>
            <LinkComponent href="https://www.topcoder.com/">
              TopCoder
            </LinkComponent>{' '}
            Online programming competition
          </li>
          <li>
            <LinkComponent href="http://code.google.com/codejam/contest">
              Google CodeJam
            </LinkComponent>{' '}
            More programming practice
          </li>
          <li>
            <LinkComponent href="http://acm.pku.edu.cn/JudgeOnline/problemlist">
              PKU
            </LinkComponent>{' '}
            Algorithmic problem set database
          </li>
          <li>
            <LinkComponent href="https://uva.onlinejudge.org/">
              UVA
            </LinkComponent>{' '}
            More algorithmic training
          </li>
          <li>
            <LinkComponent href="https://projecteuler.net/">
              Project Euler
            </LinkComponent>{' '}
            Math-oriented programming problems
          </li>
        </ul>

        <hr />

        <div>
          Information originally from Lennart Jansson and maintained by Jeremy
          Kim.
        </div>
      </Section>
    </Layout>
  );
}
