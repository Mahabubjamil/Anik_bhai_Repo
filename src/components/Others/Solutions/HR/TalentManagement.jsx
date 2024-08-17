

const TalentManagement = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl text-center mt-20 ">Project Management</h1>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
        <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
          <div>
            <h5 className="max-w-md mb-6 text-2xl font-normal leading-none ">
              Development
            </h5>
            <p className="mb-6 text-base text-gray-700 md:text-md sm:mb-8 text-justify">
            Talent development refers to the strategic process of identifying, nurturing, and enhancing the skills and abilities of employees to meet current and future organizational needs. It includes various activities such as training, mentoring, career planning, and succession.
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#00B4D8] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
          </div>
        </div>
        
        <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
          <div>
            <h5 className="max-w-md mb-6 text-2xl font-normal leading-none ">
            Optimization
            </h5>
            <p className="mb-6 text-base text-gray-700 md:text-md sm:mb-8 text-justify">
            Talent development refers to the strategic process of identifying, nurturing, and enhancing the skills and abilities of employees to meet current and future organizational needs. It includes various activities such as training, mentoring, career planning, and succession.
            </p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#00B4D8] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
          </div>
        </div>

      </div>
    </div>

        </div>
    );
};

export default TalentManagement;