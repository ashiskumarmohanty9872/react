import bannerBackground from "../assets/newbanner.jpg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-16 text-3xl md:text-5xl font-bold underline text-center">
          My Expertise
        </h1>
        {/* box section */}
      </div>

      <div className="box-container flex flex-col md:flex-row items-center justify-between my-16 space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-16 lg:px-32">
        {/* Expertise Text Section */}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
            padding: "50px",
            borderRadius: "20px",
          }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              I love these technologies
            </h1>
            <p>
              I specialize in developing scalable and secure backend systems and
              enterprise-grade applications. With its platform independence,
              extensive libraries, and strong community support, Java remains a
              cornerstone in crafting reliable and high-performance software
              solutions.
            </p>
            <button className="text-sm md:text-xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
              Hire Me
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="flex flex-wrap justify-center space-x-3 w-full md:w-3/4">
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              JAVASCRIPT
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              BOOTSTRAP
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              TAILWIND CSS
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              REACT JS
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              MYSQL
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              MONGODB
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              NODE JS
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              EXPRESS JS
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              HTML
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              AWS Cloud
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
              JAVA
            </p>
            <p className="bg-gray-300 w-fit px-3 py-2 rounded-full mt-2 hover:bg-orange-500 cursor-pointer">
                C
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;