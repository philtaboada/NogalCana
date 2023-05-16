import IconDivisor from './IconDivisor'
import IconDivisorBack from './IconDivisorBack'
import './hero.css'


const Divisor = () => {
  return (
    
    <div className="relative px-6 py-12 md:px-12 text-gray-800 bg-[#C7461D] text-center lg:text-left">
        <IconDivisor/>
    <IconDivisorBack/>
    <div className="container mx-auto xl:px-32">
    <p className='text-center font-light text-white text-4xl'>¡Prueba nuestros destilados de caña de azúcar hoy y siente la diferencia!</p>
    </div>
    </div>    


  )
}

export default Divisor