import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHtml5 } from "react-icons/fa";


export default function Footer() {
  return (
    <>
    <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-[#202020] border-t  left-1/2 dark:bg dark:border-gray-600">
    <div className="w-full">
        <div className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600" role="group">
            <button type="button" className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                New
            </button>
            <button type="button" className="px-5 py-1.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900 rounded-lg">
                Popular
            </button>
            <button type="button" className="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
                Following
            </button>
        </div>
    </div>
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
    <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <Link to="/games" className="text-white hover:text-gray-300 flex items-center">
              <FaHtml5 className="inline-block" style={{ fontSize: '30px' }} />
             
            </Link>
            </button>
            <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <Link to="/games" className="text-white hover:text-gray-300 flex items-center">
              <FaHtml5 className="inline-block" style={{ fontSize: '30px' }} />
             
            </Link>
            </button>
        <button data-tooltip-target="tooltip-post" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
            </svg>
            <span className="sr-only">New post</span>
        </button>
        <div id="tooltip-post" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            New post
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <Link to="/games" className="text-white hover:text-gray-300 flex items-center">
              <FaHtml5 className="inline-block" style={{ fontSize: '30px' }} />
             
            </Link>
            </button>
        <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Search
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
       <Link to="/games">

       <IoGameController className="inline-block" style={{ fontSize: '30px' }} />
       </Link>
            <span className="sr-only">Settings</span>
        </button>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>

      <footer className="bg-[#242424]">
        <div className="container mx-auto p-0 md:p-8 xl:px-0">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-4">
                <div>
                  <a href="/">
                    <div className="flex items-center space-x-2 text-2xl font-medium">
                      <span>
                        <img src="https://www.svgrepo.com/show/452102/slack.svg" alt="AI Logo" width="64" height="64" className="w-16" />
                      </span>
                      <span className="text-white">AIOps</span>
                    </div>
                  </a>
                </div>
                <div className="max-w-md pr-16 text-md text-gray-200">Enhance productivity and efficiency with cutting-edge artificial intelligence solutions for your business operations.</div>
                <div className="flex space-x-2">
                  <a href="#" target="_blank" className="text-gray-200 hover:text-gray-200">
                    <span className="sr-only">Linkedin</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      {/* SVG path */}
                    </svg>
                  </a>
                  <a href="#" target="_blank" className="text-gray-200 hover:text-gray-200">
                    <span className="sr-only">Twitter</span>
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      {/* SVG path */}
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">Our Solutions</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="/aiplatform" className="text-md leading-6 text-gray-300 hover:text-gray-50">AI Platform</a>
                      </li>
                      <li>
                        <a href="/aialgorithms" className="text-md leading-6 text-gray-300 hover:text-gray-50">AI Algorithms</a>
                      </li>
                      <li>
                        <a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">Industry Applications</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">Use Cases</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="/predictiveanalysis" className="text-md leading-6 text-gray-300 hover:text-gray-50">Predictive Analysis</a>
                      </li>
                      <li>
                        <a href="/customerexperience" className="text-md leading-6 text-gray-300 hover:text-gray-50">Customer Experience</a>
                      </li>
                      <li>
                        <a href="/automation" className="text-md leading-6 text-gray-300 hover:text-gray-50">Automation</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="/pricing" className="text-md leading-6 text-gray-300 hover:text-gray-50">Pricing</a>
                      </li>
                      <li>
                        <a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">Blog</a>
                      </li>
                      <li>
                        <a href="/casestudies" className="text-md leading-6 text-gray-300 hover:text-gray-50">Case Studies</a>
                      </li>
                      <li>
                        <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">Terms of Service</a>
                      </li>
                      <li>
                        <a href="/privacy" className="text-md leading-6 text-gray-300 hover:text-gray-50">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      <li>
                        <a href="/aboutus" className="text-md leading-6 text-gray-300 hover:text-gray-50">About Us</a>
                      </li>
                      <li>
                        <a href="/careers" className="text-md leading-6 text-gray-300 hover:text-gray-50">Careers</a>
                      </li>
                      <li>
                        <a href="/contactus" className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
              <div className="text-md text-center text-white">
                Copyright © 2024 . Crafted with <span className="text-gray-50">♥</span> by AI enthusiasts at <a rel="noopener" href="/">AIOps.</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
