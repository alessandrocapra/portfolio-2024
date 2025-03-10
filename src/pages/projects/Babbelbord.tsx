import { ContactForm } from "../../components/ContactForm";
import { OneColumnSection, MultipleColumnsSection, ThreeColumnsSection } from "../../components/layout"
import { BulletList, ProjectHeader, ProjectHighlight, SectionTitle } from "../../components/projects";
import AnimatedPage from "../../components/AnimatedPage";
import ScrollReveal from "../../components/ScrollReveal";
import { ProjectImage } from "../../components/images";

export default function Babbelbord() {
  return (
    <AnimatedPage>
      <div className="text-gray-900 dark:text-gray-300">
        <ProjectHeader title='Babbelbord' tags={['User research', 'Prototyping', 'Development']} />

        <ScrollReveal>
          <ProjectHighlight text='A gamified, personalized conversational system for people with mild moderate dementia and their caretakers/relatives.' />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <ProjectImage
            src="/images/projects/babbelbord/babbelbord.jpg"
            alt="Babbelbord overview"
            aspectRatio="unset"
          />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <OneColumnSection>
            <div className="max-w-prose">
              <SectionTitle>Concept</SectionTitle>
              <p>Dementia is a disease that greatly affects the patient's mental wellbeing as well as his/her relatives'. To tackle this issue, we developed a prototype targeting elderly with mild-moderate dementia to provide a technology-enhanced board game which allows narrative reminiscence through a personalized gaming experience.</p>
              <p>The end goal was to develop a product that would help people affected with dementia to reminisce past memories and reconnect with their relatives.</p>
            </div>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <MultipleColumnsSection contentVerticalAlignment="start">
            <article>
              <SectionTitle>Research</SectionTitle>
              <p className="font-bold">Stakeholders</p>
              <BulletList>
                <li>Relatives from Dementia patients</li>
                <li>Caretakers from Bruggerbosch</li>
                <li>People affected by dementia</li>
              </BulletList>
              <p className="font-bold">Market analysis</p>
              <p>Existing non-pharmaceutical solutions like life story books, online versions which can embed sounds, images and videos. We try to investigate a new solution to explore this approach even further, by also embedding gamification elements</p>
            </article>
            <article>
              <p className="font-bold">Methods</p>
              <p>Observations on-site (difficult to communicate with dementia patients): understanding of environment and social interactions. Interviews with healthy elderly, caregivers and relatives.</p>

              <p className="font-bold">Iterative cycle</p>
              <p>4 iterations in total: vision (structured brainstorming sessions to produce a lot of ideas and then combine them), prototype, evaluation.</p>
              <BulletList>
                <li>First iteration: memory card game only, with wizard of OZ testing</li>
                <li>Second iteration: simple paper prototype, similar to final solution</li>
                <li>Third iteration: Added cards to collect as points, plus special squares with different meanings. A/B testing to see which interface was clearer to use for the caregiver</li>
                <li>Fourth iteration: final version of prototype</li>
              </BulletList>
            </article>
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <ThreeColumnsSection className="lg:items-stretch">
            <ProjectImage
              src="/images/projects/babbelbord/explore.jpg"
              alt="Explore feature"
              aspectRatio="unset"
              objectFit="cover"
            />
            <ProjectImage
              src="/images/projects/babbelbord/discuss.jpg"
              alt="Discussion feature"
              aspectRatio="unset"
              objectFit="cover"
            />
            <ProjectImage
              src="/images/projects/babbelbord/cards.jpg"
              alt="Cards feature"
              aspectRatio="unset"
            />
          </ThreeColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <OneColumnSection>
            <div className="max-w-prose">
              <SectionTitle>Prototyping</SectionTitle>
              <p>The prototyping phase consisted of multiple steps to validate our assumptions and refine the design based on user feedback:</p>
              <BulletList>
                <li>Evaluation of card games with similar purpose</li>
                <li>Low-fidelity prototype: the goal was to quickly develop a rough version of the final system to cheaply test our assumptions and pivot if the testing failed. Used a first set of low-fi cards to play with the elderly and see the reactions, wizard of oz technique to mimic the system behavior. Following phases were with high-fid versions</li>
                <li>Evaluation: with low-fi prototype, test with healthy elderly due to constraints in testing with people with dementia. Follow a task list, think aloud</li>
              </BulletList>
            </div>
          </OneColumnSection>
        </ScrollReveal>

        <MultipleColumnsSection>
          <ScrollReveal direction="left">
            <ProjectImage
              src="/images/projects/babbelbord/game-idea-1.jpg"
              alt="Game idea 1"
              hasShadow
              aspectRatio="4/3"
            />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <ProjectImage
              src="/images/projects/babbelbord/game-idea-2.jpg"
              alt="Game idea 2"
              hasShadow
              aspectRatio="4/3"
            />
          </ScrollReveal>
        </MultipleColumnsSection>

        <OneColumnSection>
          <ScrollReveal direction="left">
            <ProjectImage
              src="/images/projects/babbelbord/wireframe.jpg"
              alt="Wireframe"
              hasShadow
              aspectRatio="unset"
            />
          </ScrollReveal>
        </OneColumnSection>

        <MultipleColumnsSection>
          <ScrollReveal direction="left">
            <ProjectImage
              src="/images/projects/babbelbord/select-players.png"
              alt="Select players screen"
              hasShadow
            />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <ProjectImage
              src="/images/projects/babbelbord/new-game.png"
              alt="Wireframe"
              hasShadow
            />
          </ScrollReveal>
        </MultipleColumnsSection>

        <ScrollReveal direction="left">
          <OneColumnSection>
            <div className="max-w-prose">
              <SectionTitle>Result</SectionTitle>
              <p>The stakeholders approved the design after some iterative sessions of evaluation in Figma.Once the design got approved, the team discussed the implementation strategy.</p>
              <p>The final choice fell on React Native, due to previous experience with the React framework and the advantage of a single codebase for both Android and iOS apps. I designed and coded components and screens with the help of a UI library for React Native called Native Base, which helped speeding up the UI development.</p>
            </div>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <MultipleColumnsSection>
            <div className="max-w-prose">
              <SectionTitle>Testing</SectionTitle>
              <p><span className="font-bold">Observations</span>: number of frowns, smiles, number of questions answered by patients</p>
              <p><span className="font-bold">Interviews</span>: 4 semi-structured interviews with a relative of patients with dementia, two professional caregivers and an expert working in care centres who organizes activities for them. Different abstract categories emerged:</p>
              <BulletList>
                <li>Living environment (context)</li>
                <li>Interaction between other patients/caregivers/relatives</li>
                <li>Characteristics of disease (medical)</li>
                <li>Emotional perception (patient)</li>
                <li>Behaviour (patient)</li>
                <li>Interest (patient)</li>
                <li>Relation/job (caregiver)</li>
                <li>Relatives' emotional connection to the patient</li>
                <li>Feedback on the prototype</li>
                <li>Purpose of the game</li>
                <li>Communication techniques (caregivers/expert)</li>
                <li>Interaction between technology and patients</li>
              </BulletList>
            </div>
            <ProjectImage
              src="/images/projects/babbelbord/testing.jpg"
              alt="Testing session"
              hasShadow
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <OneColumnSection>
            <div className="max-w-prose">
              <SectionTitle>Results</SectionTitle>
              <p>Overall, these were the main findings:</p>
              <BulletList>
                <li>Given limited cognitive abilities, removing many gamified elements to simplify. Revising winning mechanism from collecting cards to reach points could be easier, according to the person organising the activities at the revalidation centre.</li>
                <li>Some remarks on the dimension and robustness of the materials. For instance, we were using a normal die for testing purposes, but different interviewees argued that it was too small to be handled properly by patients. The same goes for game elements, such as the board itself and the squares that compose it: they should be bigger in order to be easily understood and handled by the players.</li>
                <li>Formulation of the questions that should trigger memories. Indeed, some of them are quite complex and long, making it difficult for the patients to process properly. Therefore, we will have to rephrase them in order to be shorter, avoiding using general terms such as "childhood" but being more specific by providing a range age.</li>
              </BulletList>
            </div>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </AnimatedPage>
  );
}
