import React from 'react'

type ButtonProps = {
  color: string;
}

const SecondaryButton  : React.FC<ButtonProps>  = ({ color }) => {

  const textClasses = color === 'light' ? "text-lightNeutral" : 'text-darkNeutral';
  const borderClasses = color === 'light' ? "border-lightNeutral" : 'border-darkNeutral';
  return (
    <div className={`flex justify-center items-center  radius px-5 py-2 rounded-lg max-w-max h-max ${textClasses} font-medium text-sm cursor-pointer ${borderClasses} border-[1px] lg:text-lg md:text-base`}>
        <p>Unsere Angebote</p>
    </div>
  )
}

export default SecondaryButton