
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { useMantineTheme } from '@mantine/core'

export const NavBar = () => {
    const [opened, { toggle }] = useDisclosure();
    const theme = useMantineTheme();
    const buttonDropColor = theme.colors.scienceOrange[3]; 
    const shadow = theme.shadows.indent
    return  (
        <div className = "absolute top-2 p-1 ">
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
        </div>
    )
    }