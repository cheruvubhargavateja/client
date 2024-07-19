import DestinationCard from "./DestinationCard";
import useFetch from "../libs/useApi";

const Destinations = () => {
  const { loading, data: locationsData } = useFetch("/locations");

  return (
    <>
      {loading ? (
        <h2 className="text-2xl text-coral-red text-center">Loading...</h2>
      ) : (
        <h2 className="text-xl text-slate-400 text-center">
          Select and Book your
          <span className="text-coral-red text-xl font-mono font-semibold">
            {" "}
            Destination
          </span>
        </h2>
      )}

      {locationsData?.data?.length < 1 && (
        <h1 className="text-3xl text-coral-red font-palanquin text-center">
          Oops, No places are available for booking!
        </h1>
      )}
      <div className="flex justify-center items-center flex-wrap gap-5 my-4">
        {locationsData?.data?.map((ele, ind) => (
          <DestinationCard ele={ele} key={ind + ele.name} />
        ))}
      </div>
    </>
  );
};

export default Destinations;
