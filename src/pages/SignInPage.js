import { yupResolver } from "@hookform/resolvers/yup";
import ButtonGoogle from "components/button/ButtonGoogle";
import useToggleValue from "hooks/useToggleValue";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LayoutAuthen from "../layout/LayoutAuthen";
import * as yup from "yup";
import FormGroup from "components/common/FormGroup";
import Label from "components/lable/Label";
import IconEyeToggle from "components/icon/IconEyeToggle";
import Button from "components/button/Button";
import Input from "components/Input/Input";

const schema = yup
  .object({
    email: yup.string().email().required("Invalid email"),
    password: yup
      .string()
      .min(8, "Password must be 8 character ")
      .required("This field already registerd"),
  })
  .required();
const SigninPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: togglePassword, handleValue: handleTooglePassword } =
    useToggleValue(false);
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <div>
      <LayoutAuthen heading="Welcome Back!">
        <p className="mb-6 text-xs font-normal text-center lg:font-medium lg:text-sm text-text3 lg:mb-5">
          Dont have an account?{" "}
          <Link to="/sign-up" className="underline text-primary">
            Sign up
          </Link>
        </p>
        <ButtonGoogle></ButtonGoogle>
        <form action="" onSubmit={handleSubmit(handleSignUp)}>
          <FormGroup>
            <Label htmlFor="email">Email *</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="bmkhanh912@gmail.com"
              error={errors.email?.message}></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">password *</Label>
            <Input
              control={control}
              name="password"
              type={`${togglePassword ? "text" : "password"}`}
              placeholder="Enter a password"
              error={errors.password?.message}>
              <IconEyeToggle
                open={togglePassword}
                onClick={handleTooglePassword}></IconEyeToggle>
            </Input>
          </FormGroup>
          <div className="font-medium text-primary text-right text-sm mb-5 block cursor-pointer">
            Forgot password
          </div>
          <Button className="w-full bg-primary" type="submit">
            Sign in
          </Button>
        </form>
      </LayoutAuthen>
    </div>
  );
};

export default SigninPage;
