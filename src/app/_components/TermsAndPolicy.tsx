import React from 'react'

const TermsAndPolicy = () => {
  return (
    <div className='flex  gap-4 font-semibold text-[#515151]'>
      <a href="/tos" target='_blank' className='underline'>Terms Of Use</a>
      <a href="/policy" target='_blank' className='underline'>Privacy Policy</a>
      <a href="/eula" target='_blank' className='underline'>EULA</a>
    </div>
  )
}

export default TermsAndPolicy
