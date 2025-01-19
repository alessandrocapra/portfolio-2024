
function App() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <div className="sm:flex  sm:gap-4">
        <div className="sm:w-1/2 sm:flex sm:flex-col sm:justify-center lg:w-2/3">
          <h1 className="font-semibold mb-4">Alessandro Capra</h1>
          <div className="text-md max-w-prose">
            <p>
              I'm a senior frontend engineer from Italy, lived in Germany, Finland and currently living in the Netherlands
            </p>
            <p>
              I strive to <span className="font-bold">write code that turns into value</span>, both for users and the business
            </p>
          </div>
        </div>
        <img src='/images/hike-01.jpeg' alt='Me hiking in the mountains' className="rounded-lg w-full h-auto object-cover sm:w-1/2 lg:w-1/3" />
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
  );
}

export default App;
