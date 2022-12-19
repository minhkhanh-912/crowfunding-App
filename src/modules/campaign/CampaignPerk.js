import Button from "components/button/Button";
import React from "react";

const CampaignPerk = ({ showBT = false }) => {
  return (
    <div>
      <div className="bg-white shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] rounded-lg">
        <img
          src="https://source.unsplash.com/random"
          alt=""
          className="w-full h-[232px] object-cover rounded-lg"
        />
        <div className="py-5 pl-5 pr-8">
          <span className="py-1 px-3 bg-secondary text-white text-xs font-medium rounded-sm mb-5 inline-block">
            {" "}
            Featured
          </span>
          <h3 className="text-text1 font-semibold text-xl mb-1">
            Special One Camera
          </h3>
          <div className="flex items-center gap-x-3 mb-4">
            <span className="text-text1 font-bold text-xl">$2,724 USD</span>
            <div className="text-error text-sm font-medium flex items-center gap-x-1">
              <span className=" line-through">$1,504 USD</span>
              <span>(12% OFF)</span>
            </div>
          </div>
          <div className=" text-text1 font-medium">Estimated Shipping</div>
          <p className="text-sm text-text2 mb-4">October 2022</p>
          <p className="text-text1  mb-4">
            <strong className="font-medium">05</strong> claimed
          </p>
          <p className="text-text2">Ships worldwide</p>
        </div>
      </div>
      {showBT && (
        <div className="mt-6">
          <Button className="w-full" kind="secondary">
            Get this Perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
