import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { Typography } from './typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FlexCenter } from '@/layout';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const buttonStyles = cva("gap-[8px]", {
    variants: {
        intent: {
            filled: "p-l rounded-md bg-primary-brand hover:bg-primary-hover",
            outline: "p-l rounded-md bg-transparent border-border-green-70 border hover:bg-border-green-10",
            inversed: "",
            text: "",
        },
        defaultVariants: {
            intent: "filled",
        },
    },
});

interface ButtonProps extends VariantProps<typeof buttonStyles>, ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    typographyVariant?: "body" | "buttons" | "grstk10" | "grstk15" | "grstk14" | "grskt12" | "mons15"
    textClassname?: string
    icon?: React.ReactNode
    classname?: string
    withWidth?: boolean
}

export const Button: FC<ButtonProps> = ({ intent, defaultVariants, text, typographyVariant = "buttons", icon, textClassname = "", classname, disabled, withWidth = true, ...props }) => {
    return <button className={[buttonStyles({ intent }), classname, withWidth && intent !== "text" && "min-w-[229px]"].join(" ")} {...props} disabled={disabled}>
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
    disabled?: boolean
} & React.HtmlHTMLAttributes<HTMLButtonElement>

export const IconButton: FC<IcontButtonProps> = ({ icon, classname, onClick, disabled = false, ...rest }) => {
    return <button disabled={disabled} className={classname} onClick={onClick} {...rest}>
        <FlexCenter>{icon}</FlexCenter>
    </button>
}