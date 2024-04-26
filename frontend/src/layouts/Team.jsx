export default function Team() {
    return (
      <>
        <div className="p-20">
          <div className="text-center mb-16">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              THE TEAM
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Meet Our <span className="text-indigo-600">Team</span>
            </h3>
          </div>
  
          <div className="sm:grid grid-cols-2 md:grid-cols-4 col-gap-10 mx-auto">
            <div className="text-center">
              <a href="#">
                <img
                  className="mb-3 rounded-xl mx-auto h-32 w-32"
                  src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/425004215_346944451661613_6972460022672526955_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFrqYXV91n8y48tcTnVEriYixTXn_UQORCLFNef9RA5EGN77P84FfOyPh5m55iYU4fPyNS7le7X0AfT_WQd4erZ&_nc_ohc=B5PKxc6dH6kAb5DhAT-&_nc_ht=scontent-cdg4-2.xx&cb_e2o_trans=q&oh=00_AfBuEgw1h0BEHouZWk95XnBzmodVKKoIFOV9yCag4dohJQ&oe=662F364B"
                  alt="Team member"
                />
              </a>
              <a
                href="#"
                className="hover:text-indigo-500 text-gray-900 font-semibold"
              >
                John Doe
              </a>
              <p className="text-gray-500 uppercase text-sm">Web Developer</p>
              <div className="my-4 flex justify-center items-center">
                {/* Remove unused anchor tags */}
              </div>
            </div>
            {/* Add more team members here if needed */}
          </div>
        </div>
      </>
    );
  }
  