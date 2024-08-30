import Button from "./Button";
import { useForm } from "react-hook-form";
import { successToast } from "../libs/toast-messages";
import { useRequestApi } from "../libs/useApi";
import { userState } from "../context/userContext";
import { minAndMaxDate } from "../libs/dates";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ price, locationId }) => {
  const user = userState();

  const navigate = useNavigate();

  const { minDateString, maxDateString } = minAndMaxDate();

  let locationPrice = parseInt(price);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      phoneNo: "",
      passengers: 1,
      startDate: "",
      totalDays: 1,
      note: "",
    },
  });

  const allValues = watch();

  const submitHandler = async (formData) => {
    let requestData = { ...formData };
    requestData.user = user?.user?.userId;
    requestData.location = locationId;
    requestData.price = calculatePrice();

    const response = await useRequestApi("/bookings", "post", requestData);

    if (response?.status == 201) {
      successToast(response.data.message);
      navigate("/bookings");
    }
    reset();
  };

  function calculatePrice() {
    if (allValues.passengers) {
      return allValues.passengers * locationPrice * allValues.totalDays;
    }
    return 1 * locationPrice * allValues.totalDays;
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-[90%] mx-auto lg:w-[60%] shadow-2xl rounded-xl flex flex-col py-10 px-10"
    >
      <div className="flex flex-col xl:flex-row xl:items-center justify-evenly gap-4 mb-8">
        <div className="flex-1 flex justify-between align-center xl:block">
          <label className="text-lg text-slate-500 px-2">Name:</label>
          <input
            placeholder="Please enter your name"
            type="text"
            name="name"
            {...register("name", {
              required: "This field is required",
            })}
            className="border-b border-slate-500 px-2 w-72 text-base outline-none py-4"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="flex-1 flex justify-between align-center xl:block">
          <label className="text-lg text-slate-500 px-2">Mobile No:</label>
          <input
            placeholder="Please enter your mobile no"
            type="text"
            name="phoneNo"
            {...register("phoneNo", {
              required: "This field is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be exactly 10 digits",
              },
            })}
            className="border-b border-slate-500 px-2 w-72 text-base outline-none py-4"
          />
          {errors.phoneNo && (
            <p className="text-sm text-red-500">{errors.phoneNo.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-evenly mb-8">
        <div className="flex-1 flex justify-between align-center xl:block">
          <label className="text-lg text-slate-500 px-2">No.of.members:</label>
          <input
            placeholder="Please enter no.of members"
            type="number"
            name="passengers"
            min={1}
            max={5}
            {...register("passengers", {
              valueAsNumber: true,
              required: "This field is required",
              min: { value: 1, message: "Minimum value is 1" },
              max: { value: 5, message: "Maximum value is 5" },
            })}
            className="border-b border-slate-500 px-2 w-72 text-base outline-none py-4"
          />
          {errors.passengers && (
            <p className="text-sm text-red-500">{errors.passengers.message}</p>
          )}
        </div>
        <div className="flex-1 flex justify-between align-center xl:block">
          <label className="text-lg text-slate-500 px-2">Total Price:</label>
          <input
            type="number"
            name="price"
            className="border-b border-slate-500 px-2 w-72 text-base outline-none py-4"
            value={calculatePrice()}
            disabled={true}
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row xl:items-center justify-evenly mb-8">
        <div className="flex-1 flex justify-between align-center xl:block">
          <label className="text-lg text-slate-500 px-2">Start Date:</label>
          <input
            type="date"
            name="startDate"
            min={minDateString}
            max={maxDateString}
            {...register("startDate", {
              required: "This field is required",
            })}
            className="border-b border-slate-500 px-2 py-4 w-72 text-base outline-none"
          />
          {errors.startDate && (
            <p className="text-sm text-red-500">{errors.startDate.message}</p>
          )}
        </div>
        <div className="flex-1 flex justify-between align-center xl:block">
          <label className="text-lg text-slate-500 px-2">Total days:</label>
          <input
            type="number"
            placeholder="Enter no.of days between 1 and 5"
            name="totalDays"
            min={1}
            max={5}
            {...register("totalDays", {
              valueAsNumber: true,
              required: "This field is required",
              min: { value: 1, message: "Minimum value is 1" },
              max: { value: 5, message: "Maximum value is 5" },
            })}
            className="border-b border-slate-500 px-2 py-4 w-72 text-base outline-none"
          />
          {errors.totalDays && (
            <p className="text-sm text-red-500">{errors.totalDays.message}</p>
          )}
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="w-full">
          <textarea
            placeholder="Say aything to be noted before trip..."
            type="textarea"
            name="note"
            {...register("note")}
            className="w-full px-2 border-b border-slate-500 text-base outline-none py-4"
          />
        </div>
      </div>

      <Button type="submit">Book a tour!</Button>
    </form>
  );
};

export default BookingForm;
