import { FC } from "react";
import Link from "next/link";
import { Button, IconButton, Typography } from "@/core";
import { Flex, FlexColumn } from ".";
import { Links } from "../../constants";
import { Logo } from "@/logo";
import { IconHandler } from "../../utils/icon";
import { ProductSearch } from "@/core/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faLocationDot, faSearchDollar, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { SafeScreen } from "./spacing";

type Props = {};

type LinkType = {
    text: string;
    icon: JSX.Element;
};

const CustomLink: FC<LinkType> = ({ text, icon }) => {
    return (
        <Link href="/category">
            <Flex className="gap-2">
                {icon}
                <Typography intent="navbar13" classname="uppercase text-text-black-100">
                    {text}
                </Typography>
            </Flex>
        </Link>
    );
};

const LocationIndicator = () => {
    return <Flex className="items-center gap-m">
        <IconButton icon={
            <FontAwesomeIcon icon={faLocationDot} className="text-[24px]" />
        } />
        <Typography intent={"mons15"} classname="text-primary-black">
            Eugene, OR
        </Typography>
        <Button intent={"text"} typographyVariant="grstk10" text="CHANGE" textClassname="text-primary-brand" />
    </Flex>
}

const AccountIcon = () => {
    return <FontAwesomeIcon icon={faCircleUser} className="text-2xl font-light" />
}

const ShoppingCart = () => {
    return <FontAwesomeIcon icon={faShoppingBasket} className="text-2xl font-light" />
}

const Account = () => {
    return <Flex className="gap-4">
        <AccountIcon />
        <ShoppingCart />
    </Flex>
}

export const Header: FC<Props> = () => {
    return (
        <header>
            <SafeScreen classname="bg-white relative z-20" withSpacing={false}>
                <FlexColumn className="w-full">
                    <Flex className="items-center justify-between border-b border-b-solid border-border-whiteSmoke py-l px-desktop">
                        <Flex className="items-center gap-8">
                            <IconHandler
                                name="bars"
                                classname="text-[24px] font-light tracking-[-0.96px] leading-6 "
                            />
                            <Logo />
                        </Flex>
                        <ProductSearch />
                        <Flex className="gap-6">
                            <LocationIndicator />
                            <Account />
                        </Flex>
                    </Flex>
                    <nav className="flex h-[51px] items-center justify-between px-desktop">
                        {Links.map(({ text, icon }) => {
                            return <CustomLink text={text} icon={icon} />;
                        })}
                    </nav>
                </FlexColumn>
            </SafeScreen>
        </header>
    );
};
