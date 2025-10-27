
import React from 'react'

type Props = {}

const AboutPage = async ({params} : {params: {name: string}}) => {
    
  const  {name} = (await params);
  return (
    <div className='text-black'>Hello {name}</div>
  )
}

export default AboutPage