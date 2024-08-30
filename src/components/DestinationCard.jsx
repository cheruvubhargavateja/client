import { useNavigate } from "react-router-dom";
import redLeaves from "../assets/images/red_leaves.png";
import Rating from "./Rating";

const DestinationCard = ({ reviewDetails, ele }) => {
  const navigate = useNavigate();
  // Convert user objects to query string format
  const serializeObject = (obj) => encodeURIComponent(JSON.stringify(obj));
  return (
    <div
      onClick={() => navigate(`/places/${serializeObject(ele)}`)}
      className="w-full md:w-sm lg:max-w-sm rounded overflow-hidden shadow-lg bg-white self-stretch"
    >
      <img
        className="w-full"
        height="100px"
        src={ele?.imageUrl ? ele?.imageUrl : redLeaves}
        alt="Product Image"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl my-2 font-palanquin text-slate-600">
          {ele?.name ? ele?.name : "Add-Name"}
        </div>
        <p className="text-gray-500 text-base my-4">
          {ele?.heading
            ? ele?.heading
            : "Hey there, add some relevent description regarding the location for users sake."}
        </p>
        <div className="mt-4">
          <div className="text-2xl font-bold font-montserrat text-slate-700  ">
            $ {ele?.price ? ele?.price : "0.00"}
          </div>
          <div className="text-slate-600 text-lg font-palanquin mt-2">
            for 1 day
          </div>
        </div>
      </div>
      {reviewDetails?.rating && (
        <div className="px-6 py-2">
          <div className="flex items-center">
            <Rating
              rating={reviewDetails?.rating ? reviewDetails?.rating : 0}
              onClick={() => {}}
            />
            <span className="ml-2 text-gray-600">
              ({reviewDetails?.totalReviews ? reviewDetails?.totalReviews : 0})
              reviews
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationCard;
