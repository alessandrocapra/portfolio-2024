import { ContactForm } from "../../components/ContactForm";
import { OneColumnSection, MultipleColumnsSection } from "../../components/layout";
import { ProjectHeader, ProjectHighlight, SectionTitle } from "../../components/projects";
import AnimatedPage from "../../components/AnimatedPage";
import ScrollReveal from "../../components/ScrollReveal";
import { ProjectImage } from "../../components/images";

export default function WhistleblowerProject() {
  return (
    <AnimatedPage>
      <div className="text-gray-900 dark:text-gray-300">
        <ProjectHeader title='Whistleblower platform' tags={['UX Design', 'UI Design']} />
        
        <ScrollReveal>
          <ProjectHighlight text='A whistleblowing platform allowing organizations to embed a workflow into their existing system that enables employees to freely speak up about misconducts.' />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <ProjectImage
            src="/images/projects/whistleblower/whistleblower-concept.png"
            alt="Whistleblower concept"
          />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <MultipleColumnsSection>
            <div className="max-w-prose">
              <SectionTitle>Concept</SectionTitle>
              <p>
                A whistleblower is <span className="italic">"one who reveals wrongdoing within an organization to the public or to those in positions of authority"</span>. In order to allow employees to freely and safely raise their voice if they witness misbehaviors inside an organization, a proper platform and workflow needs to be embedded within the existing system.
              </p>
              <p>My role in this project was to gather business requirements from stakeholders, discuss and redefine them through low-fidelity wireframes. Lastly, I delivered the final UI, focusing on the handoff to developers as well (from Sketch to Zeplin).</p>
            </div>
            <div className="relative overflow-y-hidden">
              <ProjectImage
                src="/images/projects/whistleblower/whistleblower-overview.png"
                alt="Whistleblower overview"
                hasShadow
              />
            </div>
          </MultipleColumnsSection>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <OneColumnSection>
            <SectionTitle>From wireframes to UI</SectionTitle>
            <p>
              The project consisted in two main parts: the SaaS owner management interface, which allows to define settings such as pricing and user management amongst other features; the second part, which is the one used by the organizations, includes users and permissions management, creation of customized form templates and many other features. Following the wireframe / requirement definition phase, the UI was created based on the previous work.
            </p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <div className="lg:space-y-8">
              <ProjectImage
                src="/images/projects/whistleblower/whistleblower-wf-ui.png"
                alt="Whistleblower wireframes and UI"
                hasShadow
              />
              <ProjectImage
                src="/images/projects/whistleblower/whistleblower-wf.png"
                alt="Whistleblower wireframes"
                hasShadow
              />
            </div>
            <div className="lg:flex lg:items-center">
              <ProjectImage
                src="/images/projects/whistleblower/whistleblower-ui.png"
                alt="Whistleblower UI"
                hasShadow
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <OneColumnSection>
            <SectionTitle>Result</SectionTitle>
            <p>The design was delivered through Zeplin, so that developers could have an overview of the screens and application workflow while being able to access specifics of the design (colors, typography etc.) that could be directly translated to code.</p>
          </OneColumnSection>
        </ScrollReveal>

        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </div>
    </AnimatedPage>
  )
}
