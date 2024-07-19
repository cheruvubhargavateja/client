import React from "react";
import { GoStarFill, GoStar } from "react-icons/go";

const Rating = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i + 1)}>
            {rating > i ? (
              <GoStarFill color="#FFD700" className="mr-3" />
            ) : (
              <GoStar className="mr-3" />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
