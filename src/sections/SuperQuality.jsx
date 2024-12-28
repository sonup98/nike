import { shoe8 } from "../assets/images";
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        <div className=" flex flex-1 flex-col">
            
            

        <h2 className='font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          
          We provide you
          <span className='text-coral-red '> Super</span>
          <span className='text-coral-red '> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        We provide you with the best quality shoes that are comfortable and stylish. Our shoes are made from the best materials and are designed to last. We have a wide
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to quality is what sets us apart from other shoe brands. We take pride in the craftsmanship of our shoes and are committed to providing you with the best possible product.
        </p>
          <div className="mt-11">  <Button label='View Details'  /> </div>
       
        </div>
        <div className="flex flex-1 justify-center items-center"> 
            <img src={shoe8} alt="shoe8" height={522} width={570} className="object-contain" />
        </div>

    </section>
  )
}

export default SuperQuality
