import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import Input from "components/Input/Input";
import Label from "components/lable/Label";
import Texarea from "components/textarea/Texarea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import axios from "axios";
import ImageUploader from "quill-image-uploader";
import "react-quill/dist/quill.snow.css";
import { useMemo } from "react";
import Button from "components/button/Button";
Quill.register("modules/imageUploader", ImageUploader);

const CampaignAddnew = () => {
  const [content, setContent] = useState("");
  const { control, handleSubmit } = useForm();
  const [selectCategory, setselectCategory] = useState("");
  const handleSelectCategory = (values) => {
    setselectCategory(values);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // https://api.imgbb.com/1/upload?key=20be738ac4c04966d806ac1adc72f328
        // upload: async (file) => {
        //   const bodyFormData = new FormData();
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "POST",
        //     url: "https://api.imgbb.com/1/upload?key=20be738ac4c04966d806ac1adc72f328",
        //     data: bodyFormData,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   return response.data.data.url;
        // },
      },
    }),
    []
  );
  return (
    <div className="px-16 py-10 bg-white rounded-xl">
      <div className="text-center ">
        <h1 className="inline-block py-4 mb-10 text-2xl font-bold px-14 text-text2 bg-text4 bg-opacity-20 rounded-xl">
          Start a Campaign 🚀
        </h1>
        <form action="">
          <FormRow>
            <FormGroup>
              <Label>Campaign Titel *</Label>
              <Input
                placeholder="Write a titel"
                name="title"
                control={control}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={`${selectCategory || "Select a category"}`}
                  className={`${
                    selectCategory && "!text-text1"
                  }`}></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("Education")}>
                    Education
                  </Dropdown.Option>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("Education123")}>
                    Education123
                  </Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description *</Label>
            <Texarea
              control={control}
              name="description"
              placeholder="Write a short description...."></Texarea>
          </FormGroup>
          <FormGroup>
            <Label>story *</Label>
            <ReactQuill
              theme="snow"
              placeholder="Write your story......"
              modules={modules}
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label> Goal *</Label>
              <Input
                placeholder="$0.00 USD"
                name="goal"
                control={control}></Input>
            </FormGroup>
            <FormGroup>
              <Label>Raised Amount *</Label>
              <Input
                placeholder="$0.00 USD"
                name="amount"
                control={control}></Input>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label> Amount Prefilled</Label>
              <Input
                placeholder="Amount Prefilled "
                name="Prefilled"
                control={control}></Input>
              <p className="text-sm text-text3 mt-4 max-w-[387px]">
                It will help fill amount box by click, place each amount by
                comma, ex: 10,20,30,40
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video</Label>
              <Input
                placeholder="Video"
                name="amount"
                control={control}></Input>
              <p className="text-sm text-text3 mt-4 max-w-[387px]">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Campaign End Method</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={`${selectCategory || "Select one"}`}
                  className={`${
                    selectCategory && "!text-text1"
                  }`}></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("Education")}>
                    Education
                  </Dropdown.Option>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("Education123")}>
                    Education123
                  </Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label>Counrty</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={`${selectCategory || "Select a country"}`}
                  className={`${
                    selectCategory && "!text-text1"
                  }`}></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("Education")}>
                    Education
                  </Dropdown.Option>
                  <Dropdown.Option
                    onClick={() => handleSelectCategory("Education123")}>
                    Education123
                  </Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label> Start Date</Label>
              <Input
                placeholder=" Start Date"
                name="start_date"
                control={control}></Input>
            </FormGroup>
            <FormGroup>
              <Label>End Date</Label>
              <Input
                placeholder="End Date"
                name="end_date"
                control={control}></Input>
            </FormGroup>
          </FormRow>
          <Button className="mx-auto mt-5 px-10" kind="primary">Submit new campaign </Button>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddnew;
