import React, { Component } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type ButtonsProps = {
  color: string;
};

const Buttons: React.FC<ButtonsProps> = ({ color = "dark" }) => {
  return (
    <div className="flex gap-5 w-max">
      <PrimaryButton />
      <SecondaryButton color={color}/>
    </div>
  );
};

export default Buttons;
