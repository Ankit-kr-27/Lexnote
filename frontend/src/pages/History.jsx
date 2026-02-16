import React, { useEffect, useState } from 'react'
import { serverUrl } from "../App";
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import FinalResult from '../components/FinalResult';

const History = () => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [selectedNote, setSelectedNote] = useState(null)
  const [loading, setLoading] = useState(false)
  const { userData } = useSelector((state) => state.user)
  const credits = userData?.user?.credits ?? 0
  const [topics, setTopics] = useState([])
  useEffect(() => {
    const myNotes = async () => {
      try {
        const res = await axios.get(serverUrl + "/api/notes/getnotes", { withCredentials: true })
        console.log(res.data)
        setTopics(Array.isArray(res.data) ? res.data : [])
      } catch (error) {
        console.log(error)
      }
    }
    myNotes()
  }, [])

  const openNotes = async (noteId) => {
    setLoading(true)
    try {
      const res = await axios.get(serverUrl + `/api/notes/${noteId}`, { withCredentials: true })
      setSelectedNote({ data: res.data.content })
      console.log("Selected note:", selectedNote)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true)
    }
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8'>

      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-10 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 items-start flex justify-between md:items-center gap-4 flex-wrap shadow-[0_20px_45px_rgba(0,0,0,0.6)]'
      >

        <div className='cursor-pointer' onClick={() => navigate("/")}>
          <h1 className='text-2xl font-bold bg-linear-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>LexNote</h1>
          <p className='text-sm text-gray-300 mt-1'>Your AI-powered exam-oriented notes & revision platform</p>
        </div>

        <div className='flex items-center gap-4 flex-wrap'>

          {!isSidebarOpen && <button onClick={() => setIsSidebarOpen(true)} className='lg:hidden text-white text-2xl cursor-pointer'>
            <GiHamburgerMenu />
          </button>}

          <button className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm cursor-pointer' onClick={() => navigate("/pricing")}>
            <span className="text-lg">💎</span>
            <span className="text-sm font-semibold tabular-nums">
              {credits}
            </span>
            <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
              className="
                      ml-1 h-6 w-6 flex items-center justify-center
                      rounded-full bg-white text-black text-xs font-bold
                      shadow-sm
                    "
            >
              ➕
            </motion.span>

          </button>



        </div>


      </motion.header>

      <div className='grid grid:cols-1 lg:grid-cols-4 gap-6'>
        <AnimatePresence>

          {(isSidebarOpen) &&
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className='fixed lg:static top-0 left-0 z-50 lg:z-auto w-72 lg:w-auto h-full lg:h-[75vh] lg:rounded-3xl lg:col-span-1 bg-black/90 lg:bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.6)] p-5 overflow-y-auto '>

              <button onClick={() => setIsSidebarOpen(false)} className='lg:hidden text-white mb-4 cursor-pointer'>
                ⬅️ Back
              </button>

              <div className='mb-4 space-y-1 '>
                <button onClick={() => navigate("/notes")} className=' text-start w-full px-3 py-2 rounded-lg text-sm text-gray-200 bg-white/10 hover:bg-white/20 cursor-pointer'> ➕ New Notes
                </button>

                <hr className='border-white/10 mb-4' />

                <h2 className='mb-4 text-lg font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>
                  📚Your notes
                </h2>

                {topics.length === 0 && (
                  <p className='text-gray-400 text-sm italic'>No notes yet. Start by creating your first note!</p>
                )}

                <ul className='space-y-3'>
                  {topics.map((t, i) => (
                    <li key={i} onClick={() => { openNotes(t._id) }} className='cursor-pointer rounded-xl p-3 bg-white/5 border border-white/10 hover:bg-white/10'>

                      <p className='text-sm font-semibold text-white'>
                        {t.topic}
                      </p>
                      <p className='text-xs text-gray-400 mt-1'>
                        {new Date(t.createdAt).toLocaleDateString()}
                      </p>
                    </li>
                  ))}

                </ul>
              </div>

            </motion.div>}

        </AnimatePresence>


        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='lg:col-span-3 rounded-2xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6 min-h-[75vh]'
        >

          {loading && <p className='text-center text-gray-500'>Loading...</p>}
          {!loading && !selectedNote && (
            <div className='h-full flex items-center justify-center text-gray-400'>
              Select a topic to see the notes
            </div>
          )}

          {!loading && selectedNote && <FinalResult result={selectedNote} />}

        </motion.div>
      </div>

    </div>
  )
}

export default History