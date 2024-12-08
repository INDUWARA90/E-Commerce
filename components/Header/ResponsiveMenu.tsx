import { AnimatePresence } from 'motion/react'
import React from 'react'
import { motion } from "motion/react"

function ResponsiveMenu({value = false }) {
  
  return (
    
        <AnimatePresence mode='wait'>
            {
                value &&
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1,y:0}}
                    exit={{opacity:0 ,y:-100}}
                    className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col justify-center items-center gap-10'>
                                <li>Home1</li>
                                <li>Home2</li>
                                <li>Home3</li>
                                <li>Home4</li>
                            </ul>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    
  )
}

export default ResponsiveMenu