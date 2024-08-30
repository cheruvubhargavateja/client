import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "./types";
import InputField from "./InputField";
import Button from "./Button";
import { useRequestApi } from "../libs/useApi";
import { successToast } from "../libs/toast-messages";
import { userState } from "../context/userContext";
import Rating from "./Rating";

const ReviewForm = ({ locationId }) => {
  const user = userState();

  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      description: "",
    },
    resolver: zodResolver(reviewSchema),
  });

  const submitHandler = async (data) => {
    let requestData = { ...data };
    requestData.rating = rating;
    requestData.user = user?.user?.userId;
    requestData.location = locationId;
    const response = await useRequestApi("/reviews", "post", requestData);

    if (response?.status == 201) {
      successToast(response.data.message);
    }

    setRating(0);
    reset();
  };

  return (
    <section className="w-full flex mt-4">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="shadow-2xl w-full rounded-xl flex flex-col md:flex-row justify-evenly py-6"
      >
        <div className="mx-auto flex md:items-center">
          <Rating rating={rating} onClick={handleRating} />
        </div>
        <InputField
          type="text"
          name="description"
          placeholder="Add comment..."
          register={register}
          error={errors.description}
        />
          <Button type="submit">Add</Button>
      </form>
    </section>
  );
};

export default ReviewForm;
