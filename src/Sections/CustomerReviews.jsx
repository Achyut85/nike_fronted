import { reviews } from "../constants"
import RiewCard from "../components/RiewCard"
const CustomerReviews = () => {
  return (
    <section className="max-conatainer"> 
      <h3 className="font-palanquin text-center text-4xl font-bold max-sm:text-3xl">
      What Our<span className="text-coral-red">Customers </span>Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Here genuie stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-4">
        {reviews.map((review) => (
          <RiewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews