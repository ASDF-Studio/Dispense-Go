import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react';

export const typographyStyles = cva("", {
    variants: {
        intent: {
            body: "text-[13px]",
            buttons: "text-buttons",
            monsBold16: "text-product-card",
            "monsNormal13": "text-mons-normal-13",
            monsNormal: "text-mons-normal",
            monsSuper: "text-mons-super",
            monsBold10: "text-mons-bold",
            monsBold12: "text-mons-bold-12",
            monsNormal16: "text-mons-normal-16",
            mons13: "text-mons-13",
            navbar13: "text-link",
            header3: "text-header-3",
            mons15: "text-mons-15",
            grstk10: "text-grstk-10",
            header1: "text-header-1",
            grstk15: "text-grtsk-15",
            grskt16: "text-grtsk-16",
            grskt32: "text-grtsk-32",
            grskt48: "text-grtsk-48",
            header2: "text-header-2",
            mons14: "text-mons-14",
            grstk14: "text-grtsk-14",
            mons16: "text-mons-16",
            headingGrstk: "heading-grstk"
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