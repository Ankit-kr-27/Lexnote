import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useState } from 'react'

const Pricing = () => {
  const navigate = useNavigate();
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [paying, setPaying] = useState(false);
  const [payingAmount, setPayingAmount] = useState(null);

  const handlePaying = async (amount) => {
    try {
      setPayingAmount(amount);
      setPaying(true)
    } catch (error) {
      
    }
  }
  return (
    <div  className='min-h-screen bg-gray-100 px-6 py-10 relative'>

      <button onClick={()=> navigate("/")} className='flex items-center gap-2 text-gray-600 hover:text-black mb-6 cursor-pointer'>
        ⬅️Back
      </button>

      <motion.div
      initial={{opacity:0,y:-10}}
      animate={{opacity:1,y:0}}
      className='text-center mb-10'
      >
        <h1 className='text-4xl font-bold '>Pricing Plans</h1>
        <p className='text-gray-600 mt-2'>Choose the perfect plan for your needs</p>
        
      </motion.div>

      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>

        <PricingCard
        title = "Starter"
        price = "₹100"
        amount = {100}
        credits = "50 credits"
        description = "Perfect for quick started"
        features = {["Generate AI notes", "Exam-focused answers", "Diagram & charts support", "Fast generation"]}
        popular = {false}
        selectedPrice = {selectedPrice}
        setSelectedPrice = {setSelectedPrice}
        onBuy={handlePaying}
        paying={paying}
        payingAmount={payingAmount}
        />

        

        <PricingCard
        title = "Popular"
        price = "₹200"
        amount = {200}
        credits = "150 credits"
        description = "Best value for students"
        features = {["All starter features", "revision mode acces", "priority support", "priority generation"]}
        popular = {true}
        selectedPrice = {selectedPrice}
        setSelectedPrice = {setSelectedPrice}
        onBuy={handlePaying}
        paying={paying}
        payingAmount={payingAmount}
        />

        <PricingCard
        title = "Pro Learner"
        price = "₹500"
        amount = {500}
        credits = "300 credits"
        description = "For serious exam preparation"
        features = {["Maximum Credit value", "Unlimited revisions", "Idea for full Syllabus", "Charts and diagrams"]}
        popular = {false}
        selectedPrice = {selectedPrice}
        setSelectedPrice = {setSelectedPrice}
        onBuy={handlePaying}
        paying={paying}
        payingAmount={payingAmount}
        />

      </div>
    </div>
  )
}

function PricingCard({title,price,amount,credits, description, features, popular, selectedPrice, setSelectedPrice, onBuy, paying, payingAmount}){

  const isSelected = selectedPrice === amount;
  const isPayingThisCard = paying && payingAmount === amount;
  return(
    <motion.div 
    onClick={() => setSelectedPrice(amount)}
    whileHover = {{ y: -4}} 
    className={`relative cursor-pointer rounded-xl p-6 bg-white border transition ${isSelected ? "border-black" : popular ? "border-indigo-500" : "border-gray-200"}`}
    >
      {popular && !isSelected && <span className='absolute top-4 right-4 text-xs px-2 py-1 rounded bg-indigo-600 text-white'>Popular</span>}

      {isSelected && <span className='absolute top-4 right-4 text-xs px-2 py-1 rounded bg-black text-white'>
        Selected
      </span>}

      <h2 className='text-xl font-semibold'>{title}</h2>
      <p className='text-gray-600 mt-1 text-xs'>{description}</p>

      <div className='mt-4'>
        <p className='text-3xl font-bold'>{price}</p>
        <p className='text-sm text-indigo-600'>{credits}</p>
      </div>

      <button 
      disabled={isPayingThisCard}

      onClick={(e) => {
        e.stopPropagation();
        onBuy(amount);
      }}
      className={`w-full mt-5 py-2 rounded-lg font-medium transition ${isPayingThisCard ? "bg-gray-300 cursor-not-allowed"
        : isSelected ? "bg-black text-white" : "bg-indigo-600 text-white hover:bg-indigo-700"
      }`}>
        {isPayingThisCard ? "Processing..." : isSelected ? "Selected" : "Buy Now"}
      </button>

      <ul className='mt-5 space-y-2 text-sm text-gray-600'>
        {features.map((feature, index) => (
          <li key={index} className='flex gap-2'>
            <span>✅</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
    </motion.div>
  )
}

export default Pricing