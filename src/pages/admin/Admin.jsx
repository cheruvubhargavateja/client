import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { successToast } from "../../libs/toast-messages";
import { useRequestApi } from "../../libs/useApi";
import Navbar from "../../components/Navbar";
import DestinationCard from "../../components/DestinationCard";
import { locationSchema } from "./types";
import IsAuthorized from "../../IsAuthorized";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      imageUrl: "",
      price: "",
      heading: "",
    },
    resolver: zodResolver(locationSchema),
  });

  const allValues = watch();

  const submitHandler = async (formData) => {
    const response = await useRequestApi(
      "/locations/add-location",
      "post",
      formData
    );

    if (response?.status == 201) {
      successToast(response.data.message);
    }
    reset();
  };

  return (
    <main className="w-full relative flex justify-center">
      <section className="w-[100%] lg:w-[80%] h-auto mb-0">
        <section>
          <Navbar />
        </section>
        <div className="flex flex-col lg:flex-row lg:justify-around gap-10 lg:gap-0 mt-[5%]">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="shadow-2xl rounded-xl w-[80%] mx-auto lg:mx-0 lg:w-[55%] flex flex-col justify-center text-center py-10"
          >
            <InputField
              label="Name"
              type="text"
              name="name"
              placeholder="Enter the location name..."
              register={register}
              error={errors.name}
            />
            <InputField
              label="Image Url"
              type="text"
              name="imageUrl"
              placeholder="Enter the image url"
              register={register}
              error={errors.imageUrl}
            />
            <InputField
              label="Price"
              type="number"
              name="price"
              placeholder="Enter the price for one person..."
              register={register}
              error={errors.price}
            />
            <InputField
              textArea={true}
              label="Description"
              type="text"
              name="heading"
              placeholder="Enter the description..."
              register={register}
              error={errors.heading}
            />
            <Button type="submit">Add Location</Button>
          </form>
          <div className="w-1 bg-slate-200 hidden lg:block"></div>
          <div className="w-[80%] mx-auto lg:mx-0 lg:w-[30%]">
            <DestinationCard ele={allValues} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default IsAuthorized(Admin);
