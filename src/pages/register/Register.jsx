import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./types";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../libs/toast-messages";
import {useRequestApi} from "../../libs/useApi";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const submitHandler = async (formData) => {
    const response = await useRequestApi("/users/register", "post", formData)

    if(response?.status == 201){
      successToast(response.data.message);
      navigate('/login')
    }
  };

  return (
    <section className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="shadow-2xl rounded-xl w-[30%] flex flex-col justify-center mt-[10%] text-center py-10"
      >
        <InputField
          type="text"
          name="username"
          placeholder="John Doe"
          register={register}
          error={errors.username}
        />
        <InputField
          type="email"
          name="email"
          placeholder="Johndoe@example.com"
          register={register}
          error={errors.email}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Enter password..."
          register={register}
          error={errors.password}
        />
        <InputField
          type="password"
          name="confirmPassword"
          placeholder="Conform the password..."
          register={register}
          error={errors.confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </section>
  );
};

export default Register;
