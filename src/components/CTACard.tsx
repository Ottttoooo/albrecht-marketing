import React from 'react'
import Buttons from './Buttons'

type CTACardProps = {
    color: string;
}

const CTACard : React.FC<CTACardProps> = ({ color = 'light' }) => {
  return (
    <div className='w-full flex flex-col items-center bg-darkNeutral py-12 gap-3'>
        <h2 className='text-lightNeutral font-bold text-5xl'>Bereit für den nächsten Schritt?</h2>
        <Buttons color={color}/>
    </div>
  )
}

export default CTACard