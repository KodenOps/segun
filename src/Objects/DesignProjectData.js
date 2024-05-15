//harbode images
import harbode1 from "../assets/harbode/1.png";
import harbode2 from "../assets/harbode/2.png";
import harbode3 from "../assets/harbode/3.png";
import harbode4 from "../assets/harbode/4.png";
import harbode5 from "../assets/harbode/5.png";
import harbode6 from "../assets/harbode/6.png";
// LUTA IMAGES
import luta_cover from "../assets/luta/cover.png";
import Luta_feedbacks from "../assets/luta/feedback.png";
import Luta_message from "../assets/luta/message.png";
import Luta_onboardings from "../assets/luta/Onboarding.png";
import Luta_register from "../assets/luta/register.png";
import Luta_reset from "../assets/luta/reset.png";
import Luta_splash from "../assets/luta/Splash.png";
import Luta_usages from "../assets/luta/Usage.png";
import Luta_user from "../assets/luta/User.png";
// icons imports
import {TbBrandFigma} from "react-icons/tb"
import {FaChartPie} from "react-icons/fa"
import {SiNotion, SiAdobephotoshop} from "react-icons/si"
import { IoGitNetworkOutline } from "react-icons/io5"

// CHART IMAGES
import eachtoconnect from "../assets/chart/easeToConnect.png"  
import StruggleToGetAccommodation from "../assets/chart/StruggleToGetAccommodation.png"
import frshmanExp from "../assets/chart/frshmanExp.png"
export const DesignProjectData = [
    {
        id: 1,
        title: "Harbode Website",
        category: "UI design",
        // The Static Title 
        problemTitle: "The Problem",
        gettingStartedTitle: "Getting Started",
        snoopAroundTitle: "Snooping Around",
        solutionTitle: "Solution",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        ResearchAnalysisTitle: "Research Analysis",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: harbode1,
        problemText: "This is a full project that focuses on ensuring easy and smooth way for users to find accommodation online. The project started with figuring out the pattern of online house hunting in Nigeria, Especially in Lagos. The hustle of searching for numerous apartment with beautiful images online but later discovered that the house is not what they expected it to be. Also, popular house hunting platforms in Lagos here always leave the communication with the agent to be outside the platform, this makes most house hunters be susceptible to extortion as the condition stated on their platform changes when they chat them up or even give them a call. This also makes reporting and monitoring of the agent's integrity almost impossible for these platforms. How about scammers that pose as agent on these platforms. Most of these users are not verified.",
        gettingStartedTexts: "The process of this design exploration started with gathering information. Yes, I already have a problem in mind to tackle from personal experiences but this is not enough to base my judgement upon. One of the problems highlighted by the interviewed people is the ease of getting an apartment. One of the problems mention frequently during the survey and interview was extortion and lack of transparency when it comes into payment.",
        snoopAroundTexts: "How about seeing what other platforms are offering and see loopholes to fill. As at the time of brainstorming, I accessed PropertyPro & NigeriaPropertyCenter websites to see how they are tackling these issue. To some extent, I noticed the focus for these two sites is to just list out properties. What happen to the users afterwards is not their problem anymore. Also, there are no means of streamlining users-agent communication on the platform. Rather, they link them to the agent's whatsapp which are not always verified. This leads us back to the main security concerns.  ",
        solutionTexts: [
            "User authentication means to do proper KYC for the agents who are advertising on the platform",
			"User-Agent communication integrated in-situ the platform rather that depending on other 3rd party platform like Whatsapp.",
			"Ability to filter properties based on your budget and preferences",
            "Feature that ensure reporting agent, glitches, or other challenges to Harbode customer agent",
            "a transparent means where all the fees (including those that are always hidden) are listed for users to see what they are paying for."
        ],
        toolsIcons: [
            {
                icon: TbBrandFigma,
                name: "Figma"
            },
            {
                icon: SiNotion,
                name: "Notion"
            },
            {
                icon: SiAdobephotoshop,
                name: "Photoshop"
            },
         ],
        colorPallete: ["#008148", "#f77f00", "#0E131F", "#C6C6C6", "#5B5A5A", "#303030"],
        researchImgs: [1, 2, 3, 4, 5],
        snapshotImg: [harbode2, harbode3, harbode4, harbode5, harbode6],
    }, 
    // END OF HARBODE PROJECT
    // END OF HARBODE PROJECT
    // END OF HARBODE PROJECT
    // END OF HARBODE PROJECT
    {
        id: 2,
        title: "LUTA Social App",
        category: "UX design",
        // The Static Title 
        problemTitle: "The Problem",
        gettingStartedTitle: "Getting Started",
        snoopAroundTitle: "Snooping Around",
        solutionTitle: "Solution",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        ResearchAnalysisTitle: "Research Analysis",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: luta_cover,
        problemText: "This is a full project for a budding startup. Imagine Nigerian students embarking on their higher education journey, eager to connect with peers from different corners of the country. However, they hit a roadblock: geographical distances and the lack of a dedicated platform make it challenging to forge meaningful connections. It's like trying to find a needle in a haystack without a magnet.But fear not, because we're on a mission to change that narrative! We're not just talking about any old solution; we're talking about a game-changer, a platform that doesn't just bridge the gap but sparks a flame of connection that transcends borders, cultures, and beliefs.Picture this: Nigerian students coming together, not just to exchange pleasantries, but to share experiences, dreams, and aspirations. It's not just about networking; it's about building a tight-knit community that feels like family, regardless of where you're from or what you believe in. So, join us on this journey as we revolutionize the way Nigerian students connect, empowering them to break down barriers, defy distances, and create a vibrant, inclusive community that's bound to leave a lasting impact on the higher education landscape.",
        gettingStartedTexts: "The process of this design exploration started with gathering information. Yes, I already have a problem in mind to tackle from personal experiences but this is not enough to base my judgement upon. One of the problems highlighted by the interviewed people is the ease of getting an apartment. One of the problems mention frequently during the survey and interview was extortion and lack of transparency when it comes into payment.",
        snoopAroundTexts: "How about seeing what other platforms are offering and see loopholes to fill. As at the time of brainstorming, I accessed PropertyPro & NigeriaPropertyCenter websites to see how they are tackling these issue. To some extent, I noticed the focus for these two sites is to just list out properties. What happen to the users afterwards is not their problem anymore. Also, there are no means of streamlining users-agent communication on the platform. Rather, they link them to the agent's whatsapp which are not always verified. This leads us back to the main security concerns.  ",
        solutionTexts: [
           "Students will be matched with prospective roommates based on their specified preferences and interests.",
            "A platform will be provided for students to easily locate and connect with agents and landlords, accessing any available listings they have posted.",
            "House agents and landlords will undergo a streamlined journey, including easy registration, posting of properties, and communication with potential tenants.",
            "An interactive map will be integrated to help users navigate within the campus and its surrounding areas, providing key locations such as lecture halls, dormitories, cafes, and recreational spots.",
            "Users will have access to discussions from various schools, enabling them to stay informed and engaged with topics of interest across different educational institutions.",
            "Chat rooms will be established based on shared interests, such as football, allowing users to connect with like-minded individuals for discussions, networking, and collaboration.",
        ],
        toolsIcons: [
            {
                icon: TbBrandFigma,
                name: "Figma"
            },
            {
                icon: SiNotion,
                name: "Notion"
            },
            {
                icon: SiAdobephotoshop,
                name: "Photoshop"
            },
            {
                icon: FaChartPie,
                name: "Google Form"
            },
            {
                icon: IoGitNetworkOutline,
                name: "Figjam"
            },
         ],
        colorPallete: ["#1AFFD5", "#00072D", "#2F80ED", "#27AE60", "#E2B93B", "#EB5757"],
        researchImgs: [
            {
            img: eachtoconnect,
            name: "Ease To Connect With Students",
            },
            {
            img: StruggleToGetAccommodation,
            name: "Struggle To Get Accommodation",
            },
            {
            img: frshmanExp,
            name: "Socializing Experience For Freshman",
            }],
        snapshotImg: [ Luta_splash, Luta_onboardings,Luta_feedbacks, Luta_message,  Luta_register, Luta_reset,Luta_usages, Luta_user],
    }, //End of a project
    
]