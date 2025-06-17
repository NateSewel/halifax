const CallToAction = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 bg-primary text-white dark:text-white">
      <div className="md:w-3/4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          READY TO CONNECT WITH PROFESSIONALS IN HALIFAX
        </h2>
        <p className="text-lg mb-8">
          Join us as we make networking more personal, impactful, and rewarding.
          Stay connected and be part of LinkedIn Local Halifax!
        </p>
        <button className="bg-white text-custom-primary hover:bg-gray-100 font-bold py-3 px-8 inline-flex items-center dark:text-white dark:bg-text">
          REGISTER NOW
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
