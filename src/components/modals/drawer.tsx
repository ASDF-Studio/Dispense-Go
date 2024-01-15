import { IconButton, Typography } from "@/core";
import { BaseModal } from ".";
import { Dispatch, FC, SetStateAction } from "react";
import { Flex, FlexColumn } from "@/layout";
import Image from "next/image";
import { Links } from "../../constants";
import Link from "next/link";
import { ProductSearch } from "@/core/input";
import { AnimatedDiv } from "@/animations/scroll";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const Drawer: FC<Props> = ({ open = false, setOpen }) => {
  return (
    <BaseModal
      contentStyle={{
        top: "0",
        left: 0,
        border: 0,
        transform: "unset",
        maxWidth: "366px",
        borderRadius: 0,
        width: "100%",
        padding: 0,
        background: "transparent",
        height: "100%",
      }}
      open={open}
      setOpen={setOpen}
    >
      {/* <AnimatedDiv> */}
        <FlexColumn className={["p-6 bg-white gap-2 max-w-[366px] w-full h-full", open && "modal-slide-left"].join(" ")}>
          <Flex className="justify-between">
            <Image
              alt="dispense logo"
              width={198}
              height={35}
              src={"/assets/Logo.png"}
            />
            <IconButton
              onClick={() => setOpen(false)}
              icon={
                <Image
                  alt="dispense logo"
                  width={15}
                  height={24}
                  src={"/assets/icons/x-mark.svg"}
                />
              }
              className="text-[24px] font-light text-black"
            />
          </Flex>
          <FlexColumn className="py-[19px] gap-6">
            <Link href={"/search"} className="hover:cursor-pointer">
              <ProductSearch />
            </Link>
            <FlexColumn>
              {Links.map(({ text, icon }, index) => {
                return (
                  <>
                    <div className="border-b border-border-whiteSmoke" />
                    <Link href={"/category"} onClick={() => setOpen(false)}>
                      <Flex className="items-center h-[61px] gap-2">
                        {icon}{" "}
                        <Typography
                          intent={"mons13"}
                          classname="leading-[13px] tracking-[1.885px] uppercase font-medium"
                        >
                          {text}
                        </Typography>
                      </Flex>
                    </Link>
                    {index === Links.length - 1 && (
                      <div className="border-b border-border-whiteSmoke" />
                    )}
                  </>
                );
              })}
            </FlexColumn>
          </FlexColumn>
        </FlexColumn>
      {/* </AnimatedDiv> */}
    </BaseModal>
  );
};
