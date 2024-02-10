import { TextInput, Text, Title, useMantineTheme } from "@mantine/core"
import classes from './welcomeBlockCSS.module.css';

export const WelcomeBlock = () => {
    const theme = useMantineTheme();
    const background = theme.colors.scienceOrange[5]; 
    const search = theme.colors.scienceOrange[6]; 
    const darkDrop = theme.colors.scienceOrange[3]; 
    const shadowMiddle = theme.shadows.welcomeDropMiddle;
    const shadowRight = theme.shadows.welcomeDropRight;
    const shadowLeft = theme.shadows.welcomeDropLeft;
    const actions = [{name: 'PORTFOLIO', link: '/portfilio', shadow: shadowLeft}, 
                        {name: 'WHAT I CAN BUILD', link: '/build', shadow: shadowMiddle}, 
                        {name: 'BACKGROUND AND EDUCATION', link: '/background', shadow: shadowMiddle}, 
                        {name: 'WORK EXPIRENCE', link: '/work', shadow: shadowRight}]

    const ActionsJSX = () => (
        actions.map((item, index) => (
            <div key={index} className='rounded-xl p-1 px-2' style={{ backgroundColor: darkDrop, boxShadow: item.shadow }}>
                <Text size='lg' fw={600}> {item.name} </Text>
            </div>
        ))
    );

    // TODO i want some kind of animated disapearing thing everytime this is rendered
    return (
        <div className = "min-w-[100%] max-w-[100%]  flex justify-center flex-col " style = {{backgroundColor : 'transparent'}}>
            {/* <div className = "w-full flex flex-col justify-center items-center py-10">
            <TextInput
                classNames={{ input: classes.textInput }}
                styles={{
                root: {width: '50%', borderRadius: '32px'}, 
                input: {fontSize: '18px', color: 'black', borderRadius: '32px',  backgroundColor: darkDrop, outlineColor: 'transparent', borderColor: 'transparent'}, 
                }}
                placeholder="Ask me anything about me"
                />
            </div> */}
                <div className = "flex flex-row gap-x-4 justify-center mt-3">
                    <ActionsJSX />
                </div>
        </div>
    )
}