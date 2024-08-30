import useFetch from "../../libs/useApi";
import Navbar from "../../components/Navbar";
import DestinationCard from "../../components/DestinationCard";
import { useParams } from "react-router-dom";
import LocationReviews from "../../components/LocationReviews";
import BookingForm from "../../components/BookingForm";
import BookedCard from "../../components/BookedCard";

const Location = () => {
  const { details } = useParams();

  // Deserialize the user data
  const locationDetails = JSON.parse(decodeURIComponent(details));

  const { data: reviewsData } = useFetch(`/reviews/${locationDetails?._id}`);

  return (
    <main className="w-full relative flex justify-center">
      <section className="w-full lg:w-[80%] h-auto mb-0">
        <section>
          <Navbar />
        </section>
        <div className="flex flex-col lg:flex-row justify-around mt-[5%]">
          <div className="w-[80%] mx-auto lg:p-0 lg:w-[30%]">
            <DestinationCard
              reviewDetails={reviewsData?.data}
              ele={locationDetails}
            />
          </div>
          <div className="w-1 bg-slate-200"></div>
          <>
            <BookingForm
              price={locationDetails?.price}
              locationId={locationDetails?._id}
            />
          </>
        </div>
        <section className="flex flex-col-reverse lg:flex-row justify-between mt-[2%]">
          <div className="w-[80%] mx-auto lg:w-[50%]">
            <LocationReviews
              locationId={locationDetails?._id}
              reviewsData={reviewsData}
            />
          </div>
          <div className="w-[80%] mx-auto lg:w-[48%] mt-6">
            <BookedCard />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Location;
