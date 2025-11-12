import React from 'react'

type Props = {
    name: string
}

const TechnologyTags = ({name}: Props) => {
  return (
    <div className='px-4 py-1.5 bg-blue-950 text-sm sm:text-base font-bold rounded-full'>
        <p>{name}</p>
    </div>
  )
}

export default TechnologyTags