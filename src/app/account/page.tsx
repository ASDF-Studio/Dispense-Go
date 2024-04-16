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
import { accountData } from "../../static-data/account";

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
      <Typography intent={"mons15"} classname="text-text-black-70 capitalize">
        {value}
      </Typography>
    </FlexColumn>
  );
};

export default function Account() {
  return (
    <MainLayout footerItems={[]}>
      <FlexColumn className="px-8 m:px-0 m:max-w-[606px] xl:max-w-[666px] mx-auto w-full gap-6 py-[42px]">
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

        <Flex className="gap-6  flex-col m:flex-row">
          <Column title="name" value={accountData.name} />
          <Column title="sex" value={accountData.sex} />
        </Flex>
        <Flex className="gap-6 flex-col m:flex-row">
          <Column title="Date of Birth" value={accountData.dateOfBirth} />
          <Column title="Contact Number" value={accountData.contactNumber} />
        </Flex>
        <Column title="Complete Address" value={accountData.completeAddress} />
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
              <IconHandler
                name="circle-check"
                classname="text-[12px] font-bold text-primary-brand"
              />
              <Typography
                intent={"grskt12"}
                classname="text-primary-brand tracking-[1.74px] leading-[12px] uppercase"
              >
                {accountData.verifitcationInfo === "verified"
                  ? "verified"
                  : "unverified"}
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
        <Column title="Email Address" value={accountData.emailAddress} />
        <Column title="Password" value={accountData.password} />
        <Link href={"/account/change-password"}>
          <Button
            intent={"filled"}
            text="change password"
            typographyVariant="buttons"
            classname="max-w-[270px]"
          />
        </Link>
      </FlexColumn>
    </MainLayout>
  );
}
