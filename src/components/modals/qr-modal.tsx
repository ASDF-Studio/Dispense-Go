"use client";

import { Button, IconButton, Typography } from "@/core";
import { BaseModal } from ".";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Flex, FlexColumn } from "@/layout";
import Image from "next/image";

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

export const QrModal:FC<Props> = ({open, setOpen}) => {


    return (
        <BaseModal
            open={open}
            setOpen={setOpen}
            contentStyle={{
                maxWidth: "800px",
                width: "100%",
                height: "auto",
                minHeight: "auto",
                background: "transparent",
                justifyContent: "center",
                display: "flex",
                padding: "0 9px"
            }}
        >
            <Flex className="max-w-[609px] rounded-[4px] p-5 sm:p-6   w-full border-b-[14px] border-b-primary-brand bg-background-whiteS relative">
            <IconButton onClick={() => setOpen(false)}  icon={<Image alt="dispense logo" width={15} height={24} src={"/assets/icons/x-mark.svg"} />} className="text-[24px] font-light text-black absolute right-[44px] top-[36px]" />
                <FlexColumn className="bg-white py-6 gap-6 w-full items-center rounded-[12px]">
                    <Image src={"/assets/QR Code sample 1.png"} width={561} height={294} alt="qrcode" />
                    <Typography intent={"mons14"} classname="font-semibold leading-[14px] text-primary-green">
                        DISPENSE ORDER ID: #1725178261925A81
                    </Typography>
                </FlexColumn>
            </Flex>
        </BaseModal>
    );
};
