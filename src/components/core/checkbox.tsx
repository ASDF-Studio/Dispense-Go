import React, { FC } from 'react';
import { Typography } from '.';
import { FlexCenter } from '@/layout';

interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => (
  <label className={`block mb-2 py-3`}>
    <input type="checkbox" className="mr-2" />
    <Typography intent={"grstk13"} classname="uppercase">
      {label}
    </Typography>
  </label>
);

export const CheckboxClild: React.FC<CheckboxProps> = ({ label }) => (
  <label className="block mb-2 py-2 pl-10">
    <input type="checkbox" className="mr-2" />
    <Typography intent={"grstk13"} classname="uppercase">
      {label}
    </Typography>
  </label>
);

type CircleCheckBox = {
  isSelected?: boolean
}

export const CircleCheckBox: FC<CircleCheckBox> = ({ isSelected = false }) => {
  return <FlexCenter className={["h-l w-l rounded-full border border-text-black-70", isSelected ? "bg-black" : ""].join(" ")}>
    {isSelected && <div className='bg-white h-s w-s rounded-full' />}
  </FlexCenter>
}
