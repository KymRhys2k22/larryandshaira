import React from 'react'
import { motion as m } from 'framer-motion'
import flower from './assets/page1/flower.svg'
import flowerb from './assets/page1/flowerb.svg'
import larryshaira from './assets/page1/larryshaira.svg'
import sanpedro from './assets/page1/sanpedro.svg'
import date from './assets/page1/date.svg'

const App = () => {
  return (
    <>
      <header className='p-0 relative w-[100vw] h-[100vh] '>
        <m.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}

          className=' max-md:w-[400px] max-sm:w-[280px] absolute top-[-120px] left-[-120px] w-[100%] min-w-[200px] max-w-[500px]' src={flower} alt="" />
        <m.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .7 }}
          className=' absolute right-[-120px] bottom-[-120px]
        w-[100%]  max-sm:w-[400px] max-w-[500px]' src={flowerb} alt="" />
        <m.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className='absolute  right-0 left-0 mx-auto mt-24 lg:w-[600px] ' src={larryshaira} alt="" />
        <m.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .9 }}
          className='absolute right-0 left-0 bottom-80 mx-auto' src={date} alt="" />
        <m.img
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className='absolute right-0 left-0 mx-auto bottom-52' src={sanpedro} alt="" />



      </header>
      <nav className='container'>

      </nav>
      <main>

      </main>
      <footer>

      </footer>


    </>
  )
}

export default App