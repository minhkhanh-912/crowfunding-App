import Button from "components/button/Button";
import Heading from "components/common/Heading";
import { ImageDefault } from "constains/Global";
import React from "react";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import CampaignSupport from "./CampaignSupport";
import CamCategory from "./parts/CamCategory";
import Camdescription from "./parts/Camdescription";
import CamImage from "./parts/CamImage";
import CamMeta from "./parts/CamMeta";
import CamTitle from "./parts/CamTitle";
import CamviewAuthor from "./parts/CamviewAuthor";

const CampaignView = () => {
  return (
    <>
      <div
        className="h-[140px] w-full rounded-3xl bg-cover bg-no-repeat bg-center flex justify-center items-center mb-10"
        style={{
          backgroundImage:
            "linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, rgba(0, 0, 0, 0.4) 87.01%),url(https://source.unsplash.com/random)",
        }}>
        <h1 className="text-white font-bold text-4xl">Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CamImage className="w-full h-[398px] flex-1 mb-6"></CamImage>
          <div className="flex items-center gap-x-5 justify-center">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CamCategory title="Architecture"></CamCategory>
          <CamTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CamTitle>
          <Camdescription classname="mb-6 text-sm font-normal">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </Camdescription>
          <CamviewAuthor></CamviewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-1 mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-7">
            <CamMeta type="big"></CamMeta>
            <CamMeta type="big"></CamMeta>
            <CamMeta type="big"></CamMeta>
          </div>
          <Button className="w-full">Back this project</Button>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white py-5 px-[99px]  mt-[94px] shadow-[1px_0px_1px_rgba(0,_0,_0,_0.25)] mb-6">
        <div className="flex items-center gap-x-14 text-text3 text-sm font-semibold cursor-pointer">
          <span className="text-secondary">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button className="px-9">Back this project</Button>
      </div>
      <div className="grid grid-cols-[1.3fr,1fr] gap-x-[124px] px-[99px] mb-[70px]">
        <div>
          <Heading>Story</Heading>
          <div className="bg-white w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            dignissimos, ullam consectetur error possimus enim pariatur, dolor
            mollitia molestias eius, dicta consequuntur corrupti placeat
            suscipit eligendi tempore nostrum odio dolorem?
          </div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="flex flex-col gap-y-7">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default CampaignView;
