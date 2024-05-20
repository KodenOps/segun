//harbode images
import { TbApiApp, TbMessage } from "react-icons/tb";
import harbode1 from "../assets/harbode/1.png";
import harbode2 from "../assets/harbode/2.png";
import harbode3 from "../assets/harbode/3.png";
import harbode4 from "../assets/harbode/4.png";
import harbode5 from "../assets/harbode/5.png";
import harbode6 from "../assets/harbode/6.png";
import segun from "../assets/SEGUN/Segun.PNG";
import queez from "../assets/SEGUN/queez.png";
// superdiva
import sdiva1 from "../assets/superdiva1.png";
import sdiva2 from "../assets/superdiva2.png";

// ecobazar images
import Eco_cover from "../assets/ecobazar/eco_cover.png"
// icons imports
import { FaCss3, FaReact} from "react-icons/fa"

import { MdEmail } from "react-icons/md";
import { SiIcon, SiRedux, SiTailwindcss } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
export const DevProjectData = [
    {
        id: 1,
        title: "Harbode Website",
        category: "WebDev",
        // The Static Title 
        problemTitle: "Introduction",
        solutionTitle: "Features",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: harbode1,
        problemText: "This is from the design full project that focuses on ensuring easy and smooth way for users to find accommodation online. The project started with figuring out the pattern of online house hunting in Nigeria, Especially in Lagos. The hustle of searching for numerous apartment with beautiful images online but later discovered that the house is not what they expected it to be. Also, popular house hunting platforms in Lagos here always leave the communication with the agent to be outside the platform, this makes most house hunters be susceptible to extortion as the condition stated on their platform changes when they chat them up or even give them a call. This also makes reporting and monitoring of the agent's integrity almost impossible for these platforms. How about scammers that pose as agent on these platforms. Most of these users are not verified. This project was developed with ReactJs and the styling was done using pure CSS. This project was developed with ReactJs and the styling was done using pure CSS. The website was integrated with the ability to send emails directly and also receive an automated reply. This was used in the contact us form. Another thing that was integrated into this project is the Toast notification that notify users that their mail has been sent successfully. The website was integrated with the ability to send emails directly and also receive an automated reply. This was used in the contact us form.",

        solutionTexts: [
           "Fully responsive landing page highlighting all the information of the platform",
			"Explore list to view available properties and the price",
            "Login and sign in page that is not fully integrated to accept information (this is a test project)",
            "User authentication means to do proper KYC for the agents who are advertising on the platform",
			"User-Agent communication integrated in-situ the platform",
			"Ability to filter properties based on your budget and preferences",
			"Feature that ensure reporting agent, glitches, or other challenges to Harbode customer agent",
        ],
        toolsIcons: [
            {
                icon: FaReact,
                name: "ReactJS"
            },
            {
                icon: FaCss3,
                name: "Pure CSS"
            },
            {
                icon: MdEmail,
                name: "EmailJS API"
            },
         ],
        colorPallete: ["#008148", "#f77f00", "#0E131F", "#C6C6C6", "#5B5A5A", "#303030"],
        
        snapshotImg: [harbode2, harbode3, harbode4, harbode5, harbode6],
        LiveLink: "https://harbode.vercel.app",
    }, //End of a project
    {
        id: 2,
        title: "SuperDiva V-1 Website",
        category: "WebDev",
        // The Static Title 
        problemTitle: "Introduction",
        solutionTitle: "Features",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: sdiva1,
        problemText: "SuperDiva is a fashion e-commerce store for women of varios age and sizes. This is my first attempt towards creating multiple pages using ReactJS. To be honest, i focuses on different concept such as state management with Redux, API integration using Flutterwave payment gateway, etc. This project handles states using Redux Toolkit. This project is my major first project using redux. Even the entire project is for me to familiarize with Redux and state management. A V.2 will be added that prioritize aesthetic with the impeccable state management. It also integrate Toast alert to notify users for an item already in the cart. On the app, you have the Ability to Preview products before adding to cart",

        solutionTexts: [
           "Ability to Preview products before adding to cart",
			"Ability to save item as favorite",
			"Ability to add item to cart and view",
			"Ability to checkout using test Flutterwave API",
        ],
        toolsIcons: [
            {
                icon: FaReact,
                name: "ReactJS"
            },
            {
                icon: FaCss3,
                name: "Pure CSS"
            },
            {
                icon: TbApiApp,
                name: "Flutterwave API"
            },
            {
                icon: SiRedux,
                name: "Redux"
            },
         ],
        colorPallete: ["#008148", "#f77f00", "#0E131F", "#C6C6C6", "#5B5A5A", "#303030"],
        
        snapshotImg: [sdiva1],
         LiveLink: "https://superdiva.vercel.app"
    }, //End of a project
    {
        id: 3,
        title: "SuperDiva V-2 Website",
        category: "WebDev",
        // The Static Title 
        problemTitle: "Introduction",
        solutionTitle: "Features",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: sdiva2,
        problemText: "SuperDiva is a fashion e-commerce store for women of varios age and sizes. Following the V1 success, here is a V2 that prioritize aesthetics. Although, this is still static, interactions will be added very soon that will allow previewing the products, adding product to cart, marking product as favorite, modify cart and finally, checkout and emailing order information to the user and me (the seller)",

        solutionTexts: [
           "Ability to Preview products before adding to cart will be added soon",
			"Ability to save item as favorite will be added soon",
			"Ability to add item to cart and view will be added soon",
			"Ability to checkout using test Flutterwave API will be added soon",
        ],
        toolsIcons: [
            {
                icon: FaReact,
                name: "ReactJS"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: DiPhotoshop,
                name: "Photoshop"
            },
         ],
        colorPallete: ["#3c1642", "#f2994a", "#00072d"],
        
        snapshotImg: [sdiva2],
         LiveLink: "https://superdiva-v-2.vercel.app",
    }, //End of a project
    {
        id: 4,
        title: "iQueez - Quiz App",
        category: "WebDev",
        // The Static Title 
        problemTitle: "Introduction",
        solutionTitle: "Features",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: queez,
        problemText: "This is a short ReactJs project just to flex my React skills. The project manages the state using simple If statement with UseState. Nothing much to see here. Just a normal quiz app with some diss remark after each session. React Router - Used in handling the different pages. State management managed by React useState hook - No serious state change that could have require Redux or full state management tool. The website was built using ReactJs and styled using Tailwind CSS coupled with little pure CSS. ",

        solutionTexts: [
           "Ability to search for various countries to know their capital, currency, population, land mass, etc",
           "Ability to Play country capital quiz game at different levels",
           "Ability to see remarks and score after each round of 10 Questions",
           "Questions shuffles at each round to prevent pattern recognitions",
           "User will know if their answer is wrong or right immediately they select their preferred option",
        ],
        toolsIcons: [
            {
                icon: FaReact,
                name: "ReactJS"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: TbApiApp,
                name: "Country API"
            },
            {
                icon: FaCss3,
                name: "Little  Pure CSS"
            },
            {
                icon: DiPhotoshop,
                name: "Photoshop"
            },
         ],
        colorPallete: ["#008148", "#f77f00", "#0E131F", "#C6C6C6", "#5B5A5A", "#303030"],
        
        snapshotImg: [queez],
         LiveLink: "https://iqueez.vercel.app/",
    }, //End of a project
    {
        id: 5,
        title: "Ecobazar Landing Page",
        category: "WebDev",
        // The Static Title 
        problemTitle: "Introduction",
        solutionTitle: "Features",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: Eco_cover,
        problemText: "This is a project I worked on from a figma file I saw on Figma community. The page was designed by [name of designer | link] and was freely accessible on figma community. I develop the page with NextJS and Tailwind CSS while learning how to use Typescript for the first time. Nothing much to see here. This is just a static page with little interactions such as hover effect, click events and small state management with useState hook. NOTE: I do not claim the design as mine. All i did was to code someone's design with ReactJS.",

        solutionTexts: [
           "A landing page to preview various fruits and veggies",
        ],
        toolsIcons: [
            {
                icon: FaReact,
                name: "ReactJS"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: SiIcon,
                name: "React-Icons"
            },
         ],
        colorPallete: ["#008148", "#f77f00", "#0E131F", "#C6C6C6", "#5B5A5A", "#303030"],
        
        snapshotImg: [segun],
         LiveLink: "https://ecobazarr.vercel.app/",
    }, //End of a project
    {
        id: 6,
        title: "portfolio Website",
        category: "WebDev",
        // The Static Title 
        problemTitle: "Introduction",
        solutionTitle: "Features",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: segun,
        problemText: "This is my personal portfolio. Well, that's what you are checking now. The idea behind the website is to be simple, yet stylish and elegant.  For the development, I used ReactJs (Obviously) and style it using Tailwind CSS. There are some small-quantity of  secret ingredient used to bring this project to completion. ",

        solutionTexts: [
           "Ability to view different project under the dev & design categories",
           "Ability to preview each of the projects to check their details and deliverables",
           "Ability to rate each project which send a customer email to me with your Nickname, Rating and Project Title",
           "Ability to send me an Email through the contact me form",
        ],
        toolsIcons: [
            {
                icon: FaReact,
                name: "ReactJS"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: TbApiApp,
                name: "EmailJS API"
            },
            {
                icon: SiIcon,
                name: "React-Icons"
            },
            {
                icon: TbMessage,
                name: "React Toastify"
            },
         ],
        colorPallete: ["#0e1c36", "#29e7cd", "#1799632a", "#223968", "#ef4444"],
        
        snapshotImg: [segun],
         LiveLink: "https://iqueez.vercel.app/",
    }, //End of a project
    
]