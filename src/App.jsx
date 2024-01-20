import React from 'react'
import { motion as m } from 'framer-motion'
import flower from './assets/page1/flower.svg'
import flowerb from './assets/page1/flowerb.svg'
import larryshaira from './assets/page1/larryshaira.svg'
import sanpedro from './assets/page1/sanpedro.svg'
import date from './assets/page1/date.svg'
import { Suspense } from 'react'
import loading from './assets/page1/loading.json'
import Lottie from 'lottie-react'

const Loading = () => {
  return <Lottie animationData={loading} loop={true} className='w-56' />
}

const App = () => {
  return (
    <>
      <header className='snap-y snap-mandatory w-screen h-screen overflow-scroll '>
        <img className='max-sm:landscape:[140px] md:w-[400px] max-md:w-[400px] max-sm:w-[270px] fixed top-[-120px] left-[-120px] w-[100%] min-w-[200px] max-w-[500px]' src={flower} alt="" />
        <img className='max-sm:landscape:w-[350px] fixed right-[-120px] bottom-[-120px]
        w-[100%]  max-sm:w-[330px] max-w-[500px]' src={flowerb} alt="" />
        <Suspense fallback={Loading}>
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}

              className='mx-auto max-sm:landscape:w-[20vw]  pt-40 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
              <img className='w-auto min-w-28' src={larryshaira} alt="" />
              <img className='' src={date} alt="" />
              <img className='' src={sanpedro} alt="" />
            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:landscape:w-[20vw]  pt-40 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
              <img className='w-auto min-w-28' src={larryshaira} alt="" />
              <img className='' src={date} alt="" />
              <img className='' src={sanpedro} alt="" />
            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:landscape:w-[20vw]  pt-40 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
              <img className='w-auto min-w-28' src={larryshaira} alt="" />
              <img className='' src={date} alt="" />
              <img className='' src={sanpedro} alt="" />
            </m.div>
          </section >
        </Suspense>



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