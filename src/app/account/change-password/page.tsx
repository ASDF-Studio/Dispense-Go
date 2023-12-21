"use client";
import React, { FC, useState } from "react";
import { Flex, FlexCenter, FlexColumn } from "@/layout";
import { MainLayout } from "@/layout/main";
import { Button, IconButton, Typography } from "@/core";
import { Divider } from "@/divider";
import { Input } from "@/core/input";
import { IconHandler } from "../../../utils/icon";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { Eye, EyeSlashIcon, LockIcon } from "../../../svg";

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

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false)
    const [showPassword1, setShowPassword1] = useState(false)
    return (
        <MainLayout footerItems={[]}>
            <FlexColumn className="max-w-[666px] mx-auto w-full gap-6 py-[42px]">
                <Typography
                    intent={"grstkt22"}
                    classname="tracking-[-0.77px] text-text-black-100"
                >
                    Change Password
                </Typography>
                <Divider />
                <FlexColumn className="gap-4">
                    <Typography
                        intent={"mons15"}
                        classname="font-semibold text-text-black-100 capitalize"
                    >
                        New Password
                    </Typography>
                    <Input
                        type={showPassword ? "text" : "password"}
                        endingIcon={<IconButton onClick={() => setShowPassword(!showPassword)} icon={showPassword ? <Eye className="shrink-0" /> : <EyeSlashIcon className="shrink-0" />} />}
                        classname="text-mons-15 font-normal leading-[15px] w-full bg-transparent focus-visible:border-none"
                        containerClassname="p-2 rounded-md border border-border-whiteSmoke bg-background-whiteGrey h-[44px]"
                        startingIcon={<LockIcon className="shrink-0" />}
                        placeholder="Enter new password"
                    />
                    <Typography
                        intent={"mons15"}
                        classname="font-semibold text-text-black-100 capitalize"
                    >
                        Confirm Password
                    </Typography>
                    <Input
                        type={showPassword1 ? "text" : "password"}
                        endingIcon={<IconButton onClick={() => setShowPassword1(!showPassword1)} icon={showPassword ? <Eye className="shrink-0" /> : <EyeSlashIcon className="shrink-0" />} />}
                        classname="text-mons-15 font-normal leading-[15px] w-full bg-transparent focus-visible:border-none"
                        containerClassname="p-2 rounded-md border border-border-whiteSmoke bg-background-whiteGrey h-[44px]"
                        startingIcon={<LockIcon className="shrink-0" />}
                        placeholder="Enter new password"
                    />
                </FlexColumn>
                <Button
                    intent={"filled"}
                    text="change password"
                    typographyVariant="buttons"
                    classname="max-w-[270px]"
                />
            </FlexColumn>
        </MainLayout>
    );
}
