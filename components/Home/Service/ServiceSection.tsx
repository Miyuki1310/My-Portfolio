import { Service } from '@/constants/constants'
import ServiceCard from './ServiceCard'


const ServiceSection = () => {
  return (
    <div className='container py-16'>
        <h2 className='text-center text-2xl sm:text-4xl xl:text-5xl font-bold'>Colleborate with brand <br/>
            and agencies to create <br/>
            impactful results
        </h2>
        <div className="grid grid-cols-1 gap-10 mt-15 md:mt-20 items-center sm:grid-cols-2 xl:grid-cols-4">
            {Service.map((item) => {
                return (
                    <ServiceCard key={item.id} img={item.img} title={item.title} description={item.description}/>
                )
            })}
        </div>
    </div>
  )
}

export default ServiceSection