import { ContactForm } from "../../components/ContactForm"
import { OneColumnSection, MultipleColumnsSection } from "../../components/layout"
import { BulletList, NiceInlineLink, ProjectHeader, ProjectHighlight, SectionTitle } from "../../components/projects"

export const GamifiedRespiratoryExercisesProject = () => {
  return (
    <div>
      <ProjectHeader title='Gamified respiratory exercises' tags={['UX Design', 'Game Design', 'Hardware', 'Development']} />
      <ProjectHighlight text='A custom breath-analysing hardware coupled with a videogame to encourage children affected by Duchenne Muscular Dystrophy to improve their breathing independently, outside of therapy hours.' />
      <OneColumnSection>
        <SectionTitle>The concept</SectionTitle>
        <p>Children affected by Duchenne Muscular Dystrophy need to constantly exercise the general muscle functionality through several physical activities, such as swimming and cycling. In the latest stage of the disease the heart and the lungs also start unfortunately to be affected. Especially in this advanced stage, supplementary breathing exercises are crucial to keep the current breathing levels. My Master’s thesis focused on this goal, aiming to offer a solution to increase the engagement in independent breathing exercises outside therapy hours.</p>
        <p>The full thesis can be found in the <NiceInlineLink to="https://purl.utwente.nl/essays/76171">University of Twente theses repository</NiceInlineLink>.</p>
      </OneColumnSection>
      <MultipleColumnsSection>
        <article className="max-w-prose">
          <SectionTitle>Research: data gathering and analysis</SectionTitle>
          <p>The main stakeholders involved in this project were:</p>
          <BulletList>
            <li>children affected by Duchenne Muscular Dystrophy (DMD);</li>
            <li>
              parents of the aforementioned children;
            </li>
            <li>therapists of the Roessingh Revalidatie Centrum in Enschede, the Netherlands.</li>
          </BulletList>
          <p>To get a deeper understanding about the user behaviors and the context of use, I used two different methods to gather data:</p>
          <BulletList>
            <li>semi-structured interviews, which consist in following a script but allowing to diverge if interesting insights arise; </li>
            <li>observations, to see the real user behavior (many times what the people say do not match what they do).</li>
          </BulletList>
          <p>The recordings of the interviews were transcribed to ease the process of thematic analysis.</p>
        </article>
        <img className="rounded lg:w-1/2 xl:w-1/3 xl:mx-auto" src="/images/projects/gamified-respiratory-exercises/user-research.jpg" />
      </MultipleColumnsSection>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-8 py-4 lg:py-8 divid">
        <article>
          <h3 className="text-xl font-medium">Children</h3>
          <BulletList className="text-gray-500 md:[&>li]:text-base">
            <li>CHANGE THIS</li>
          </BulletList>
        </article>
        <article>
          <h3 className="text-xl font-medium">Therapists</h3>
          <BulletList className="text-gray-500 md:[&>li]:text-base">
            <li>home training is ideal: safe without therapist assistance, gamification as essential element for retention.</li>
            <li>children are busy, motivation to exercise at home is low.</li>
            <li>therapists need control over the therapy: weekly planning of exercises, ability to change settings to keep children challenged and calibration of breath function.</li>
            <li>social gaming is important: ability to play with friends online is highly desirable.</li>
            <li>add features that are missing in similar products, for instance saving calibration data to see the performance over time.</li>
          </BulletList>
        </article>
        <article>
          <h3 className="text-xl font-medium">Parents</h3>
          <BulletList className="text-gray-500 md:[&>li]:text-base">
            <li>lack of motivation: given the children’s busy schedule, not much effort is put in the exercises that should be carried out at home.</li>
            <li>autonomy: children are dependent on their parents for most tasks. However, videogames offer them a sense of control over a virtual world.</li>
            <li>preference for group therapy: children seem more engaged when they exercise with others.</li>
            <li>hide therapy behind a game: having the children forget that they are doing therapy while playing a game seems to enhance their motivation.</li>
          </BulletList>
        </article>
      </div>
      <ContactForm />
    </div>
  )
}
