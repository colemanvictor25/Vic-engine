import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
export default function Signup() {
   
    return(
        
<>

<form  className="max-w-sm mx-auto mt-12 rounded-lg shadow-md p-10" action="#" method="POST">
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>

  <button type="submit" style={{ background: '#202020' }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create a Server</button>

  <p className="text-white text-center bg-[#252525] p-3 ">
    <Link to="/signup">Create a Server  &nbsp; <FaPowerOff className="inline-block " style={{color:"yellowgreen"}} /></Link></p>
</form>
</>

    );
    

}