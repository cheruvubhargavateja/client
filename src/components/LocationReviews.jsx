import React from "react";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";

const LocationReviews = ({ locationId, reviewsData }) => {
  return (
    <main>
      <div>
        <h2 className="text-xl text-slate-500 font-extralight font-palanquin tracking-widest underline underline-offset-8">
          Visitors{" "}
          <span className="text-slate-600 font-semibold">valuable </span>
          <span className="text-coral-red font-bold font-montserrat">
            Reviews
          </span>
        </h2>
        <ReviewForm locationId={locationId} />
      </div>
      <div className="mt-5  max-h-96 overflow-scroll">
        <Reviews reviewsData={reviewsData} />
      </div>
    </main>
  );
};

export default LocationReviews;
