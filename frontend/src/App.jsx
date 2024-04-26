import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './layouts/Home'
import About from './layouts/About'
import Games from './layouts/Games';
import Profile from './layouts/Userprofile';
import Sidebar from './components/Sidebar'
import SearchPage from './components/Searchpage';
import Team from './layouts/Team';
// Forms Section
import Signup from './forms/Signup';
import Signin from './forms/Signin';
// Forms Sectionend
import Nopage from './layouts/Nopage';

export default function App(){
    return (
      <>
    
      <BrowserRouter>
      <Navbar />
     
       <Routes>
         <Route index element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>

         {/* Forms Sections */}
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/signin' element={<Signin/>}/>
         {/* Forms Sections */}

         <Route path='/games' element={<Games/>}/>
         <Route path='/profile' element={<Profile />}/>
         <Route path='/team' element={<Team />}/>

         <Route path='/search' element={<SearchPage />}/>

         <Route path='*' element={<Nopage/>}/>
       </Routes>
       <Sidebar />
       <Footer />
      </BrowserRouter>
      </>
    )
}