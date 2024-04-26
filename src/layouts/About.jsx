import Model from "../Model/model_one";
import Image  from "../assets/2.png";
export default function About() {
    return (
      <>
        <div className="p-20 w-auto flex px-24 justify-center relative">
          <div className="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
            <div className="mr-10">
              <img
                className="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
                src={Image}
                alt="image of myself"
              />
            </div>
            <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
              <h1 className="text-white font-bold text-3xl mt-6 mb-8">
                Hey its me, Aydin Vesali Moghaddam
              </h1>
  
              <p className="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
                I m Aydin, an 18-year-old high schooler with a passion for web
                development. My tech journey started with HTML, CSS, and
                JavaScript, and I was hooked by the thrill of crafting dynamic,
                interactive websites. As I grew, Node.js and ReactJS became my
                go-to tools for building scalable applications. Feel free to
                connect if you have questions, collaboration ideas, or just want
                to discuss the latest in web development!
              </p>
  
              <div className="flex flex-wrap justify-start items-center gap-4">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/iam-aydin"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                    width="20px"
                    height="20px"
                    alt="Github"
                  />
                  <span>Visit my Github</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://www.linkedin.com/in/aydin-vesali-moghaddam-82a860275/"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                    width="20px"
                    height="20px"
                    alt="LinkedIn"
                  />
                  <span>Follow me on Linkedin</span>
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://twitter.com/ichbinaydin"
                  className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
                >
                  <img
                    className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/twitter.svg"
                    width="20px"
                    height="20px"
                    alt="Twitter"
                  />
                  <span>Follow me on Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Model style={{ width: '100%', height: '100vh' }} />

      </>
    );
  }
  