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



// server {
//     listen 80;
//     listen [::]:80;
//     server_name www.therapynotewriter.com;
//     return 301 $scheme://therapynotewriter.com$request_uri;
// }
// server {
//     server_name therapynotewriter.com;

//     gzip on;
//     gzip_proxied any;
//     gzip_types application/javascript application/x-javascript text/css text/javascript;
//     gzip_comp_level 5;
//     gzip_buffers 16 8k;
//     gzip_min_length 256;

//     location /_next/static/ {
//             alias /var/www/therapy-front/.next/static/;
//             expires 365d;
//             access_log off;
//     }

//     location / {
//             proxy_pass http://127.0.0.1:4001;
//             proxy_http_version 1.1;
//             proxy_set_header Upgrade $http_upgrade;
//             proxy_set_header Connection 'upgrade';
//             proxy_set_header Host $host;
//             proxy_cache_bypass $http_upgrade;
//     }



// listen 443 ssl; # managed by Certbot
// ssl_certificate /etc/letsencrypt/live/therapynote.airlystudio.com/fullchain.pem; # managed by Certbot
// ssl_certificate_key /etc/letsencrypt/live/therapynote.airlystudio.com/privkey.pem; # managed by Certbot
// include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
// ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

// }

// server {
// if ($host = therapynotewriter.com) {
//     return 301 https://$host$request_uri;
// } # managed by Certbot


//     server_name therapynotewriter.com;
// listen 80;
// return 404; # managed by Certbot


// }