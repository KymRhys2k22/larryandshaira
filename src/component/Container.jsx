import React from 'react'
import { motion as m } from 'framer-motion'

const Container = ({ children }) => {
    return (
        <m.div
            initial={{ opacity: 0, y: 1 }}
            whileInView={{ opacity: 1, y: -100 }}
            viewport={{ once: false }}
            transition={{ delay: .7 }}
            className='mx-auto max-sm:landscape:w-[20vw]  pt-40 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
            {children}
        </m.div>
    )
}

export default Container