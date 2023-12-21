import { Button, Typography } from "@/core";
import { Input, PasswordInput } from "@/core/input";
import { Flex, FlexColumn } from "@/layout";
import { CustomIconHandler } from "../../../utils/icon";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Link from "next/link";

type Props = {
  setState: Dispatch<SetStateAction<"login" | "signup" | "reset">>;
};

export const ResetContents: FC<Props> = ({ setState }) => {
  return (
    <>
      <Typography
        intent={"grskt28"}
        classname="leading-[28px] tracking-[-0.98px] text-text-black-100"
      >
        Reset Password
      </Typography>
      <Typography intent={"mons15"} classname="leading-[22.5px] font-normal text-text-black-100 text-center">
        Enter your email linked to your account to receive instructions on how to reset your password
      </Typography>
      <Input
        classname="text-mons-15 font-normal leading-[15px] w-full bg-transparent focus-visible:border-none"
        containerClassname="p-2 rounded-md border border-border-whiteSmoke bg-background-whiteGrey h-[44px] w-full"
        startingIcon={<CustomIconHandler name="envelope" />}
        placeholder="Enter email address"
      />
      <Button
        text="reset"
        intent={"filled"}
        typographyVariant="buttons"
        classname="w-full"
      />
      <Typography
        intent={"mons15"}
        classname="font-medium leading-[19.5px] tracking-normal text-text-black-70"
      >
        Or return to <span className="text-text-black-100 underline hover:cursor-pointer" onClick={() => setState("login")}>
          Log In
        </span>
      </Typography>
    </>
  );
};
