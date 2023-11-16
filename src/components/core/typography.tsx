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
            monsNormal16: "text-mons-normal-16"

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