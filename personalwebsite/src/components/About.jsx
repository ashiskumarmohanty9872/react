import { useState } from "react";
import bannerImage from "../assets/InShot_20250303_151930006.jpg";

const About = () => {
    const [data, setData] = useState({
        image: bannerImage,
        title: "Software Developer and Frontend Developer",
        desc1: `As a skilled frontend devloper,
        I am passionate about creating dynamic web applications and
        user interfaces that deliver exceptional experiences. With
         proficiency in
        frontend technologies such as HTML, CSS, and JavaScript,
        I excel in developing responsive and visually appealing solutions.`,
        desc2: `From building interactive web pages to optimizing performance, I leverage my expertise to deliver 
        intuitive and engaging user interfaces with impactful digital experiences .`,
        actionButton: {
            title: "Read More..",
            link: "/readmore",
        },
    });

    return (
        <>
            <div className="main-container bg-gray-100 border py-9">
                <h1 className="text-center py-14 text-3xl md:text-5xl underline font-bold">About Me</h1>

                <div className="flex flex-col  justify-between items-center space-y-8 md:space-y-0 md:space-x-8 md:px-32 lg:px-32 px-8">
                    <div className="w-full flex justify-center md:w-3/3">
                        <img className="rounded-full shadow-lg w-90 h-50 md:w-90 md:h-96" src={data.image} alt="Ashis kumar Mohanty" />
                    </div>
                    <div className="w-full py-8 flex justify-center md:w-5/5">
                        <div className="space-y-5 text-center md:text-left">
                            <h1 className="text-3xl md:text-3xl text-center font-semibold">{data.title}</h1>
                            <p className="text-sm md:text-base">{data.desc1}</p>
                            <p className="text-sm md:text-base">{data.desc2}</p>
                            <button className="bg-orange-500 px-3 py-2 text-sm md:text-lg rounded-full shadow-lg">
                                {data.actionButton.title}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
