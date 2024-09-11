import React from 'react'
import logo from '../../public/logo.png'
// import caseAIUI from '../../public/caseAIUi.png'

function CMS() {
  return (
    <div className='h-full min-h-full'>
      <div className='h-2/3 flex justify-around'>
        <div className='flex flex-col justify-center space-y-10'>
          <p className='text-6xl'>
            The CMS
          </p>
          <p className='text-xl'>
            The only case management system your firm needs
          </p>
        </div>
        <div className='my-auto'>
          <img src={logo}></img>
        </div>
      </div>

      {/* Manual Management System */}
      <div className='pb-10 mt-10 border border-black bg-lime-200'>
        <div className='ml-5 mt-10'>
          <p className='text-center text-4xl'>
            The CMS Management System
          </p>
          <div className='flex justify-evenly mt-10'>
            <p className='bg-black text-white w-fit p-3 rounded-xl'>
              Track your cases
            </p>
            <p className='bg-black text-white w-fit p-3 rounded-xl'>
              Manage your cases
            </p>
            <p className='bg-black text-white w-fit p-3 rounded-xl'>
              Bill your clients
            </p>
          </div>
        </div>
      </div>

      {/* CaseAI  */}
      <div className='min-h-full bg-blue-300'>
        <p className='text-center text-4xl pt-10'>
          Introducing CaseAI
        </p>
        <div className='text-center mt-10 bg-blue-200 w-fit mx-auto p-5 rounded-2xl'>
          <p className='text-2xl'>
            Find relevant cases instantly
          </p>
          <p className='text-xl mt-10'>
            All new powerful AI to search for relevant cases using our
          </p>
          <p className='text-xl'>
            AI search engine that interfaces with our ever-growing database
          </p>

        </div>
        <div className='text-center mt-10 bg-blue-200 w-11/12 mx-auto p-5 rounded-2xl'>
          <p className='text-2xl'>
            Create case arguments with CaseAI
          </p>
          <div className='flex mt-10 justify-around text-xl'>
            <div className='w-1/4 border border-black rounded-xl p-3 bg-pink-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla molestiae quasi dicta ab magni, ea explicabo numquam totam repudiandae vitae!
            </div>
            <div className='w-1/4 border border-black rounded-xl p-3 bg-green-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla molestiae quasi dicta ab magni, ea explicabo numquam totam repudiandae vitae! 
            </div>
            <div className='w-1/4 border border-black rounded-xl p-3 bg-red-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nulla molestiae quasi dicta ab magni, ea explicabo numquam totam repudiandae vitae! 
            </div>
          </div>
          <p className='mt-10 text-xl'>
              Multiple drafts to choose from and review.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CMS