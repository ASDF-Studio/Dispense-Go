"use client"
import { Button, IconButton, Typography } from "@/core";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { BaseModal } from "..";
import { Flex, FlexColumn, Pressable } from "@/layout";
import Image from "next/image";
import Link from "next/link";
import { Input, PasswordInput } from "@/core/input";
import { CustomIconHandler } from "../../../utils/icon";
import { LoginContents } from "./login";
import { SignupContents } from "./signup";
import { useParams, useSearchParams } from "next/navigation";
import { ResetContents } from "./restpassword";


type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const LoginModal: FC<Props> = ({ open = false, setOpen }) => {
    const [state, setState] = useState<"login" | "signup" | "reset">("login")

    return (
        <BaseModal
            contentStyle={{
                top: "0",
                bottom: "unset",
                left: "unset",
                right: "0px",
                border: 0,
                opacity: open ? 1 : 0,
                transform: "unset",
                maxWidth: "387px",
                borderRadius: 0,
                width: "100%",
                padding: 0,
                height: "100%",
                transition: "0.3s",
            }}
            open={open}
            overlayClose={true}
            setOpen={setOpen}
        >
            <FlexColumn className="p-6 pb-8 gap-6 items-center">
                <IconButton onClick={() => setOpen(false)} icon={<Image alt="dispense logo" width={15} height={24} src={"/assets/icons/x-mark.svg"} />} classname="self-end" />
                <Image width={81} height={113} src={"/assets/logo-without-text-black.png"} alt="logo" />
                {state === "login" && <LoginContents setState={setState} />}
                {state === "signup" && <SignupContents setState={setState} />}
                {state === "reset" && <ResetContents setState={setState} />}
            </FlexColumn>

        </BaseModal>
    );
};
