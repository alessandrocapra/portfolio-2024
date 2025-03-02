import { ContactForm } from "../../components/ContactForm"
import { OneColumnSection, MultipleColumnsSection } from "../../components/layout"
import { BulletList, NiceInlineLink, ProjectHeader, ProjectHighlight, SectionTitle } from "../../components/projects"
import AnimatedPage from "../../components/AnimatedPage"
import ScrollReveal from "../../components/ScrollReveal"
import { ProjectImage } from "../../components/images"

export const GamifiedRespiratoryExercisesProject = () => {
  return (
    <AnimatedPage>
      <div className="text-gray-900 dark:text-gray-300">
        <ProjectHeader title='Gamified respiratory exercises' tags={['UX Design', 'Game Design', 'Hardware', 'Development']} />

        <ScrollReveal>
          <ProjectHighlight text='A custom breath-analysing hardware coupled with a videogame to encourage children affected by Duchenne Muscular Dystrophy to improve their breathing independently, outside of therapy hours.' />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <OneColumnSection>
            <SectionTitle>The concept</SectionTitle>
            <p>Children affected by Duchenne Muscular Dystrophy need to constantly exercise the general muscle functionality through several physical activities, such as swimming and cycling. In the latest stage of the disease the heart and the lungs also start unfortunately to be affected. Especially in this advanced stage, supplementary breathing exercises are crucial to keep the current breathing levels. My Master's thesis focused on this goal, aiming to offer a solution to increase the engagement in independent breathing exercises outside therapy hours.</p>
            <p>The full thesis can be found in the <NiceInlineLink to="https://purl.utwente.nl/essays/76171">University of Twente theses repository</NiceInlineLink>.</p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <MultipleColumnsSection>
            <article className="max-w-prose">
              <SectionTitle>Research: data gathering and analysis</SectionTitle>
              <p>The main stakeholders involved in this project were:</p>
              <BulletList>
                <li>children affected by Duchenne Muscular Dystrophy (DMD);</li>
                <li>parents of the aforementioned children;</li>
                <li>therapists of the Roessingh Revalidatie Centrum in Enschede, the Netherlands.</li>
              </BulletList>
              <p>To get a deeper understanding about the user behaviors and the context of use, I used two different methods to gather data:</p>
              <BulletList>
                <li>semi-structured interviews, which consist in following a script but allowing to diverge if interesting insights arise;</li>
                <li>observations, to see the real user behavior (many times what the people say do not match what they do).</li>
              </BulletList>
              <p>The recordings of the interviews were transcribed to ease the process of thematic analysis.</p>
            </article>
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/user-research.jpg"
              alt="User research"
              hasShadow
              aspectRatio="unset"
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-8 py-4 lg:py-8 divid">
            <article>
              <h3 className="text-xl font-medium">Children</h3>
              <p className="text-gray-500 dark:text-gray-400 md:text-base my-0">This user group was nearly impossible to interview, given the cognitive impairment that many subjects exhibited. For this reason, the most interesting insights provided by this group have been collected during the testing/observation phase.</p>
            </article>
            <article>
              <h3 className="text-xl font-medium">Therapists</h3>
              <BulletList className="text-gray-500 dark:text-gray-400 md:[&>li]:text-base">
                <li>home training is ideal: safe without therapist assistance, gamification as essential element for retention.</li>
                <li>children are busy, motivation to exercise at home is low.</li>
                <li>therapists need control over the therapy: weekly planning of exercises, ability to change settings to keep children challenged and calibration of breath function.</li>
                <li>social gaming is important: ability to play with friends online is highly desirable.</li>
                <li>add features that are missing in similar products, for instance saving calibration data to see the performance over time.</li>
              </BulletList>
            </article>
            <article>
              <h3 className="text-xl font-medium">Parents</h3>
              <BulletList className="text-gray-500 dark:text-gray-400 md:[&>li]:text-base">
                <li>lack of motivation: given the children's busy schedule, not much effort is put in the exercises that should be carried out at home.</li>
                <li>autonomy: children are dependent on their parents for most tasks. However, videogames offer them a sense of control over a virtual world.</li>
                <li>preference for group therapy: children seem more engaged when they exercise with others.</li>
                <li>hide therapy behind a game: having the children forget that they are doing therapy while playing a game seems to enhance their motivation.</li>
              </BulletList>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <OneColumnSection>
            <SectionTitle>Conceptual design</SectionTitle>
            <p>On an abstract level, the system works as follows:</p>
            <BulletList>
              <li>When the child inhales or exhales through the breathing sensor, the data is processed and mapped to a range of values by the microcontroller embedded in the custom hardware device. These values are then sent over WiFi to a SocketIO server in real-time, which also broadcasts it to the connected clients (the browser where the game is played).</li>
              <li>Depending on the information received by the server, the game character will move up or down according to the breathing pattern (inhalation / exhalation) and its intensity (stronger = faster movement).</li>
              <li>Once the level has been completed, the ranking is shown to offer a comparison with other players (gamification element). All scores are saved on the database</li>
            </BulletList>
            <p>Making the game accessible to all the children means also to offer calibration, which adapts the game controls to every child's breathing functionality. This feature is offered and can be carried out before any game starts, also saving this data on the database to allow further examination by the therapist.</p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <MultipleColumnsSection>
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/technical_design.png"
              alt="Technical design"
              hasShadow
            />
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/calibration.png"
              alt="Calibration screen"
              hasShadow
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <MultipleColumnsSection>
            <article className="max-w-prose">
              <SectionTitle>Hardware</SectionTitle>
              <p>Several sensors allow to measure breath, such as infrared sensors to sense chest movements, wind sensors, anemometers and many others discussed in my thesis. The requirements for the project included the measurement of direction, strenght and duration of the breathing pattern.</p>
              <p>Eventually, the choice fell on the MPXV7002DP differential pressure sensor, given its reliability, speed and fulfilment of all the aforementioned requirements.</p>
            </article>
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/master-thesis-schema.png"
              alt="Hardware schema"
              hasShadow
              aspectRatio="4/3"
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <MultipleColumnsSection>
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/master-thesis-circuit.png"
              alt="Circuit design"
              hasShadow
              aspectRatio="4/3"
            />
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/master-thesis-casing.png"
              alt="Hardware casing"
              hasShadow
              aspectRatio="4/3"
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <OneColumnSection>
            <SectionTitle>Game design</SectionTitle>
            <p>Nowadays many video-game genres exist, and several were considered as candidates for this project. Given the limited resources available, the feedback from the therapists and the parents helped to steer the choice towards a 2D platformer. The reasons behind this choice consisted on the children being already familiar with this type of games (according to parents and therapists).</p>
            <p>A training mode is offered before the game starts, in order to practice with the controls and have some additional tips on when the player should breath in and out without affecting the player's ranking.</p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <MultipleColumnsSection>
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/master-thesis-training.png"
              alt="Training mode"
              hasShadow
              aspectRatio="unset"
            />
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/master-thesis-ranking.png"
              alt="Ranking screen"
              hasShadow
              aspectRatio="unset"
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <OneColumnSection>
            <SectionTitle>Testing</SectionTitle>
            <p>The testing of the final prototype involved both children and their therapists. The latter would assist the former and give feedback on the usability on the interface and their impressions on how the children reacted to the game. The children's feedback was instrumental in evaluating the game design and controls.</p>
            <p>In total, 4 children and 3 therapists participated. The testing sessions were filmed for further analysis, since I was both the moderator and the note taker. Observations were fundamental in collecting information based on the actual behavior of the participants. Moreover, semi-structured interviews were utilized to evaluate the children impressions at the end of the game, while the therapists were asked to give their opinion on the game and how it could be further improved.</p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article>
              <h3 className="text-xl font-medium">Usability issues</h3>
              <BulletList className="text-gray-500 dark:text-gray-400 md:[&>li]:text-base">
                <li>Nowadays many video-game genres exist, and several were considered as candidates for this project. Given the limited resources available, the feedback from the therapists and the parents helped to steer the choice towards a 2D platformer.</li>
                <li>The reasons behind this choice consisted on the children being already familiar with this type of games (according to parents and therapists).</li>
                <li>A training mode is offered before the game starts, in order to practice with the controls and have some additional tips on when the player should breath in and out without affecting the player's ranking.</li>
              </BulletList>
            </article>

            <article>
              <h3 className="text-xl font-medium">Gamification elements</h3>
              <BulletList className="text-gray-500 dark:text-gray-400 md:[&>li]:text-base">
                <li>The testing session confirmed the value of including gamification elements within the game.</li>
                <li>The ranking system was highly effective, since many participants wanted to play another game once they saw that their friends previously reached a higher score.</li>
                <li>This, in return, translates to a increased retention and engagement with the game and, consequently, with the breathing exercises.</li>
              </BulletList>
            </article>

            <article>
              <h3 className="text-xl font-medium">Level and hardware design</h3>
              <BulletList className="text-gray-500 dark:text-gray-400 md:[&>li]:text-base">
                <li>The game was quite difficult to play according to the children. The main issue seemed to be the close proximity of breathing actions to control the game character, therefore making the participants pretty tired.</li>
                <li>The therapists suggested to insert more pauses between the actions required to control the game to avoid fatigue.</li>
                <li>The filter attached to the tube where the user needs to exhale / inhale could be redesigned for a more comfortable gaming experience.</li>
                <li>The participants were unable to use their hands to hold the tube, requiring assistance from the therapist/parent or extensive use of mouth muscles to hold the filter.</li>
                <li>A possible solution would be a flexible tube that can hold its position, similar to a desk lamp with an extensible arm.</li>
              </BulletList>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <MultipleColumnsSection>
            <ProjectImage
              src="/images/projects/gamified-respiratory-exercises/master-thesis-settings.png"
              alt="Settings screen"
              hasShadow
              aspectRatio="4/3"
            />
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal>
          <OneColumnSection>
            <SectionTitle>Learnings</SectionTitle>
            <p>The most notable learning experience in this project consisted in realizing how important an iterative process is. Since the whole project was researched, ideated and developed in roughly 4 months, some iterations had to be skipped to respect the given timeframe. The usability issues that emerged, regarding game design, user interface and hardware design, could have been spotted way earlier with low-fidelity versions and therefore be fixed along the way.</p>
            <p>Another point of reflection regards the power of user research, in particular the qualitative part. Observations were very instrumental in revealing potential pitfalls, which were not communicated by the participants themselves during the testing phase. Being an emphatic and focused observer allows to gather insights that can steer a project to the right direction. Interviews are also a very powerful mean, especially in the initial divergent phase of exploration.</p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </AnimatedPage>
  )
}
