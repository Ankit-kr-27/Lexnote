import React from 'react'
import {motion} from "motion/react"
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'
import axios from 'axios'
import { serverUrl } from '../App'

const Footer = () => {
    const dispatch = useDispatch()
  const handleSignOut = async () => {
    try {
      await axios.post(serverUrl + "/api/auth/logout", {
        withCredentials: true
      })
      dispatch(setUserData(null))
      navigate("/auth")

    } catch (error) {
      console.log(error)
    }
  }
    const navigate = useNavigate()
  return (
    <motion.div
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.7}}
    viewport={{once:true}}
    className='z-10 mx-6 mb-6 mt-24 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 px-8 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)]'
    >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start '>
            <motion.div whileHover={{rotateX:6, rotateY:-6}}
            className='flex flex-col gap-4 transform-gpu'
            style={{transformStyle:"preserve-3d"}}>
                <div className='flex items-center gap-3 cursor-pointer style={{transform: "translateZ(20px)"}}'>
                    <img src={logo} alt="logo" className='h-10 w-10 object-contain' />
                    <span className='text-lg font-semibold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent' style={{textShadow:"0 6px 18px rgba(0,0,0,0.4)"}}>
                        Lex<span className='text-gray-400'>Note</span>
                    </span>
                </div>

                <p className='text-gray-300 text-sm max-w-sm' style={{transform:"translateZ(20px)"}}>Lexnote helps students and professionals create smart, exam-focused notes, project documentation, flow diagrams, and revision-ready content using AI.</p>
                
            </motion.div>

            <div className='text-center'>
                <h1 className='text-lg text-white font-semibold mb-4'>Quick Links</h1>
                <ul className="space-y-2 text-sm">
                    <li className='text-gray-300 hover:text-white cursor-pointer transition-colors' onClick={() => navigate("/notes")}>Notes</li>
                    <li className='text-gray-300 hover:text-white cursor-pointer transition-colors' onClick={() => navigate("/history")}>History</li>
                    <li className='text-gray-300 hover:text-white cursor-pointer transition-colors' onClick={() => navigate("/pricing")}>More Credits</li>
                </ul>
            </div>

            <div className='text-center'>
                <h1 className='text-lg text-white font-semibold mb-4'>Support and Account</h1>
                <ul className="space-y-2 text-sm">
                    <li className='text-gray-300 hover:text-white cursor-pointer transition-colors' onClick={() => navigate("/auth")}>SignIn</li>
                    <li className='text-red-400 hover:text-red-300 cursor-pointer transition-colors' onClick={handleSignOut}>SignOut</li>
                    <li className='text-gray-300 hover:text-white cursor-pointer transition-colors'>support@lexnote.com</li>
                </ul>
            </div>
        </div>
        <div className='my-6 h-px bg-white/10'>
        <p className='text-center text-gray-500 text-sm'>© {new Date().getFullYear()} Lexnote. All rights reserved.</p>
        </div>

    </motion.div>
  )
}

export default Footer