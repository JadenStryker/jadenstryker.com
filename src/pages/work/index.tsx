import { Text, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import { IconCircleFilled, IconSquareFilled } from '@tabler/icons-react'
import Image from 'next/image';
import Link from 'next/link';
import { maxWidth } from '~/utils/mediaQuery';
// I am fast, i excel at connecting systems.


const Work = () => {
    const theme = useMantineTheme();
    const sm = useMediaQuery(maxWidth('1200px'));
    const work = theme.shadows.md;
    return (
        <div className = {`flex flex-row w-full h-full w-full overflow-auto mt-10`}>
            
        <div className = "flex flex-col gap-y-2 w-full m-2 w-[70%] pl-12 pr-10">
            <div className = "border-[#ff4d00] border-[3px] rounded-md  max-w-fit flex flex-row gap-x-4 ">
                    <div className = "flex flex-row gap-x-1">
                        <div className = "pl-1 mt-[5px]"><IconCircleFilled size = {14} /></div>
                        <Text size='lg' fw={500} c={'black'} >Description</Text>
                    </div>
                    <div className = "flex flex-row gap-x-2 pr-2">
                        <div className = "mt-[5px]"><IconSquareFilled size = {14} /></div>
                        <Text size='lg' fw={500} c={'black'} >Skills</Text>
                    </div>
            </div>
            <div className = "flex flex-col gap-y-4">
            {WORK_EXPIRENCE.map((item, index) => (
                <div key = {index} className = "flex flex-col w-full bg-white p-4 rounded-xl "  style = {{boxShadow: work}} >
                    <div className = "flex flex-row">
                    <div className = "flex flex-col my-2 bg-[#ff6200] p-2 rounded-xl">
                        <div>
                            <Text size='xxl' fw={900} c={'black'} >{item.title}</Text>
                        </div>
                        <div className = "flex flex-row">
                            <div>
                                <Text size='md' fw={600}c={'black'}>{item.company}</Text>
                            </div>
                            <div>
                                <Text size='md'fw={600}  c={'black'} >{item.date}</Text>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className = "flex flex-row gap-x-2">
                        <div className = "mt-2"><IconCircleFilled size = {14} /></div>
                        <div className = "text-[16px]">{typeof item.description === 'function' ? item.description() : item.description}</div>
                        {/* <Text size='lg' fw={500} c={'black'} >{item.description}</Text> */}
                    </div>
                    <div className = "flex flex-row gap-x-2">
                        <div className = "mt-2 "><IconSquareFilled size = {14} /></div>
                        <div className = "text-500 text-[16px]" dangerouslySetInnerHTML={{ __html: item.skillsAndResponsibilties }} />
                    </div>
                </div>
            ))}
            </div>
        </div>
        <div className = "h-[900px] w-[600px] relative p-4">
            <Image src = {'/astroid1.jpeg'} alt = {'picture of an astroid'} layout="responsive" width = {300} height = {500}/>
            <div className="gradient-overlay absolute inset-0 flex"></div>
            <div className = 'border-b-2 border-black'>
                <Text size = {'xl'} c = 'gray' >The Mk66 astroid as photographed from space</Text>
            </div>
        </div>
        </div>
    )


}

export default Work


const WORK_EXPIRENCE = [
    {title: 'CTO and Co-Founder', company: 'Delvi', date: '07-23 : 02-24', description: () => ( <p> <span>
    I founded a seed stage company with NeuroAI lab leader here in NYC around integrating LLM&apos;s with written content
    such as Journal Articles, Textbooks, and commercial books. I was responsible for building novel Retrieval-Augmentation-Generation (RAG) approaches, as well as the infrastructure, planning, 
    development, coding, and presentation of our AI product. </span>
    <Link href="https://delvi.org" className = "bg-gray-200">Delvi</Link><span>{' '}
    technically excelled past the competition; outperforming GPT, NotebookLM (google), Perplexity, and Bing in retrieval tasks.
    Here my co-founder and I also coinvented the AIPUB format, an AI document format integrating vector databases into a file type. Examples can be seen in my </span>
    <Link href="/portfolio" className = "bg-gray-200">portfolio</Link><span>
    </span> </p>) ,
     skillsAndResponsibilties: ` 
    The platform was build on AWS, heavily leveraging Sagemaker, EC2, RDS, MongoDB, and Lambda. The front end was built with a Typescript, React, TRPC, and Redux framework. 
    The UI was conceptualized with Figma and then made with MantineUI, Framer, and TailwindCSS. I also led the Project Management for Delvi using Jira and Github.`},

    {title: 'Full-Stack Engineer', company: 'OLAB', date: '03-23 : 07-23', description: `I was brought on as an engineer to assist in producing a live inference enviroment for a LLM model
    for patient-doctor interactions. I primarly focused on creating an extremly safe and secure front end platform, as well as a secure AWS backend. Hard ML Engineering skills such as deepseed and 
    JDL were used to increase inference speed. In this work I learned a lot about network security, GPU throughput optimization, as well as UX design for the purpose of user goals`, skillsAndResponsibilties: `
    The platform was build on AWS + Next.js framework. AWS skills such as VPC management, Sagemaker optimization, DynamoDB, and Lambda were essential. I also developed 
    communication skills with researchers and project leads, learning how to take hard tech specs (security) as well as more conceptual vision and turn it into acitonable UX and software implementations`},

    {title: 'Research Assistant', company: 'Perception and Brain Dynamics Lab', date: '06-21 : 01-22', description: `I joined the Perception and Brain Dyanmics Lab under Dr. Biyu He in 2021. Here I fulfilled 
    a Machine Learning and AI role in the lab, bridging the gap between the hard neuroscience work and the field of machine learning. I joined a project that was working on a paper on one-shot human perception tasks.
    My specific research was in researching and building vision transformers as a hypothesis for the latent human abilities observed. I also expirmented, analyzed results and presented my work to the lab.
    `, skillsAndResponsibilties: `The skills used in this lab were across two central domains. How to quickly learn, proccess, and take in the vast amount of techincal neuroscience, and then tranlate to actionable
    machine learning research. And the other being the hard skills used in model generation and training such as PyTorch, CV2, and matplotlib.`},

    {title: 'Head of AI solutions - SWE', company: 'Taska', date: '02-23 : 06-23', description: `Here I worked in a start up at the begining of the Generative AI cycle to make a AI agent based on the Getting Things Done
    Framework. I worked with some amazing google engineers and marketing experts to implement the agent in a cost effective, precise, and guarded way. I designed thought trees and action paths to extend the UX
    vision into a product.  
    `, skillsAndResponsibilties: `Here I developed skills in Prompting, OpenAI api, MongoDB, Next.js, React, Javascript, and especially best git practices. Working with expert UX engineers developed strong UX
    and user testing skills.
    `},
    
    {title: 'Founder, SWE, and consultant', company: 'After Dark Data', date: '04-21 : present', description: `I started my own data science and AI consulting company in mid 21. The company (myself!) would take on one or two clients.
    I provided consulting services, general software development services, and data analyst work. I specialized in integrating and creating automation frameworks. I worked for a range of companies, even creating 
    automation frameworks for a NYC nightclub (thats where I got the name). 
    `, skillsAndResponsibilties: `The skills involved were often self marketing and effective communication about realistic techical goals with clients. As well as exetensive developemnt with external tools 
    such as Monday, Drive, Outlook, Dropbox, Excel, AWS Lambda, OpenAI, and so forth. Each job was unique, and most importantly it was about adapting quickly to whatever technical task was at hand to deliver a USEFUL
    and reliable solution `},

    {title: 'Data Scientist / Analyst', company: 'GATE TECH', date: '10-21 : 03-23', description: `In this Job I was brought on to work with a recuriting company to optimize and create actionable insights
    on many different aspects of the recuriting timeline. From analyzing applicant profiles as a predictor of suitablity for a job. To scraping large firms such as Glassdoor and Indeed.
    I contantly was able to work within the existing layers of the company to bring new insights and optimize performance, and create funnels for bringing in clients.`, skillsAndResponsibilties: `
    For this job I utilized skills such as Selenium, Requests, Pandas, Seaborn, Matplotlib, MongoDB. `},
]