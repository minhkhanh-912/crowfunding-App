import Button from "components/button/Button";
import Input from "components/Input/Input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div className="mb-[60px]">
      <h2 className="text-text1 font-semibold text-lg my-2">Support</h2>
      <div className="bg-white shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] px-6 py-5 rounded-xl">
        <p className="text-text3 p-2 font-medium text-xl mb-5 text-center">
          Pledge without reward
        </p>
        <Input
          placeholder="$10"
          control={control}
          name="pedge"
          className="!mb-5 !text-lg !font-medium"></Input>
        <div className="p-5 bg-[#F7F7F7] rounded-lg mb-5">
          <p className="text-text2 font-semibold text-sm mb-5">
            Back it because you believe in it.
          </p>
          <p className="text-text3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
