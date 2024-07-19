'use client'

import { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const CrtContext = createContext<ContextProps | undefined>(undefined);

export const AppWrapper = ({children}: {children: ReactNode}) => {
    const [dark, setDark] = useState(false);

    return (
        <CrtContext.Provider value={{dark, setDark}}>
            {children}
        </CrtContext.Provider>
    );
}

export const UseCont = () => useContext(CrtContext)
