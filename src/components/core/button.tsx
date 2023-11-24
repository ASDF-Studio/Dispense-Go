import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'
import { Typography } from './typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FlexCenter } from '@/layout';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const buttonStyles = cva("gap-[8px]", {
    variants: {
        intent: {
            filled: "min-w-[229px] p-l rounded-md bg-primary-brand hover:bg-primary-hover",
            outline: "min-w-[229px] p-l rounded-md bg-white border-border-green-70 border hover:bg-border-green-10",
            text: ""
        },
        defaultVariants: {
            intent: "filled",
        },
    },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
    text: string;
    typographyVariant?: "body" | "buttons" | "grstk10" | "grstk15" | "grstk14"
    textClassname?: string
    icon?: React.ReactNode
    classname?: string
}

export const Button: FC<ButtonProps> = ({ intent, defaultVariants, text, typographyVariant, icon, textClassname = "", classname, ...props }) => {
    return <button className={[buttonStyles({ intent }), classname].join(" ")} {...props}>
        <FlexCenter className="gap-3">
            <Typography intent={typographyVariant} classname={textClassname}>
                {text}
            </Typography>
            {icon}
        </FlexCenter>
    </button>
}

type IcontButtonProps = {
    icon: React.ReactNode
    classname?: string
    onClick?: () => void
}

export const IconButton: FC<IcontButtonProps> = ({ icon, classname, onClick }) => {
    return <button className={classname} onClick={onClick}>
        <FlexCenter>{icon}</FlexCenter>
    </button>
}