import { convertUTCToLocal } from "../libs/times";
import DestinationCard from "./DestinationCard";

const BookingsCard = ({ bookingDetails }) => {
  const {
    name,
    price,
    totalDays,
    startDate,
    passengers,
    phoneNo,
    note,
    location,
  } = bookingDetails;
  return (
    <div className="w-[80%] lg:w-[65%] lg:border-0 shadow-lg flex flex-col lg:flex-row justify-between mx-auto my-6">
      <section className="flex-1">
        <DestinationCard ele={location} />
      </section>
      <section className="flex-1 text-lg tracking-wide">
        <div className="px-8 lg:pl-20">
          <h1 className="text-coral-red text-2xl font-palanquin my-8">
            Name: {name}
          </h1>
          <p className="text-slate-500 mb-4">Mobile.No: +91-{phoneNo}</p>
          <p className="text-slate-500 mb-4">Total Days: {totalDays}</p>
          <p className="text-slate-500 mb-4">Total Members: {passengers}</p>
          <p className="text-slate-500 mb-4">
            Total Price:{" "}
            <span className="text-xl text-slate-600 font-semibold">
              ${price}
            </span>
          </p>
          {note && (
            <p className="text-slate-500 text-sm mb-4">
              Note: <span className="text-slate-400">{note}</span>
            </p>
          )}

          <p className="text-slate-400 text-sm mt-20">
            Date: {convertUTCToLocal(startDate)}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookingsCard;
