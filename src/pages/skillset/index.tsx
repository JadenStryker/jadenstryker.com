import { useState } from 'react';
import { Grid, Text, useMantineTheme, Spoiler, Checkbox } from '@mantine/core';
import Image from 'next/image';
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cn } from "~/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import {useMediaQuery} from '@mantine/hooks';
import {maxWidth} from '~/utils/mediaQuery';

const Skillset = () => {
    const theme = useMantineTheme();
    const sm = useMediaQuery(maxWidth('1200px'))
    const mediaShadow = theme.shadows.md;
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [checked, setChecked] = useState(false);

    const changeHoveredIndex = (index:number | null) => {
        if (!checked) {
            setHoveredIndex(index)
        }
    }
    return (
        <div className = {` flex ${sm ? 'flex-col h-full ' : 'flex-row overflow-hidden'}   w-full gap-x-3  `}>
            <div className = "flex flex-col">
                    <div className = {`flex justify-between ${sm ? 'flex-col': 'flex-row'}`}>
                        <div className = "bg-[#ff6200] rounded-xl w-min p-2 my-4 whitespace-nowrap"  style={{boxShadow:mediaShadow}}><Text  fw={400} size = {sm ? 'lg' : 'xl'} >
                        Some tools I have used to build things</Text>
                        </div>
                        <div className = {`bg-[#ff6200] rounded-xl  h-min p-1  flex ${sm ? ' flex-row': ' flex-row'} gap-x-3`}  style={{boxShadow:mediaShadow}}><Text  fw={400} size = {sm ? 'md' : 'md'} >If you dont like all my messing arounds with opacity you can disable it </Text> 
                        <Checkbox
                            checked={checked}
                            onChange={(event:any) => setChecked(event.currentTarget.checked)}
                            />
                        </div>
                    </div>
                    <Grid columns={sm ? 1 : 3}>
                        {SkillCards.map((item, idx) => 
                        <Grid.Col span={1} className=" flex flex-grow p-2 " key = {idx}>
                        <div
                        key={idx}
                        className="relative group  block  h-full w-full"
                        onMouseEnter={() => changeHoveredIndex(idx)}
                        onMouseLeave={() => changeHoveredIndex(null)}
                        >
                        <div
                            className={`overflow-x-hidden border-2 h-full  border-[3px] p-2 rounded-xl bg-white min-w-[12rem] flex flex-grow flex-row gap-x-4 overflow-auto  ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-40 ' : 'opacity-100 '}`}
                            style={{
                                boxShadow: mediaShadow,
                                transition: 'opacity 1.0s ease-in-out, border-color .3s ease-in-out',
                                transitionDelay: '0.1s',
                                borderColor: hoveredIndex === idx ? '#ff6200' : 'white', // This line controls the border color dynamically

                            }}
                            >
                            <div className = "flex flex-row gap-x-4">
                                <div><Image src = {'/skills' + item.icon} alt = {item.icon} width = {100} height = {100} /> </div>
                            </div>
                            <div className = "flex flex-col">
                                <div><Text size = "xl">{item.group}</Text></div>
                                <Spoiler  maxHeight={120} showLabel={'show more'} hideLabel={'hide'}>
                                {item.skillList.map((sl, i) => (
                                    <li key = {i}>
                                        {sl}
                                    </li>
                                ))}
                                </Spoiler>
                            </div>
                        </div>
                        </div>
                        </Grid.Col>)}
                    </Grid>
                </div>
            <div className = {`  relative ${sm ? 'flex flex-col items-center justify-center mt-3' : 'relative w-full'}`} >
                    {sm ? (<div>
                                <Image src = {'/67p.jpeg'} alt = {'picture of an astroid'} width={window.innerWidth} height={300} objectFit='100%'/>
                        </div>
                        ) : (<Image src = {'/67p.jpeg'} alt = {'picture of an astroid'} 
                        fill = {true}
                    />)}
                    <div className = "absolute inset-0 gradient-overlay"></div>
                    <div className = 'border-b-[1px] border-white w-full absolute top-12 flex justify-center'>
                        <Text fw={300} c = {'#fff'} size = {'lg'}>The 67p astroid as photographed by the Rosetta Spacecraft</Text>
                    </div>
            
            </div>
        </div>
    )
}

export default Skillset

const BuildCars = [
    {}
]

const SkillCards = [
    {group: 'AWS', icon: '/AWS.png', comment: 'I can build anything with AWS, I love aws and aws loves me', skillList: ['EC2', 'DynamoDB', 'DocumentDB', 'Sagemaker', 'Lambda', 'S3', 'EKS', 'ECS', 'RDS']},
    {group: 'Math', icon: '/Math.png', comment: 'Linear algebra comes mostly in during ML work', skillList: ['Linear Algebra', 'Discrete Math', 'Through Multivariable Calc', 'Probability & Statisitcs']},
    {group: 'Python DS', icon: '/Python.png', comment: 'General libraries that I have been using for years', skillList: ['Pandas', 'Numpy', 'Selenium', 'Seabord', 'MatplotLib', '']},
    {group: 'Languages', icon: '/Program.png', comment: 'The ones I have used, excited to learn more', skillList: ['C', 'Python', 'Swift', 'Node JS', 'SQL', 'Scala']},
    {group: 'Web Dev', icon: '/Webdev.png', comment: 'This one is built with next.js', skillList: ['Next.js', 'Vue', 'Flask', 'React', 'Typescript', 'TRPC', 'Redux', 'Tailwind', 'Mantine']},
    {group: 'Soft', icon: '/blanket.png', comment: 'The other stuff', skillList: ['Project Planning', 'Presentation', 'Project Lead', 'Cross domain problem solving', 'Creativity']},
    {group: 'Machine Learning', icon: '/ML.png', comment: 'PyTorch is amazing', skillList: ['PyTorch', 'CV2', 'SciPy', 'XGBoost', 'Cuda', 'Deepseed', 'LoRA/QLoRA', 'Retrieval Augmentation Generation', 'Model finetuning', 'Hyperparamter search (H20)','Raytune','Cloud Inference']},
    {group: 'Database', icon: '/Database.png', comment: '', skillList: ['Kafka', 'PySpark', 'Scala', 'Hadoop MR2', 'All SQL engines', 'MongoDB', 'DynamoDB', 'Redis']},
    {group: 'Cloud', icon: '/Cloud.png', skillList: ['GCP', 'Azure', 'AWS']},
    {group: 'Networking', icon: '/Network.png', skillList: ['DNS setup', 'HTTPS setup apache thing']}
]

