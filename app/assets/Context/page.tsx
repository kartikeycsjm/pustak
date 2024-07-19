'use client'
import { createContext, useContext, useState } from "react";
const CrtContext = createContext<any>(undefined);
const AppWrapper = ({children}: Readonly<{children: React.ReactNode}>) => {
    let [dark, setDark] = useState(false);
    return (
        <>
            <CrtContext.Provider value={{dark,setDark}}>
                {children}
            </CrtContext.Provider>
        </>
    )
}
export default AppWrapper;
export const UseCont=()=>useContext(CrtContext)
