import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'
import { Typography } from './typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FlexCenter } from '@/layout';

const buttonStyles = cva("min-w-[229px] p-l rounded-md  gap-[8px]", {
    variants: {
        intent: {
            filled: "bg-primary-brand hover:bg-primary-hover",
            outline: "bg-white border-border-green-70 border hover:bg-border-green-10",
        },
        defaultVariants: {
            intent: "filled",
        },
    },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
    text: string;
    typographyVariant: "body" | "buttons"
    icon?: React.ReactNode
}

export const Button: FC<ButtonProps> = ({ intent, defaultVariants, text, typographyVariant, icon, ...props }) => {
    return <button className={buttonStyles({ intent })} {...props}>
        <FlexCenter className="gap-2">
            <Typography intent={typographyVariant}>
                {text}
            </Typography>
            <FontAwesomeIcon icon={faArrowRight} className="fas fa-arrow-right text-[14px] font-normal" />
        </FlexCenter>
    </button>
}
