import React, { FunctionComponent, ReactNode } from 'react'
import { Header } from "~/components/Headings/head"
import { NavBar } from "~/components/Headings/navbar"
import { Text } from '@mantine/core';
import { Drawer, ScrollArea } from '@mantine/core';

export const HeaderFrame : FunctionComponent<{ children: ReactNode }>= ({children}) => {
    const sm = false
    return (
        <div className = "flex flex-col w-screen min-h-screen bg-gray-100 bg-grid-black/[0.1] pt-[4rem] px-[2rem]">
            <div className = 'absolute top-0 left-0 w-full'>
                    <Header />
                    {/* <NavBar /> */}
            </div>
        
            <div className = "  " >
            <ScrollArea >
                {children}
            </ScrollArea>
            </div>
            
        </div>
    )
}
export default HeaderFrame;
