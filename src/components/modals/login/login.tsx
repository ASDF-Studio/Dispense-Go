import { Button, Typography } from "@/core";
import { Input, PasswordInput } from "@/core/input";
import { Flex, FlexColumn } from "@/layout";
import { CustomIconHandler } from "../../../utils/icon";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  setState: Dispatch<SetStateAction<"login" | "signup" | "reset">>;
};

export const LoginContents: FC<Props> = ({ setState }) => {
  return (
    <>
      <Typography
        intent={"grskt28"}
        classname="leading-[28px] tracking-[-0.98px] text-text-black-100"
      >
        Log In
      </Typography>
      <FlexColumn className="gap-4 w-full">
        <Input
          classname="text-mons-15 font-normal leading-[15px] w-full bg-transparent focus-visible:border-none"
          containerClassname="p-2 rounded-md border border-border-whiteSmoke bg-background-whiteGrey h-[44px]"
          startingIcon={<CustomIconHandler name="envelope" />}
          placeholder="Enter email address"
        />
        <PasswordInput />
        <FlexColumn className="items-center gap-3 w-full">
          <Button
            text="Log in"
            typographyVariant="buttons"
            intent={"filled"}
            classname="w-full"
          />
          <Link href={"/#reset-password"} onClick={() => setState("reset")}>
            <Typography
              intent={"mons12"}
              classname="leading-[12px] font-normal text-text-black-70 text-center"
            >
              Forgot your password?
            </Typography>
          </Link>
        </FlexColumn>
      </FlexColumn>
      <Flex className="justify-between items-center gap-4">
        <Typography
          intent={"mons15"}
          classname="font-medium leading-[19.5px] text-text-black-70"
        >
          Don’t have an account?
        </Typography>
        <Button
          withWidth={false}
          text="SIGN UP"
          onClick={() => setState("signup")}
          intent={"outline"}
          typographyVariant="grstk14"
          textClassname="tracking-[2.03px] uppercase leading-[14px] text-black font-medium"
          classname="w-[128px]"
        />
      </Flex>
    </>
  );
};
