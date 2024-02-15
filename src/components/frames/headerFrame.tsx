import React, { FunctionComponent, ReactNode } from 'react'
import { Header } from "~/components/Headings/head"
import { NavBar } from "~/components/Headings/navbar"
import { Text } from '@mantine/core';
import { Drawer, ScrollArea, useMantineTheme } from '@mantine/core';
import {maxWidth} from '~/utils/mediaQuery';
import { useMediaQuery } from "@mantine/hooks";

export const HeaderFrame : FunctionComponent<{ children: ReactNode }>= ({children}) => {
    const theme = useMantineTheme();
    const sm = useMediaQuery(maxWidth('1200px'))
    return (
        <div className = {`${sm ? 'pt-[2rem]' : 'px-[2rem] pt-[4rem]'} flex flex-col w-screen min-h-screen bg-gray-100 bg-grid-black/[0.1]  `}>
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
