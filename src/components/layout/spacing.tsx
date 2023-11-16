import { FC } from "react";

type SpacingType = "s" | "m" | "l" | "x";

type SpacingProps = {
    spacing?: [SpacingType, SpacingType, SpacingType, SpacingType];
    margin?: SpacingType;
    padding?: SpacingType;
    children: React.ReactNode;
    classname?: string
};

export const Padding: FC<SpacingProps> = ({ spacing, padding, children, classname }) => {

    return <div className={[classname, ""].join(" ")}>{children}</div>;
};

export const Margin: FC<SpacingProps> = ({ spacing, padding, children, classname }) => {

    return <div className={[classname, ""].join(" ")}>{children}</div>;
};

export const Spacing = () => {
    return <div />
}