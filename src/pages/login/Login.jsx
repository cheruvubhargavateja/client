import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./types";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRequestApi } from "../../libs/useApi";
import { successToast } from "../../libs/toast-messages";
import { userState } from "../../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const user = userState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const submitHandler = async (data) => {
    const response = await useRequestApi("/users/login", "post", data);

    if (response?.status == 200) {
      user.setUser(response.data.data);
      successToast(response.data.message);
      navigate("/", { replace: true });
    }
  };

  return (
    <section className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-[80%] shadow-2xl rounded-xl md:w-[50%] lg:w-[30%] flex flex-col justify-center mt-[40%] lg:mt-[15%] text-center py-10"
      >
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
        <Button type="submit">Sign in</Button>
        <div className="pt-6">
          <span className="text-coral-red text-sm">
            need to register? <Link to="/register">Sign UP</Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Login;
