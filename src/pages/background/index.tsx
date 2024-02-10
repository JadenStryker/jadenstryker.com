import {Text, useMantineTheme} from '@mantine/core'
import Image from 'next/image';

export const BackgroundEducation = () => {
    const theme = useMantineTheme();
    const mediaShadow = theme.shadows.md;
    return (
        <div className = "flex flex-row justify-between">
            <div className = "flex flex-col gap-y-12 w-[50%] ">
                {BACKGROUND.map((item) => (
                        <div className = " flex flex-col mx-12 w-full min-h-1/3  p-4 rounded-xl bg-white border-[3px] border-[#ff6200] ">
                            <div className = "flex flex-row mb-12">
                                <div className = "max-w-20 max-h-10 mr-4 "><Image src = {item.icon} alt={item.icon} width={400} height={400} /></div>
                                <Text size = 'xxl' fw={900} c = 'black' >{item.school}</Text>
                            </div>
                            <Text size = "xl">{item.degree}</Text>
                            <Text size = "md">{item.dates}</Text>
                            <Text size = "lg">Some Notable Courses:</Text>
                            {item.noteableCoursework.map((c) => (
                                <div>
                                     <li>{c}</li>
                                </div>
                            ))}
                            <Text size = "lg">{'Some clubs and interests: '}</Text>
                            <Text size = "md">{item.clubsAndInterests}</Text>
                        </div>
                ))}
                </div>
            <div className = "h-full  w-[40%] relative  mr-12">
                    <Image src = {'/p671.png'} alt = {'picture of an astroid'} layout="responsive" width = {300} height = {500}/>
                    <div className=" absolute inset-0 flex"></div>
                    <div className = 'border-b-2 border-black'>
                        <Text size = 'xl'>The 67p astroid as photographed by the Rosetta Spacecraft</Text>
                    </div>
            
            </div>
        </div>
    )


}

export default BackgroundEducation



const BACKGROUND = [{school: 'New York University - NYU', degree: 'Computer Science and Data Science Joint Major', color: '#fff', icon: '/NYU.png',
                    dates: '01-21 05-23', clubsAndInterests: ['Association for Computing Machinery', ', BUGS - Open Source Software Club', ', Data Science Club - Writer',
                    ], noteableCoursework: ['Advanced Data Science', 'Fundementals of Machine Learning', 'Linear Algebra', 'Multivariable Calc', 'Proccessing for Big Data Applications',
                     'Computational Cognitive Modeling', 'Chinese Language']},
                     {school: 'George Washington University - GWU', degree: 'Physics', color: '#fff', icon: '/GWU.png',
                     dates: '08-19 05-20', clubsAndInterests: ['Philosophy Club'], noteableCoursework: 
                     ['Astronomy and the Cosmos', 'Physics 1', 'Theory of Mind']}
                    ]