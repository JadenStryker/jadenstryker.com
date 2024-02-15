
import { useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconFileText, IconHome, IconMail } from '@tabler/icons-react';
import { Text, useMantineTheme } from '@mantine/core'
import Link from 'next/link';
import {maxWidth} from '~/utils/mediaQuery';
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from '@mantine/core';
import { Burger } from '@mantine/core';

export const Header = () => {
    const theme = useMantineTheme();
    const sm = useMediaQuery(maxWidth('1200px'))
    const buttonDropColor = theme.colors.scienceOrange[3]; 
    const shadow = theme.shadows.indent
    const darkDrop = theme.colors.scienceOrange[3]; 
    const darkerDrop = theme.colors.scienceOrange[2]; 
    const color = ''
    const shadowMiddle = theme.shadows.welcomeDropMiddle;
    const shadowRight = theme.shadows.welcomeDropRight;
    const shadowLeft = theme.shadows.welcomeDropLeft;
    const [isHovered, setIsHovered] = useState<number | null>(null);
    const [opened, {toggle }] = useDisclosure(false);
    const [openNav, setOpenNav] = useState(false);
    console.log("opened", openNav);

    const actions = [{name: 'PORTFOLIO', link: '/portfolio', shadow: shadowLeft}, 
                        {name: 'THE TOOLS', link: '/skillset', shadow: shadowMiddle}, 
                        {name: 'BACKGROUND AND EDUCATION', link: '/background', shadow: shadowMiddle}, 
                        {name: 'WORK EXPIRENCE', link: '/work', shadow: shadowRight}]

    const ActionsJSX = () => (
        actions.map((item, index) => (
            <Link href = {item.link} key={index} className='rounded-xl p-1 px-2 m-1 flex hover:cursor-pointer bg-[#cc4e00] hover:bg-[#ff4d00] '  style={{boxShadow: item.shadow, whiteSpace: 'nowrap'  }} onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() =>     (false)} >
                <Text size='lg' fw={600}> {item.name} </Text>
            </Link>
        ))
    );
    const NavOptions = () => (
        <div className = "absolute left-0 w-full bg-red-400 relative">
                <Link className = "absolute left-3 top-3 cursor-pointer hover:scale-110" href={'/'}> 
                    <IconHome color = {'$9d3c00'} fill = {buttonDropColor} size = {36}/>
                </Link>
                <div className = {`absolute top-2 left-1/2 transform -translate-x-2/3 flex ${sm ? 'flex-col' : 'flex-row'} `}>
                    <ActionsJSX />
                </div>
                <div className = "absolute top-3 right-3 flex flex-row gap-x-2   ">
                    <Link target="_blank" href = {'https://github.com/JadenStryker'} className = "email, linkedin, github, resume rounded-lg p-1 hover:scale-105" style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <IconBrandGithub size = {24} />
                    </Link>
                    <Link target="_blank" href ={'https://www.linkedin.com/in/jaden-stryker-335593173/'} className = "email, linkedin, github, resume rounded-lg p-1 hover:scale-105" style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <IconBrandLinkedin size = {24} />
                    </Link>
                    <Link target="_blank" href = {'mailto:jaden.stryker03@gmail.com'} className = "email, linkedin, github, resume rounded-lg p-1 hover:scale-105" style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <IconMail size = {24} />
                    </Link>
                    <div className = "email, linkedin, github, resume rounded-lg p-1 cursor-pointer hover:scale-105 " style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <ResummeComp/>
                    </div>
                </div>
                </div>
        )
    return (
        sm ? (<div className = " ">
                <div className = "absolute top-3 right-3 flex flex-row gap-x-2   ">
                    <Link target="_blank" href = {'https://github.com/JadenStryker'} className = "email, linkedin, github, resume rounded-lg p-1 hover:scale-105" style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <IconBrandGithub size = {24} />
                    </Link>
                    <Link target="_blank" href ={'https://www.linkedin.com/in/jaden-stryker-335593173/'} className = "email, linkedin, github, resume rounded-lg p-1 hover:scale-105" style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <IconBrandLinkedin size = {24} />
                    </Link>
                    <Link target="_blank" href = {'mailto:jaden.stryker03@gmail.com'} className = "email, linkedin, github, resume rounded-lg p-1 hover:scale-105" style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <IconMail size = {24} />
                    </Link>
                    <div className = "email, linkedin, github, resume rounded-lg p-1 cursor-pointer hover:scale-105 " style = {{backgroundColor: buttonDropColor, boxShadow: shadow}}>
                        <ResummeComp/>
                    </div>
                </div> 
                <div className = "absolute left-2 top-2" onClick={() => setOpenNav(!openNav)} > <Burger opened={opened} aria-label="Toggle navigation" /> </div>
                        <Drawer opened={openNav} onClose={() => setOpenNav(false)} title="all the jaden stuff">
                            <div className = "flex flex-col">
                                <Link className = " cursor-pointer hover:scale-110" href={'/'}> 
                                <IconHome color = {'$9d3c00'} fill = {buttonDropColor} size = {36}/>
                                </Link>
                                <ActionsJSX />
                            </div>
                        </Drawer>
                    </div>
                    
                    ) : (
                    <div>
                    <NavOptions />
                    </div>) 
    )

}



const ResummeComp = () => (<div onClick={() => {
  const fileUrl = './Resume.pdf';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'JadenStrykerResume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}}><IconFileText size = {24} /> </div> )