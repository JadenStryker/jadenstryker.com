import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';
import { Grid, Text, useMantineTheme } from '@mantine/core';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Spoiler } from '@mantine/core';

export const Portfolio = () => {
    const [currentImage, setCurrentImage] = useState('none')
    const popupRef = useRef(null);
    const theme = useMantineTheme();
    const mediaShadow = theme.shadows.md;
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

      useEffect(() => {
        const handleClickOutside = (event:any) => {
            console.log("event is:", event.target,' popup ref is:', popupRef)
            //@ts-ignore
          if (popupRef.current && !popupRef.current.contains(event.target)) {
            setCurrentImage('none');
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
      useEffect(() => {
        const handleEsc = (event:any) => {
            if (event.key === 'Escape') {
                setCurrentImage('none');
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []); 

    return (
        <div>
        <div className = {` h-full my-10 relative mx-10  ${currentImage !== 'none' && 'opacity-30'}`}>
            <Grid columns={2} gutter= {'xl'}  className="gap-x-5">
                {PORTFOLIO_ITEMS.map((item, idx) => (
                    <Grid.Col key = {idx} span={1} className=" flex flex-grow  ">
                        <div 
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div 
                            className = {` relative border-[3px] border-[#ff6200] rounded-xl p-4 h-full bg-white flex flex-col justify-between ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-40 ' : 'opacity-100 '} `} 
                            style={{
                            boxShadow:mediaShadow,
                            transition: 'opacity 1.0s ease-in-out .3s',
                            transitionDelay: '0.3s',
                            }} >
                            <div>
                                <Text c = "black" size = {'xxl'} fw={700}>{item.title}</Text>
                            </div>
                            <div className=" min-w-[400px]  max-h-[300px] flex flex-row gap-x-3 overflow-x-auto cursor-pointer p-2  rounded-xl ">
                                    {item.images.map((img, i) => (
                                            <Image 
                                            key = {i}
                                            onClick={() => setCurrentImage('/portfolio' + img + '.PNG')}
                                            src={'/portfolio' + img + '.png'} alt="portfolio image" objectFit="cover" width={500} height={500}/>
                                    ))}
                            </div>
                            <div className = "text-[16px] mt-auto">
                                <Spoiler  maxHeight={100} showLabel={'show more'} hideLabel={'hide'}>
                                {item.description()}
                                </Spoiler>
                            </div>
                            </div>
                        </div>
                    </Grid.Col>
                ))}
            </Grid>
            </div>
            {currentImage !== 'none' &&
             <div className="fixed top-16 left-12 flex justify-center items-center bg-opacity-60 overflow-auto" ref={popupRef} >
            (<Zoom>
                 <Image src = {currentImage} alt = {'hi'} width = {window.innerWidth - 100} height={window.innerHeight} objectFit="cover" />
            </Zoom>
            )
            </div>
            }
        </div>
    )
}

export default Portfolio    


const PORTFOLIO_ITEMS = [
    {title: 'Perception and Brain Dyanmics Lab', images: ['/moony_portfolio','/PBD2', '/PBD3', '/PBD4'], description : () => ( <p>For the Perception and Brain Dynamics Lab, I worked on modeling Human One-Shot Perceptual Learning. 
        The goal of the research was to take fMRI data collected, along with plausible models of human vision mechanisms, and then
        generate Deep Neural Networks in which we could model the disambiguation effects observed in humans. Our vision system allows us
        to &apos;store&apos; disambiguations for long periods of time outside of episodic (hippocampal involvement). This is an interesting question,
        not only for computer vision and neuroscience but also for all zero-shot learning that we are eager to advance in modern massive
        pretrained models. (<span className="border-b-2 border-black"><a target="_blank" href={'https://arxiv.org/abs/2103.00020'}>CLIP paper explains this very succinctly</a></span>)
        The hypothesis I worked was inspired by an intuive feeling of the moony effect.
        First, you see the <i>Mooney</i> image. It&apos;s hard, a small percentage of people can disambiguate it. Then you see the normal image. 
        Then when you are shown the Mooney image again, you are likely to correctly catagorize it.
        As you can see above, the disambiguation seemed to be very intuitive. &quot;Oh, I can see the spout now&quot;... &quot;That black shadow is actually a basket ball player&quot; 
        My premise was that certain spatial activations stay &apos;active&apos;. Attention networks, with their very observable attention heads, seemed like a 
        good place to observe this. You can see the following images to see how the attention heads responded to the actual, the Mooney, and then
        a Gaussian blurred image. Overall, the experiment was fascinating, while missing the essential layering typically observed in a neuro-similar CNN.
        It was a lot of fun to study and experiment.</p>)  },
    {title: 'Delvi', images: ['/delvi_home', '/ExampleChar', '/Bible', '/delvi2'], description : () => ( <p> Delvi (<span className="border-b-2 border-black bg-gray-200"><a target="_blank" href={'https://chatwithvi.com'}>chatwithvi</a></span>) is designed from the ground up to provides a truly intelligent reading application. 
                                                                                                To do this we rethought the file format itself. Above we can see the AIPUB format. Building ontop of a
                                                                                                retrieval system, each vector, each sentence, each paragraph, each page, each model response: all connected
                                                                                                through the AIPUB format. Having this much control not only meant a great reading and chatbot expirence, but
                                                                                                also like locally based conversations with characters (the characters only know as much as you have read in the book,
                                                                                                making spoilers impossible!). In addition to this, Delvi is based around groups of Reading Lists. A user defined, and
                                                                                                fully social way of organizing import texts. Delvi provids thousands of open source books, as well as a live parser for a users documents.

</p>)  },
    {title: 'Taska', images: ['/Taska_Example'], description : () => ( <p> Building Taska was a fascinating task right at the point where Large Language Models had finally reached the point to execute 
        highly reliable, fast, and intelligent output. I worked to create an agent-based system based on the Getting Things Done system. 
        The system originally was highly effective, <i>but</i> highly tedious to implement, with tons of sorting and classification. Building 
        out the agent first consisted of building out a highly complex testing framework. Prompting is an inexact art, so while a certain prompt 
        might help raise classification accuracy on sorting whether an input is actionable or not for longer notes, it could tank performance on 
        casually written or blurb inputs. After an extensive testing framework was built out, it was extremely fun to see how this tree of agents 
        could simplify such a personal and complex task. Eventually learning from users&apos; behavior too!
    </p>)  },
    {title: 'Rockstar Datathon Winners', images: ['/Rockstar', '/Rockstar2'], description : () => ( <p>
        During my undergraduate studies at NYU, Rockstar Games hosted a datathon. After taking 4 or 5 hours to understand all the datasets given to us,
         we decided there was nothing interesting about the data that couldn&apos;t be done with a simple linear regression. So we spent the next 12 hours doing feature engineering. 
         We created super users, medium users, and casual players. Our end goal (the goal of most data science): To help Rockstar make more money.
          We studied the behavior that led up to becoming a super user, the expected value of a super user to Rockstar, and lastly (probably most importantly) 
          how to get more users into the <i>super user</i> <i>super purchaser</i>, and thus very valuable for Rockstar. Rockstar liked our feature engineer + unsupervised ML strategy and awarded it first place. 
      </p>
      
)  },
{title: 'Messing around with miniGPT', images: ['/compareModels', '/diffModels', '/defaultScores', '/concatScores'], description : () => ( <p>
   While building out a miniGPT, I was curious about the forms of concatenation used. While query, key, value operations 
   use a dot product, which involves a weighted stack and sum approach, the actual combinations of the 
   attention heads were simply combining the shorter latent vectors in the first dimension,
    greatly reducing the size of the attention head dimension, and thus requiring the feed-forward network 
    following MHA, to build head_size / num_heads segmentations. This felt a bit constricted. I tested out 
    whether keeping the size the same and just stacking and summing in the original dimension would improve 
    training loss. As seen above, it did result in minor improvements, which was pretty cool. Note: this is less an 
    actual experiment and more just fun PyTorch experimentation as I familiarized myself with the architecture. 
    The graph is from 1 training run (although this effect is constant across many training runs). As well, LLMs 
    tested across such small training epochs, batch sizes, and dimensions are hardly representative of actual results. 
    Lastly, to note, this keeps the learnable parameters a factor of (head_size / num_heads) as large on the attention heads dimensions. 
    So it's definitely possible improvements can be due to this. When I can, I want to scale the default miniGPT parameters in a non-attention head part of 
    the model to observe, as well as see how stacking smaller dimensional (head_size / num_heads) heads affects performance.
   It is interesting though, that a simple sum over a very small dimension (32 case in this project)
   doesnt trash performance. Vectors are cool.
  </p>
)  }
]