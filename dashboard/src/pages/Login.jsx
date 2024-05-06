import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { useForm } from "react-hook-form";
import AlertBox from "../components/AlertBox";
import useLogin from "../hooks/useLogin";

export default function Login() {
  let {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let {login} = useLogin();

  const onSubmit = async (data) => {
    await login(data);
  };
  return (
    <>
     {errors.email  && <AlertBox message={"Must be put the inputs feild!"} />}
     {errors.password && <AlertBox message={"Must be put the inputs feild!"} />}
      <div className=" flex justify-center items-center h-screen">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to Login.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("email", { required: true })}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("password", { required: true })}
              />
            </div>
            <Checkbox
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register("rememberMe", { required: true })}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            {errors.rememberMe && (
              <Typography>
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  Please check Terms and Conditions
                </a>
              </Typography>
            )}
            <Input type="submit" className="bg-[#212121] text-white" />
          </form>
        </Card>
      </div>
    </>
  );
}
