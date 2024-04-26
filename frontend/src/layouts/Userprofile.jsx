export default function Profile() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-cente ">
        {/* Cover Image */}
        <div
          className="md:w-[60%] sm:w-[70%] xs:w-[90%] mx-auto rounded-sm bg-cover bg-center bg-no-repeat items-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw5fHxjb3ZlcnxlbnwwfDB8fHwxNzExMTExMzEzfDA&ixlib=rb-4.0.3&q=80&w=1080')"
          }}
        >
          {/* Profile Image */}
          <div
            className="mx-auto flex justify-center w-[141px] h-[141px] rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080')"
            }}
          >
            <div className="bg-white rounded-full w-6 h-6 text-center ml-28 mt-4">
              <input type="file" name="profile" id="upload_profile" hidden required />
              <label htmlFor="upload_profile" className="inline-flex items-center">
                <svg
                  data-slot="icon"
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* SVG path */}
                </svg>
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <input type="file" name="profile" id="upload_cover" hidden required />
            <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 font-semibold">
              <label htmlFor="upload_cover" className="inline-flex gap-1 items-center cursor-pointer">
                Cover
                <svg
                  data-slot="icon"
                  className="w-5 h-5 text-blue-700"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* SVG path */}
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
