import AnimatedPage from "./components/AnimatedPage";
import { ProfileImage } from "./components/images";

function App() {
  return (
    <AnimatedPage>
      <div className="flex flex-col gap-8 sm:gap-12">
        <div className="flex flex-col md:flex-row sm:gap-8 items-center">
          <ProfileImage
            src='/images/hike-01.jpeg'
            alt='Hiking in the mountains'
          />
          <div className="sm:w-3/4 sm:flex sm:flex-col sm:justify-center">
            <div className="text-md mt-4 sm:mt-0">
              <p>I'm Alessandro, a senior frontend engineer from Italy, now based in the Netherlands.</p>
              <p>With a background in UX design before transitioning to engineering, I've developed a comprehensive view of product development. This combination has proven invaluable in my work, since I can understand the business/user needs and the technical constraints when building products.</p>
              <p>I thrive on taking ownership of projects and naturally connect with cross-functional teams - abilities I've strengthened both through a Product Owner course and years of collaborative work.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-mono pb-4">TLDR;</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <span className="font-semibold">Frontend engineer</span> | 7+ YOE
            </li>
            <li>
              Experienced in crafting web (<span className="text-gray-900">React, NextJS</span>) and mobile (<span className="text-gray-900">React Native</span>) experiences
            </li>
            <li>
              Comfortable in both <span className="text-gray-900">startup chaos</span> and <span className="text-gray-900">corporate structure</span>; from greenfield projects to maintaining complex legacy systems
            </li>
            <li>
              Focused on <span className="font-semibold">reducing complexity</span>: from avoiding overengineered solutions to finding simpler ways to achieve business goals
            </li>
            <li>
              Tech enthusiast always eager to explore new tools and approaches
            </li>
          </ul>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default App;
