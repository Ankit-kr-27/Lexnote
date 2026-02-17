import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../services/api';

const PaymentSuccess = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    
    const t = setTimeout(()=>{
        navigate("/")
    },5000)
    getCurrentUser(dispatch);
    return ()=>clearTimeout(t)
  }, [dispatch]);
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-4 gap-4'>
        <motion.div initial={{scale: 0, rotate: -180}}
        animate={{scale:1, rotate: 360}}
        transition={{
            duration:0.8,
            ease: "easeInOut"
        }}
        className='bg-green-500 text-6xl'
        >
            <IoMdCheckmarkCircleOutline />
        </motion.div>

        <motion.h1
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{
            delay: 0.3
        }}
        className='text-2xl font-bold text-green-600'
        >
            Payment Successful!
        </motion.h1>

        <motion.p
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            delay: 0.6
        }}
        className='text-gray-500 text-sm'
        >
            Redirecting to Home...
        </motion.p>

    </div>
  )
}

export default PaymentSuccess