import Image from "next/image";
import { WelcomeBlock } from "~/components/intro/blockWelcome";
import {useMantineTheme, Text } from '@mantine/core';

const BioText = `I live in Chinatown NY. I am a Full Stack Engineer who builds AI products. I also have a background (and love researching) Computational Neuroscience and Machine Learning.
                I like to build things, especially software, especially AI systems. 
                `
const BioMore = `Other than Machine Learning, I love classic literature, traveling, and languages. I have been lucky enough to live in India, Netherlands, Aspen, LA, DC, and now NY. My dutch is terrible, but at least my Chinese is a bit better.
              `

const MEDIA_ELEMENTS = [{text:'Structured State Spaces', src: '/structured_state_space.png'}, 
              {text: 'Someday, salute remix', src : '/SomedaySalute1.png'},
              {text: 'Anna Karenina', src: '/Anna_Karenina.png'}, 
              {text: 'Me', src: '/HeadshotWebsite.png'}, 
              {text:'Me (drawn)', src: '/Me_drawing.png'},
              ]

export default function Home() {
  const theme = useMantineTheme();
  const mediaShadow = theme.shadows.mediaComponent;
  const mediaBG = theme.colors.scienceOrange[3];
  const MEDIAJSX = () => {
    return (MEDIA_ELEMENTS.map((item) => 
      <div className = "h-auto w-auto p-2 bg-gray-400 rounded-xl flex-col justify-center items-center align-center " style = {{backgroundColor: mediaBG, boxShadow: mediaShadow}}>
              <Image src = {item.src} alt = {'a paper'} width={170} height={150}/>
            <div>
              <Text size = {'lg'} >{item.text}</Text>
            </div>
          </div>
      )
    )
  }

  const BIO = () => (
    <div className = "w-full flex flex-row justify-between px-20 pt-10 ">
      <div className = "flex align-end items-end  justify-end mt-auto">
        <Text size={'scr'} fw={400} >BIO</Text>
      </div>
      <div className = "flex flex-col gap-y-10 justify-center align-center items-center max-w-[40%] mr-20">
        <Text fw= {400} size = "lg"> {BioText} </Text>
        <Text fw= {400} size = "lg"> {BioMore} </Text>
      </div>
    </div>
  )
  const MEDIA = () => (
    <div className = "w-full flex flex-row justify-between pl-20 pt-20 ">
      <div className = "flex ">
        <Text size={'scr'} fw={400} >MEDIA</Text>
      </div>
      <div className = "flex flex-row   gap-x-4   border-[#ff8133] rounded-xl p-1 mr-4">
      <MEDIAJSX />
      </div>
    </div>
  )

  return (
    <div className={`flex min-h-full flex-col items-center justify-between `}>
      <div className = "w-full  flex justify-center flex-col  ">
        <BIO />
        <MEDIA />
          <div className = "w-full flex h-[200px] mt-10">
          <Image src={'/heat_gradient.png'} alt = {'heat image'} width={4000} height = {200}/>
        </div>
      </div>
    </div>
  );
  }
