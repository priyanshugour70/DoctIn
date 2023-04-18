import Image from "next/image";
import mypic from "./Images/CorosaleF1.svg";
import mypic1 from "./Images/CorosaleF2.svg";
import mypic2 from "./Images/CorosaleS1.svg";
import mypic3 from "./Images/CorosaleS2.svg";
import mypic4 from "./Images/CorosaleS3.svg";
import mypic5 from "./Images/CorosaleS4.svg";
import mypic6 from "./Images/Card1.png";
import mypic7 from "./Images/Card2.png";
import mypic8 from "./Images/Card3.png";
import LogInImg from "./Images/LogIn1.webp";


export const CorosaleF1 = (props) => {
    return(
        <Image 
        src={mypic}
        alt="gallery"
        className="block h-full w-full rounded-lg object-cover object-center"
        />
    ) 
};


export const CorosaleF2 = (props) => {
    return(
        <Image 
            src={mypic1} 
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
        />
    ) 
};



export const CorosaleS1 = (props) => {
    return(
        <Image 
            src={mypic2} 
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
        />
    ) 
};


export const CorosaleS2 = (props) => {
    return(
        <Image 
            src={mypic3} 
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
        />
    ) 
};


export const CorosaleS3 = (props) => {
    return(
        <Image 
            src={mypic4} 
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
        />
    ) 
};


export const CorosaleS4 = (props) => {
    return(
        <Image 
            src={mypic5} 
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
        />
    ) 
};


export const Card1 = (props) => {
    return(
        <Image 
            src={mypic6} 
            alt="gallery"
            className="block rounded-lg object-cover object-center"
        />
    ) 
};


export const Card2 = (props) => {
    return(
        <Image 
            src={mypic7} 
            alt="gallery"
            className="block rounded-lg object-cover object-center"
        />
    ) 
};


export const Card3 = (props) => {
    return(
        <Image 
            src={mypic8} 
            alt="gallery"
            className="block rounded-lg object-cover object-center"
        />
    ) 
};

export const LogIn1 = (props) => {
    return(
        <Image 
            src={LogInImg} 
            alt="gallery"
            className="block rounded-lg object-cover object-center"
        />
    ) 
};
