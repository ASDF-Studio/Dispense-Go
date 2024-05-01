"use client";
import React, { useRef, type ReactNode } from "react";
import { Provider } from "react-redux";
import { type AppStore } from "../redux/store.types";
import makeStore from "../redux/store";

type StoreProviderProps = {
    children: ReactNode;
};
function StoreProvider({ children }: StoreProviderProps) {
    const storeRef = useRef<AppStore>();

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}

export default StoreProvider;
