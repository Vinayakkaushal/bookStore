import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import Courses from './components/courses/Courses'
import Signup from './components/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './components/context/AuthProvider'
function App() {
  const [count, setCount] = useState(0)
  const [authUser, setAuthUser] = useAuth();
    console.log(authUser)
  return (
    <>
    <div className='dark:bg-slate-800 dark:text-white'>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element= { authUser?<Courses/>:<Navigate to="/signup"/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element= {authUser?<Contact/>:<Navigate to="/signup"/>} /> 
        <Route path="/signup" element= {<Signup/>} />
      </Routes>
      <Toaster/>
      <Footer/>
    </div>
      
     
    </>
  )
}

export default App
