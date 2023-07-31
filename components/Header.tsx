import React from "react";
import Image from "next/image";
import { BUTTON_VARIANTS, ButtonCTA } from "./base/Button";

export const Header = () => {
  return (
    <div className="flex justify-between py-5 px-10">
      <Image
        src="/assets/logo_header.svg"
        width={142}
        height={65}
        alt="Purple Tree"
      ></Image>
      <ButtonCTA variant={BUTTON_VARIANTS.SECONDARY}>contact us</ButtonCTA>
    </div>
  );
};
