import Rating from "./Rating";

const Reviews = ({ reviewsData }) => {
  return (
    <div className="w-full flex flex-col gap-10 mb-10">
      {!reviewsData?.data?.reviews[0]?.rating && (
        <h1 className="text-3xl text-coral-red font-palanquin text-center">
          Oops, No reviews are available!
        </h1>
      )}

      {reviewsData?.data?.reviews?.length > 0 &&
        reviewsData?.data?.reviews?.map((ele) => {
          const initialLetter = ele?.user?.username?.substring(0, 1);
          return (
            <div
              key={ele?._id}
              className="w-full flex justify-between items-center bg-white shadow-md rounded-lg p-6 text-center"
            >
              <div className="w-[30%]">
                <div className="w-10 py-2 rounded-full mx-auto mb-4 text-white text-xl bg-coral-red font-bold">
                  {initialLetter ? initialLetter : "U"}
                </div>
                <h2 className="text-xl font-bold mb-2">
                  {ele?.user?.username}
                </h2>
                <div className="flex items-center justify-center mb-4">
                  <Rating
                    rating={ele?.rating ? ele?.rating : 0}
                    onClick={() => {}}
                  />
                </div>
              </div>
              <div className="w-[70%]">
                <p className="w-96 mx-auto text-gray-700 text-base">
                  {ele?.description}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Reviews;
