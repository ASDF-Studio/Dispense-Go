import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react';

export const typographyStyles = cva("", {
    variants: {
        intent: {
            body: "text-[13px]",
            buttons: "text-buttons",
            monsNormal: "text-mons-normal",
            "monsNormal13": "text-mons-normal-13",
            monsNormal16: "text-mons-normal-16",
            monsSuper: "text-mons-super",
            monsBold10: "text-mons-bold",
            monsBold12: "text-mons-bold-12",
            monsBold16: "text-product-card",
            mons13: "text-mons-13",
            mons14: "text-mons-14",
            mons15: "text-mons-15",
            mons16: "text-mons-16",
            navbar13: "text-link",
            header1: "text-header-1",
            header2: "text-header-2",
            header3: "text-header-3",
            grstk10: "text-grstk-10",
            grstk13: "text-grtsk-13",
            grstk14: "text-grtsk-14",
            grstk15: "text-grtsk-15",
            grskt16: "text-grtsk-16",
            grstk24: "text-grstk-24",
            grskt28: "text-grtsk-28",
            grskt32: "text-grtsk-32",
            grskt48: "text-grtsk-48",
            headingGrstk: "heading-grstk",
            headingGrstk2: "heading-2-grstk",
        },
        defaultVariants: {
            intent: "primary",
        },
    },
});

interface TypographyProps extends VariantProps<typeof typographyStyles> {
    children: React.ReactNode
    classname?: string
}


export const Typography: FC<TypographyProps> = ({ children, intent, classname = "" }) => {
    return <span className={[typographyStyles({ intent }), classname].join(" ")}> {children}</span >
} 