import React from "react";

const BookedCard = () => {
  return (
    <div className="w-full">
      <section className="shadow-xl rounded-lg p-5">
        <p className="text-slate-500 text-lg tracking-wide font-montserrat">
          <span className="text-coral-red text-xl font-palanquin tracking-widest font-semibold">
            Note:{" "}
          </span>
          Any tour which has been booked cannot be cancelled. At any
          circumstances booked amount is not refundable.
        </p>
      </section>
      <section className="my-6 shadow-xl rounded-lg p-5">
        <h1 className="my-3 text-coral-red text-xl tracking-wide font-montserrat">
          Contact Details
        </h1>
        <p className="text-slate-500 text-lg tracking-wide font-montserrant mb-4">
          Mobile No: +91 9374227860
        </p>
        <p className="text-slate-500 text-lg tracking-wide font-montserrant">
          Email: locahosttourist@tourist.com
        </p>
      </section>
    </div>
  );
};

export default BookedCard;
