export default function SearchPage() {
    return (
      <>
        <div className=" w-screen full-height">
          {/* Nav */}
          <div className="flex justify-between text-slate-50 p-4">
            <div className="flex gap-5 pt-2">
              <p>About</p>
              <p>Store</p>
            </div>
            <div className="flex gap-5">
              <p className="pt-2">Gmail</p>
              <p className="pt-2">Images</p>
              <div className="w-10 h-10 hover:bg-slate-600 hover:shadow-sm rounded-full">
                <img className="w-10 h-10 p-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Google_Labs_Icon_%282023%29.svg/1200px-Google_Labs_Icon_%282023%29.svg.png" />
              </div>
              <div className="w-10 h-10 hover:bg-slate-600 hover:shadow-sm rounded-full">
                <img className="w-10 h-10 p-2 rounded-full border" src="https://randomuser.me/api/portraits/women/56.jpg" />
              </div>
            </div>
          </div>
          {/* Main */}
          <div className="container mx-auto mt-14 flex justify-center">
            <div>
              <img className="w-2/6 flex justify-center mx-auto" src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png" />
              <div className="w-3/4 border hover:bg-slate-600 border-slate-500 rounded-full h-12 mx-auto mt-10 hover:border-none flex justify-between">
                <p className="p-3 text-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* SVG path */}
                  </svg>
                </p>
                <input className="w-4/5 bg-transparent text-slate-200 placeholder:text-2xl focus:border-none focus:outline-none" type="search" placeholder="" />
                <p className="p-3 text-slate-200">
                  <img className="w-4 " src="https://seeklogo.com/images/G/google-mic-logo-EF440C9A6F-seeklogo.com.png" alt="google voice" />
                </p>
                <p className="p-3 text-slate-200">
                  <img className="w-6" src="https://freshlookapp.com/wp-content/uploads/2020/04/Google-Lens-What-it-is-How-to-install-it-Everything-you-can-do-with-it.png" alt="google voice" />
                </p>
              </div>
              <div className="w-1/2 mx-auto mt-7 flex justify-center gap-6 ">
                <button className="bg-slate-700 rounded-md w-auto py-3 h-auto px-3 h-10 shadow-sm text-slate-300">Google Search</button>
                <button className="bg-slate-700 rounded-md w-auto px-3 py-3 h-auto h-10 shadow-sm text-slate-300">I m Feeling Lucky</button>
              </div>
              {/* AI */}
              <div className="bg-slate-900 lg:mb-6 mx-auto w-auto h-auto md:w-2/5 lg:w-2/5 mt-12 flex justify-center rounded-full">
                <div className="p-5 lg:p-2 w-auto h-auto text-center mb-4"><p className="text-slate-200 text-xl">Try AI-powered overviews when you search</p></div>
              </div>
            </div>
          </div>
      
        </div>
      </>
    );
  }
  