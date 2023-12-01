import { FC, ReactNode, CSSProperties, useRef, useState, useEffect } from 'react';
import { Paddings } from "../../constants";

type SpacingType = "s" | "m" | "l" | "x";

type SpacingProps = {
    spacing?: [SpacingType, SpacingType, SpacingType, SpacingType];
    margin?: SpacingType;
    padding?: SpacingType;
    children: React.ReactNode;
    classname?: string
    withSpacing?: boolean
    color?: string
};

export const Padding: FC<SpacingProps> = ({ spacing, padding, children, classname }) => {

    return <div className={[classname, ""].join(" ")}>{children}</div>;
};

export const Margin: FC<SpacingProps> = ({ spacing, padding, children, classname }) => {
    return <div className={[classname, ""].join(" ")}>{children}</div>;

};

export const SafeScreen: FC<SpacingProps> = ({ classname, children, withSpacing = true }) => {
    return <div className={[classname,
        withSpacing ? "px-desktop" : "",
        ""
    ].join(" ")}>{children}</div>;
}

export const SafeAreaSection: FC<SpacingProps> = ({ classname, children, withSpacing = true, color = "" }) => {
    return <section style={{
        background: color
    }} className={[classname,
        withSpacing ? Paddings : "",
        ""
    ].join(" ")}>{children}</section>;
}