import { ContactForm } from "../../components/ContactForm";
import { OneColumnSection, MultipleColumnsSection } from "../../components/layout"
import { ProjectHeader, ProjectHighlight, SectionTitle } from "../../components/projects";


export default function CustodianProject() {
  return (
    <div>
      <ProjectHeader title='Crypto custodian mobile app' tags={['UX Design', 'UI Design', 'React Native']} />
      <ProjectHighlight text='A mobile application (developed in React Native) that showcases the capabilites of the Quantoz Nexus API. The main features include buying, selling and swapping between different cryptocurrencies.' />
      <img className="rounded py-8" src="/images/projects/custodian/custodian-showcase.png" />
      <MultipleColumnsSection>
        <div className="max-w-prose">
          <SectionTitle>Concept</SectionTitle>
          <p>This mobile app showcases the capabilities of the Quantoz Nexus API, and it is meant to be used installed and tried out by potential clients.</p>
          <p>We chose React Native as framework since we could support both Android and iOS with one unified codebase. My role in the project covered the initial requirements gathering, the creation of wireframes to discuss an initial version and improve it iteratively through several feedback sessions. Moreover, I created the screens and components in React Native, using Native Base as a UI framework to speed up development.</p>
        </div>
        <img className="rounded lg:w-1/2 xl:w-1/3 xl:mx-auto" src="/images/projects/custodian/custodian-concept.png" />
      </MultipleColumnsSection>
      <MultipleColumnsSection reverse={true}>
        <div className="max-w-prose">
          <article>
            <SectionTitle>Requirements, wireframes and UI</SectionTitle>
            <p>The initial calls with the stakeholders defined the goal of the project: an easy-to-use mobile app that showcases the portfolio of fiat and crypto currencies currently owned by a customer. Additionally, the user must be able to purchase, sell or swap crypto-currencies.</p>
            <p>The initial sketch shown below provided a good starting point for discussion and further definition of information architecture and user experience design. This app showcases the complete workflow of a crypto custodian use case, and can be used by a company to kickstart their own custodian project and manage the compliance and operational part through the Nexus portal.</p>
          </article>
        </div>
        <img className="rounded lg:w-1/2 xl:w-1/3 xl:mx-auto" src="/images/projects/custodian/custodian-wireframes.png" />
      </MultipleColumnsSection>
      <OneColumnSection>
        <SectionTitle>Result</SectionTitle>
        <p>The stakeholders approved the design after some iterative sessions of evaluation in Figma.Once the design got approved, the team discussed the implementation strategy.</p>
        <p>The final choice fell on React Native, due to previous experience with the React framework and the advantage of a single codebase for both Android and iOS apps. I designed and coded components and screens with the help of a UI library for React Native called Native Base, which helped speeding up the UI development.</p>
      </OneColumnSection>
      <ContactForm />
    </div >
  );
}
