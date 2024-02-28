import React from 'react'
import { motion as m } from 'framer-motion'
import flower from './assets/page1/flower.svg'
import flowerb from './assets/page1/flowerb.svg'
import larryshaira from './assets/page1/larryshaira.svg'
import sanpedro from './assets/page1/sanpedro.svg'
import savetheday from './assets/page2/savetheday.svg'
import date from './assets/page1/date.svg'
import { Suspense } from 'react'
import loading from './assets/page1/loading.json'
import Lottie from 'lottie-react'
import page3 from './assets/page3.svg'
import page4 from './assets/page4.svg'
import page5 from './assets/page5.svg'
import page6 from './assets/page6.svg'
import logo from './assets/logo.svg'
import Text from './component/Text'


const Loading = () => {
  return (
    <div className='w-screen h-screen bg-slate-700'>
      <Lottie animationData={loading} loop={true} className='w-56' />
    </div>
  )
}

const App = () => {
  const invited = [
    { "name": "Abrahan B. Mandereza", "occupation": "FOUNDER / PRESIDENT" },
    { "name": "Marlou B. Narag", "occupation": "NATIONAL PRESIDENT" },
    { "name": "Arnold Z. Ello", "occupation": "PROVINCE DIRECTOR" },
    { "name": "Renato Norberte", "occupation": "NATIONAL TREASURER" },
    { "name": "Catalino S. Miguel", "occupation": "HEAD MARSHALL" },
    { "name": "McDonald Garcia", "occupation": "ENGINEER" },
    { "name": "Stephen Songlo", "occupation": "ENGINEER" },
  ]
  return (
    <>
      <header className='snap-y snap-mandatory w-screen h-screen overflow-scroll '>
        <img className='max-sm:landscape:[140px] md:w-[400px] max-md:w-[400px] max-sm:w-[270px] fixed top-[-120px] left-[-120px] w-[100%] min-w-[200px] max-w-[500px]' src={flower} alt="" />
        <img className='max-sm:landscape:w-[350px] fixed right-[-120px] bottom-[-120px]
        w-[100%]  max-sm:w-[330px] max-w-[500px]' src={flowerb} alt="" />
        <Suspense fallback={<Loading />}>


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
              <img className='w-auto mx-auto min-w-32' src={savetheday} alt="" />

            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:landscape:w-[20vw]  pt-52 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
              <img className='w-auto mx-auto min-w-32' src={page3} alt="" />

            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:landscape:w-[20vw]  pt-60 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
              <img className='w-auto mx-auto min-w-32' src={page4} alt="" />

            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:px-3 max-sm:landscape:w-[20vw]  pt-44 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%]'>
              <img className='w-auto mx-auto min-w-32' src={page5} alt="" />
              <iframe className='w-auto opacity-70' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.0980238636316!2d121.05402047506621!3d14.363738886094987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0b8777ea76d%3A0xabca67c421f7d314!2sSan%20Pedro%20Apostol%20Parish!5e0!3m2!1sen!2sph!4v1705854620114!5m2!1sen!2sph" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p className='text-red-700 font-extrabold font-serif text-center text-2xl'>CLICK "View lager map" to navigate</p>

            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:landscape:w-[20vw]  pt-56 lg:pt-40 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%] '>
              <img className='w-[80%] mx-auto min-w-32' src={page6} alt="" />

            </m.div>
          </section >
          <section className='snap-start w-screen h-screen '>
            <m.div
              initial={{ opacity: 0, y: 1 }}
              whileInView={{ opacity: 1, y: -100 }}
              viewport={{ once: false }}
              transition={{ delay: .7 }}
              className='mx-auto max-sm:landscape:w-[20vw]  pt-56 lg:pt-40 sm:w-[60%] md:h-screen flex flex-col lg:w-[30%] '>
              <div className='w-[80%] mx-auto min-w-32 justify-center flex flex-col gap-4'>
                <h1 className='text-center text-xl font-extrabold text-gray-600 text-s'>YOU ARE INVITED</h1>
                {invited.map((invite, index) => (<Text key={index} name={invite.name} occupation={invite.occupation} />))}

              </div>



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