import BookingsCard from "../../components/BookingsCard";
import Navbar from "../../components/Navbar";
import { userState } from "../../context/userContext";
import useFetch from "../../libs/useApi";

const Bookings = () => {
    
  const user = userState();
  const { data, loading } = useFetch(`/bookings/${user?.user?.userId}`);

  return (
    <main className='"w-full relative flex justify-center"'>
      <div className="w-[80%] h-auto mb-0 mx-auto">
        <section>
          <Navbar />
        </section>
        <section className="my-8 px-8 py-6">
          {loading && (
            <h1 className="text-xl text-coral-red text-center mt-60">
              Loading...
            </h1>
          )}
          {!data?.data[0] && <h1 className="text-xl text-coral-red text-center mt-60">
              You didn't booked any tours.
            </h1>}
          {!loading &&
            data &&
            data?.data?.map((ele) => (
              <BookingsCard bookingDetails={ele} key={ele?._id} />
            ))}
        </section>
      </div>
    </main>
  );
};

export default Bookings;
