import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react';

export const typographyStyles = cva("", {
    variants: {
        intent: {
            body: "text-[13px]",
            buttons: "text-buttons"
        },
        defaultVariants: {
            intent: "primary",
        },
    },
});

interface TypographyProps extends VariantProps<typeof typographyStyles> {
    children: React.ReactNode
}


export const Typography: FC<TypographyProps> = ({ children, intent }) => {
    return <span className={typographyStyles({ intent })}> {children}</span >
} 