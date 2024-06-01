import React, { useState } from "react";
import ModiJi from "/ModiJi.png";
import verified from "/verified.png";
import UpdateProfile from "./UpdateProfile";

const UserHeader = () => {
  
  return (
    <div className="mx-[32%] mt-10 text-bold font-semibold">
      <section className="flex justify-between">
        <div className="flex gap-x-4">
          <div className="text-2xl">narendra modi</div>
          <img className="w-8 h-8" src={verified}></img>
        </div>

        <div>
          <img
            className="w-24 h-24 object-cover border rounded-full "
            src={ModiJi}
          ></img>
        </div>
      </section>

      <section>PrimeMinister of Bharat</section>

      <section className="text-xs flex justify-between">
        <div>110.7M followers</div>
        <section className="flex gap-x-5">
          <div>handlers like goto insta and share</div>
          <div>
            <UpdateProfile />
          </div>
        </section>
      </section>

      
    </div>
  );
};

export default UserHeader;
