import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "components/Input/Input";
import LayoutAuthen from "layout/LayoutAuthen";
import FormGroup from "../components/common/FormGroup";
import Label from "../components/lable/Label";
import Button from "components/button/Button";
import Checkbox from "components/checkbox/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "components/icon/IconEyeToggle";
import useToggleValue from "hooks/useToggleValue";
import ButtonGoogle from "components/button/ButtonGoogle";

const schema = yup
  .object({
    fullname: yup.string().required("This field already registerd"),
    email: yup.string().email().required("This field already registerd"),
    password: yup
      .string()
      .min(8, "Password must be 8 character ")
      .required("This field already registerd"),
  })
  .required();
const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: acseptTerm, handleValue: handleToogleTerm } =
    useToggleValue(false);
  const { value: togglePassword, handleValue: handleTooglePassword } =
    useToggleValue(false);
  const handleSignUp = (values) => {
    console.log(values);
  };
  return (
    <div>
      <LayoutAuthen heading="Sign Up">
        <p className="mb-6 text-xs font-normal text-center lg:font-medium lg:text-sm text-text3 lg:mb-5">
          Already have an account?{" "}
          <Link to="/sign-in" className="underline text-primary">
            Sign in
          </Link>
        </p>
        <ButtonGoogle text="Sign up with google"></ButtonGoogle>
        <p className="mb-1 text-sm font-normal text-center text-text2 lg:mb-5 dark:text-white">
          Or sign up with email
        </p>
        <form action="" onSubmit={handleSubmit(handleSignUp)}>
          <FormGroup>
            <Label htmlFor="fullname">Fullname *</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="bmk"
              error={errors.fullname?.message}></Input>
          </FormGroup>
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
              placeholder="create a password"
              error={errors.password?.message}>
              <IconEyeToggle
                open={togglePassword}
                onClick={handleTooglePassword}></IconEyeToggle>
            </Input>
          </FormGroup>
          <Checkbox
            name="term"
            checked={acseptTerm}
            onClick={handleToogleTerm}
            className="mb-5">
            {" "}
            <p className="flex-1 text-sm text-text2">
              I agree to the{" "}
              <span className="underline text-secondary">Tearms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy</span>.
            </p>
          </Checkbox>
          <Button className="w-full bg-primary" type="submit">
            Create my account
          </Button>
        </form>
      </LayoutAuthen>
    </div>
  );
};

export default SignUpPage;
