import React from 'react';
import { Checkbox, CheckboxClild } from '@/core/checkbox'
import { Flex, FlexCenter, FlexColumn } from '@/layout'
import { MainLayout } from '@/layout/main'
import { CategoryPoster } from '@/poster/category'
import { ProductList } from '@/sliders/productList'
import { ProductInformation } from '@/ui/productInformation';
import { Comments } from '@/ui/comments';
import { Button, Typography } from '@/core';
import { Input } from '@/core/input';
import { PhoneIcon, UserIcon } from '../../svg';


export default function Page() {

    return (
        <MainLayout>
            <Flex className="justify-end bg-[url('/assets/background.svg')]">
                <FlexColumn className="px-6 py-8 m:p-8 xl:p-12 gap-6 bg-background-whiteS m:max-w-[580px] xl:max-w-[823px]">
                    <Typography intent={"header2"} classname="uppercase">
                        contact us
                    </Typography>
                    <Typography classname="font-normal leading-[22.5px] tracking-normal text-text-black-70" intent="mons15">
                        Any question or remarks? Send us a message.
                    </Typography>
                    <FlexColumn className="gap-4">
                        <Flex className="gap-4 flex-col m:flex-row">
                            <Input
                                placeholder="Your Name*"
                                startingIcon={<UserIcon />}
                                containerClassname="p-2 h-[44px] rounded-md border border-border-whiteSmoke bg-white w-full max-w-[355px]"
                                classname="bg-transparent search-input-1"
                            />
                            <Input
                                placeholder="Your Name*"
                                startingIcon={<img src='/assets/icons/message.svg' />}
                                containerClassname="p-2 h-[44px] rounded-md border border-border-whiteSmoke bg-white w-full max-w-[355px]"
                                classname="bg-transparent search-input-1"
                            />

                        </Flex>
                        <Flex className="gap-4 flex-col m:flex-row">
                            <Input
                                placeholder="Your Name*"
                                startingIcon={<PhoneIcon />}
                                containerClassname="p-2 h-[44px] rounded-md border border-border-whiteSmoke bg-white w-full max-w-[355px]"
                                classname="bg-transparent search-input-1"
                            />
                            <Input
                                placeholder="Your Name*"
                                startingIcon={<img src='/assets/icons/company.svg' />}
                                containerClassname="p-2 h-[44px] rounded-md border border-border-whiteSmoke bg-white w-full max-w-[355px]"
                                classname="bg-transparent search-input-1"
                            />
                        </Flex>
                        <textarea className='bg-white search-input-1 p-4 min-h-[320px]' placeholder="Write your message..." />
                    </FlexColumn>
                    <Typography intent={"mons12"} classname="leading-[15.6px] font-medium text-text-black-40">
                        By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use, and disclose your personal information including to third parties.
                    </Typography>
                    <Button text='submit' intent={"filled"} typographyVariant="buttons" />
                </FlexColumn>
            </Flex>
        </MainLayout>
    );
}
