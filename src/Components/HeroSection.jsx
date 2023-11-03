import DisplayPicture from './anup.jpeg'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export const HeroSection = () => {
    return(
        <div className="w-[85%] md:w-[75%] lg:w-[65%] mx-auto my-12 flex flex-col-reverse lg:flex-row justify-content-center align-center">
            <div className = "flex flex-col w-[90%] md:w-[80%] lg:w-[70%] bg-white mx-auto my-6 rounded-lg ring-1 ring-neutral-300 opacity-90 shadow-md shadow-neutral-200 justify-center content-center">
                <h1 className="text-3xl text-center align-center text-neutral-700 font-Roboto font-light pt-12 lg:pt-4 self-center">
                  Anup Sindagi
                </h1>
                <p className="text-lg text-left align-center text-neutral-700 font-Roboto font-light self-center p-4 lg:p-6 lg:pr-40"> Hello! I'm currently a graduate student at Boston University in computer science. Previously, I served as a Front-End Developer using SAP UI5 at SAP Labs in Bangalore. Following that, I independently worked on algorithmic trading. I am now eager to continue my journey in software engineering and am actively seeking roles that will allow me to leverage my technical expertise and industry experience. </p>
                <p className="text-base text-left align-center text-neutral-700 font-Roboto font-light self-center p-4 lg:p-6 lg:pr-40">
                    anups@bu.edu | 
                    <AiFillLinkedin className="inline mx-3 hover:cursor-pointer hover:scale-[1.05]" size={28} onClick={() => window.open("https://www.linkedin.com/in/anup-sindagi-331796138/","_blank").open}/>
                    <AiFillGithub className="inline hover:cursor-pointer hover:scale-[1.05]" size={28} onClick={() => window.open("https://github.com/anupSindagi","_blank").open}/>
                </p>
            </div>
            <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] z-10 -mb-12 lg:-ml-60 lg:mb-0 bg-cover rounded-full border-2 border-neutral-300 ring-1 ring-neutral-200 shadow-md self-center justify-center" style ={{backgroundImage : `url(${DisplayPicture})`}} ></div>
        </div>
        
    )
} 