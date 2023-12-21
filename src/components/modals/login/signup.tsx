import { Button, Typography } from "@/core";
import { Input, PasswordInput } from "@/core/input";
import { Flex, FlexColumn } from "@/layout";
import { CustomIconHandler } from "../../../utils/icon";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { CheckboxClild } from "@/core/checkbox";

type Props = {
    setState: Dispatch<SetStateAction<"login" | "signup" | "reset">>;
};

export const SignupContents: FC<Props> = ({ setState }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <Typography
                intent={"grskt28"}
                classname="leading-[28px] tracking-[-0.98px] text-text-black-100"
            >
                Create Account
            </Typography>
            <FlexColumn className="gap-4 w-full">
                <Input
                    classname="text-mons-15 font-normal leading-[15px] w-full bg-transparent focus-visible:border-none"
                    containerClassname="p-2 rounded-md border border-border-whiteSmoke bg-background-whiteGrey h-[44px]"
                    startingIcon={<CustomIconHandler name="envelope" />}
                    placeholder="Enter email address"
                />
                <PasswordInput />
                <PasswordInput placeholder={"Confirm password"} />
                <Flex className="gap-3 justify-start">
                    <label className="block">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onClick={() => setIsChecked(!isChecked)}
                            className="accent-black"
                        />
                    </label>
                    <Typography
                        intent={"mons12"}
                        classname="leading-[18px] tracking-normal font-normal text-text-black-100"
                    >
                        By checking this, I agree that I am at least 21 years of age and
                        agree to Dispense{" "}
                        <Typography classname="font-medium underline hover:cursor-pointer">
                            Terms of Service,
                        </Typography>{" "}
                        <Typography classname="font-medium underline hover:cursor-pointer">
                            Privacy Policy
                        </Typography>
                        , and to receive news and updates through emails.
                    </Typography>
                </Flex>
                <Button
                    text="Create account"
                    disabled={!isChecked}
                    intent={"filled"}
                    typographyVariant="buttons"
                    textClassname={[!isChecked && "text-text-black-40"].join(" ")}
                    classname={[!isChecked && "bg-background-opacity"].join(" ")}
                />
            </FlexColumn>
            <Flex className="justify-between items-center w-full">
                <Typography
                    intent={"mons15"}
                    classname="font-medium leading-[19.5px] tracking-normal text-text-black-70"
                >
                    Already have an account?
                </Typography>
                <Button
                    withWidth={false}
                    text="LOG IN"
                    intent={"outline"}
                    onClick={() => setState("login")}
                    typographyVariant="grstk14"
                    textClassname="tracking-[2.03px] uppercase leading-[14px] text-black font-medium"
                    classname="min-w-[102px] w-[112px]"
                />
            </Flex>
        </>
    );
};
