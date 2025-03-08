import { useNavigate } from "react-router";

export const GenericErrorBoundary = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center  text-center text-gray-900 dark:text-gray-300 bg-white dark:bg-[#121212]">
      <img
        className="w-full max-w-[250px] md:max-w-[350px] mx-auto mb-6 drop-shadow-md"
        src="/images/404.png"
        alt="not found"
      />
      <h1>Whoops</h1>
      <p>
        Something's wrong here :/
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 relative overflow-hidden border-2 border-gray-800 dark:border-gray-200 
                 text-gray-800 dark:text-gray-200 font-medium rounded-lg
                 transition-all duration-300 group focus:outline-none"
      >
        {/* Text layer with z-index to stay above the fill */}
        <span className="relative z-10 transition-colors duration-300 ease-in-out
                        group-hover:text-gray-100/90 dark:group-hover:text-gray-900/90">
          🏡 Go to homepage
        </span>

        {/* Fill animation layer */}
        <span className="absolute inset-0 bg-gray-800/90 dark:bg-gray-200/90 
                        transform origin-left scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-300 ease-out"></span>
      </button>
    </div>
  );
};
