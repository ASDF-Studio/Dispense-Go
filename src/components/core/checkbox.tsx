import React from 'react';
import { Typography } from '.';

interface CheckboxProps {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label }) => (
    <label className={`block mb-2 py-6`}>
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

