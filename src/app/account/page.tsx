"use client";
import React, { FC } from "react";
import { Checkbox, CheckboxClild } from "@/core/checkbox";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { CategoryPoster } from "@/poster/category";
import { ProductList } from "@/sliders/productList";
import { Button, Typography } from "@/core";
import Image from "next/image";
import { Divider } from "@/divider";
import { IconHandler } from "../../utils/icon";
import Link from "next/link";

type ColumnType = {
    title: string;
    value: string;
};

const Column: FC<ColumnType> = ({ title, value }) => {
    return (
        <FlexColumn className="gap-4 w-full">
            <Typography
                intent={"mons15"}
                classname="font-semibold text-text-black-100 capitalize"
            >
                {title}
            </Typography>
            <Typography
                intent={"mons15"}
                classname="text-text-black-70 capitalize"
            >
                {value}
            </Typography>
        </FlexColumn>
    );
};

export default function Account() {
    return (
        <MainLayout footerItems={[]}>
            <FlexColumn className="max-w-[666px] mx-auto w-full gap-6 py-[42px]">
                <Flex className="justify-between">
                    <Typography
                        intent={"grstkt22"}
                        classname="tracking-[-0.77px] text-text-black-100"
                    >
                        Profile Information
                    </Typography>
                    <Image
                        width={61}
                        height={19}
                        src={"/assets/idenfy.svg"}
                        alt="idenfy logo"
                    />
                </Flex>
                <Divider />

                <Flex className="gap-6">
                    <Column title="name" value="Marcus Inigo Pascual" />
                    <Column title="sex" value="male" />
                </Flex>
                <Flex className="gap-6">
                    <Column title="Date of Birth" value="June 10, 1972" />
                    <Column title="Contact Number" value="088 1672 9128" />
                </Flex>
                <Column title="Complete Address" value="House 742, 1242  #123 ABC, Kentucky Avenue, Eugene, Oregon" />
                <FlexColumn className="gap-4">
                    <Typography
                        intent={"mons15"}
                        classname="font-semibold text-text-black-100 capitalize"
                    >
                        Identity Verification Information
                    </Typography>
                    <Flex className="p-4 justify-between  rounded-[4px] border border-primary-brand bg-border-whiteSmoke items-center">
                        <Typography intent={"mons15"} classname="text-text-black-100">
                            Drivers License
                        </Typography>
                        <Flex className="gap-2">
                            <IconHandler name="circle-check" classname="text-[12px] font-bold text-primary-brand" />
                            <Typography intent={"grskt12"} classname="text-primary-brand tracking-[1.74px] leading-[12px] uppercase">
                                verified
                            </Typography>
                        </Flex>
                    </Flex>
                </FlexColumn>
                <Divider />
                <Typography
                    intent={"grstkt22"}
                    classname="tracking-[-0.77px] text-text-black-100"
                >
                    Account Settings
                </Typography>
                <Column title="Email Address" value="marcusinigopascual@gmail.com" />
                <Column title="Password" value="••••••••••••••••" />
                <Link href={"/account/change-password"}>
                    <Button intent={"filled"} text="change password" typographyVariant="buttons" classname="max-w-[270px]" />
                </Link>

            </FlexColumn>

        </MainLayout>
    );
}
