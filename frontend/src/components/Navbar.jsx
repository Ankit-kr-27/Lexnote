import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import logo from "../assets/logo.png"

const Navbar = () => {
  const { userData } = useSelector((state) => state.user)
  const credits = userData?.user?.credits ?? 0
  const [showCredits, setShowCredits] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="
        relative z-20 mx-6 mt-6 rounded-2xl
        bg-gradient-to-br from-black/80 via-black/70 to-black/80
        backdrop-blur-xl border border-white/10
        shadow-[0_20px_50px_rgba(0,0,0,0.6)]
        flex items-center justify-between px-8 py-4
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3 relative">
        <img src={logo} alt="Lexnote" className="w-9 h-9" />
        <span className="text-lg hidden md:block font-semibold text-white tracking-wide">
          Lex <span className="text-gray-400">Note</span>
        </span>
      </div>

      {/* Right */}
      <div className="relative flex items-center gap-6 relative">
        <div className='relative'>
        <motion.div
          onClick={() => {setShowCredits(!showCredits); setShowProfile(false);}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            flex items-center gap-3 px-4 py-2
            rounded-full bg-white/10 border border-white/20
            text-white text-sm cursor-pointer
            shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
            transition-all
          "
        >
          <span className="text-lg">💎</span>
          <span className="text-sm font-semibold tabular-nums">
            {credits}
          </span>
          <span
            className="
              ml-1 h-6 w-6 flex items-center justify-center
              rounded-full bg-white text-black text-xs font-bold
              shadow-sm
            "
          >
            ➕
          </span>
        </motion.div>

        {/* Dropdown */}
        <AnimatePresence>
          {showCredits && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                absolute right-[-50px] top-full mt-3
                w-64 rounded-2xl
                bg-black/90 backdrop-blur-xl
                border border-white/10
                shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                p-4 text-white
              "
            >
              <h4 className="font-semibold mb-2">Buy Credits</h4>
              <p className="text-sm text-gray-300 mb-4">
                Use credits to generate AI notes, charts, graphs and PDFs
              </p>
              <button
                onClick={() => setShowCredits(false)}
                className="
                  w-full py-2 rounded-lg
                  bg-gradient-to-br from-white to-gray-200
                  text-black font-semibold
                  hover:opacity-90 transition
                "
              >
                Buy more Credits
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        </div>


        <div className='relative'>
        <motion.div
          onClick={() => {setShowProfile(!showProfile); setShowCredits(false);}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="
            flex items-center gap-3 px-4 py-2
            rounded-full bg-white/10 border border-white/20
            text-white text-sm cursor-pointer
            shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
            transition-all
          "
        >
          <span className="text-lg">{userData?.user?.name.slice(0,1).toUpperCase()}</span>
          
        </motion.div>

        <AnimatePresence>
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                absolute right-0 top-full mt-3
                w-50 rounded-2xl
                bg-black/90 backdrop-blur-xl
                border border-white/10
                shadow-[0_25px_60px_rgba(0,0,0,0.7)]
                p-4 text-white
              "
            >
                <MenuItem text="History" onClick={() => {setShowProfile(false)}}/>
                <div className='h-px bg-white/10 mx-3'></div>
                <MenuItem text="sign out" red onClick={() => {setShowProfile(false)}}/>
                
              
            </motion.div>
          )}
        </AnimatePresence>

       
        </div>
      </div>

    </motion.div>
  )
}

function MenuItem ({onClick, text, red}){
  return (
    <div onClick={onClick}
    className={`w-full text-left px-5 py-3 text-sm transition-colors rounded-lg ${red ? "text-red-400 hover:bg-red-500/10" : "text-gray-200 hover:bg-white/10"}`}>
        {text}

    </div>
  )
}

export default Navbar
