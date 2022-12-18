import React from "react";
import { useController } from "react-hook-form";

const Texarea = ({ type = "text", control, name = "", ...rest }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <textarea
      className='"w-full py-4 px-6 min-h-[141px] text-sm font-medium border rounded-lg outline-none text-text1 bg-transparent dark:text-white dark:placeholder:text-text2 placeholder:text-text4"'
      name={name}
      type={type}
      id={name}
      {...field}
      {...rest}
      control={control}></textarea>
  );
};

export default Texarea;
