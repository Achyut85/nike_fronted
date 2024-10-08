import Button from "../components/Button"
import { shoe8 } from "../assets/images"
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10"
    >
        <div className="flex flex-1 flex-col ">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide your
            <span className="text-coral-red"> Super</span>
            <span className="text-coral-red"> Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwer is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance</p>
          <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
              <Button
              label="View detail"
              />
          </div>
      </div>
      <div className="flex-1 flex justify-center   items-centre">
       <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-cover"
       />

      </div>
    
    </section>
  )
}

export default SuperQuality