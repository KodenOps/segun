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
// SMUUT V2 IMAGES
import smuutv2 from "../assets/smuutv2.png";
import img1 from "../assets/smuutv2/img1.png";
import img2 from "../assets/smuutv2/img2.png";
import img3 from "../assets/smuutv2/img3.png";
import img4 from "../assets/smuutv2/img4.png";
import img5 from "../assets/smuutv2/img5.png";
import img77 from "../assets/smuutv2/img77.png";
//bakeet images
import coverss from "../assets/bakeets/cover.png";
import customize from "../assets/bakeets/customize.png";
import dash from "../assets/bakeets/dash.png";
import load from "../assets/bakeets/load.png";
import onboard from "../assets/bakeets/onboard.png";
import pass from "../assets/bakeets/pass.png";
import stated from "../assets/bakeets/stated.png";
import success from "../assets/bakeets/success.png";
//dwin images
import games from "../assets/dwin/games.png"; 
import bills from "../assets/dwin/bills.png";
import home from "../assets/dwin/home.png";
import investment from "../assets/dwin/investment.png";
import peer from "../assets/dwin/peer.png";
import signup from "../assets/dwin/signup.png";
import transfer from "../assets/dwin/transfer.png";
import cover from "../assets/dwin/cover.png";
// icons imports
import {TbBrandFigma} from "react-icons/tb"
import {FaChartPie, FaUnsplash, FaWhatsapp} from "react-icons/fa"
import {SiNotion, SiAdobephotoshop, SiGoogle} from "react-icons/si"
import { IoGitNetworkOutline } from "react-icons/io5"

// CHART IMAGES
import eachtoconnect from "../assets/chart/easeToConnect.png"  
import StruggleToGetAccommodation from "../assets/chart/StruggleToGetAccommodation.png"
import frshmanExp from "../assets/chart/frshmanExp.png"
import { DiPhotoshop } from "react-icons/di";
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
    // END OF LUTA PROJECT
    // END OF LUTA PROJECT
    // END OF LUTA PROJECT
    // END OF LUTA PROJECT
    {
        id: 3,
        title: "SMUUT Financial App",
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
        coverImg: smuutv2,
        problemText: "Named after the concept of SMOOTH, signifying effortless transactions, Smuut aims to streamline financial interactions. Identity theft, particularly with debit cards, is a pressing concern, with Nigeria experiencing a significant rise in such incidents. According to recent data from the Nigeria Inter-Bank Settlement System (NIBSS), there were over 20,000 reported cases of identity theft involving debit cards in the past year alone. This alarming trend poses a substantial risk to card payments, especially prevalent in online transactions, where users typically opt for card payments. However, the process often involves either storing the card details on the app (a daunting prospect) or tediously entering the lengthy PAN, expiry date, CVV, etc., even for small transactions as low as ₦1,000 (less than $1 USD).\n In-store payments present another challenge. While consumers prefer using cards for purchases at places like local eateries, malls, or convenience stores, issues arise when cards are forgotten at home or network failures occur, leading to declined transactions. Moreover, the inconvenience escalates when transferring funds between different banks, as recipients must wait for credit alerts. Why should users waste time waiting in stores to confirm payments? \nThis inconvenience extends to budding entrepreneurs seeking seamless payment solutions. They seek ways to receive payments without the stress associated with traditional methods. Smuut addresses these pain points, offering a solution for hassle-free financial transactions.",
        gettingStartedTexts: "Embarking on the design journey of Smuut, I immersed myself in understanding payment behaviors and challenges. Recognizing the need for diverse perspectives, I conducted research across ten states in Nigeria, covering all four cardinal regions. Through conversations with individuals from varied backgrounds, I identified key pain points. Here's a summary of our findings from a sample size of 47 individuals",
        snoopAroundTexts: "The survey highlighted widespread concerns about debit card identity theft (60%) and frustrations with the cumbersome card payment process (74%). Network reliability issues affected 38% of users, particularly in regions with unreliable connectivity. Additionally, 53% cited inter-bank transfer delays as a major pain point. These findings underscore the need to address these challenges to enhance the user experience and streamline financial transactions.",
        solutionTexts: [
           "Ability to move cart into the mobile app for payment. I.e instead of using your card, you copy code from the cart and load it on the app for payment.",
            "Ability to generate payment-receiving QR code either for a fixed payment or for a varied payment",
            "Ability to make payment seemlessly either in-store or online without debit card at all",
            "Ability to join monthly contribution among peers and collect contribution based on the numbering",
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
        colorPallete: ["#090F22", "#F61067", "#2F80ED", "#27AE60", "#E2B93B", "#EB5757"],
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
        snapshotImg: [  img1,img2, img3,  img4, img5, img77],
    }, //End of a project
    
    // END OF SMUUT PROJECT
    // END OF SMUUT PROJECT
    // END OF SMUUT PROJECT
    // END OF SMUUT PROJECT
    {
        id: 4,
        title: "Bakeet App",
        category: "UI design",
        // The Static Title 
        problemTitle: "The Problem",
        gettingStartedTitle: "Getting Started",
        snoopAroundTitle: "Snooping Around",
        solutionTitle: "Solution",
        toolsTitle: "Tools",
        colorPalleteTitle: "Colour Pallete",
        ResearchAnalysisTitle: "No Research - This is just a UI Design Project",
        snapshotTitle: "Product Snapshots",
        // The sections Contents
        coverImg: coverss,
        problemText: "Bakeet is a mini app project that focuses on bringing pastries closer to their customers. Via this app, their customers can order different pasteries, make payment and track their yummy-goodness' delivery. This project is completed using aesthetic, modern, and intuitive User interface in a way that ensures seamless navigation across the platform. The app contain the following features.",
        gettingStartedTexts: "Bakeet is a design exploration for a baker who intended to reach a wide audience via her new application. One of her major challenges is expanding her reach in such a way that even if her customers are not closeby, they can order for any of her baked awesomeness and it will be delivered at their doorstep. Also, there are other concern that users might be skeptical about choice making, this means she need to have an engaging application interface where users can see varieties, be able to view her goods in categories, and also have a seemless means of payment",
        snoopAroundTexts: "As this is just an exploratory project, the main focus is the design rather than going guns & bazooka with research and co. Different sketches were made to figure out which will convey the identity and voice of the Bakeet Brand. As this is a new brand with no identity yet, Logo, colours, and other brand identities were created as a deliverable for this project. Also, the user flow was designed with FigJam to know how the flow of process from start to completion will be. Following this, the screens were created with different modern features.",
        solutionTexts: [
           "Aesthetic, modern, and intuitive User interface",
			"Different categories of pasteries",
			"Fast and easy payment method",
			"An easy to use contact us chat box",
			"Tracking of order movement from the oven to your doorstep",
        ],
        toolsIcons: [
            {
                icon: TbBrandFigma,
                name: "Figma"
            },
           
            {
                icon: SiAdobephotoshop,
                name: "Photoshop"
            },
            
            {
                icon: IoGitNetworkOutline,
                name: "Figjam"
            },
         ],
        colorPallete: ["#090F22", "#F61067", "#2F80ED", "#27AE60", "#E2B93B", "#EB5757"],
        researchImgs: [],
        snapshotImg: [  onboard, stated, pass, load, success, dash, customize],
    }, //End of a project
    // END OF BAKEET PROJECT
    // END OF BAKEET PROJECT
    // END OF BAKEET PROJECT
    // END OF BAKEET PROJECT
    {
        id: 5,
        title: "Jumia App - Modification",
        category: "Re-imagined",
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
        coverImg: coverss,
        problemText: "One issue I feel we always ignore when creating ecommerce solutions is that we always focus on a specific type of users while ignoring the other type of users. You will agree with me that for an Ecommerce application like Jumia, there are two categories of Users. (a) the buyers (b) the seller. For a weird reason, when we think about this product, we always prioritize the buyers over the sellers. The payment, the user flows, the UX, the icon placement, the business behind the application are often times solely focused on the buyer. For instance, what happen when the product you picked and paid for on Jumia happen to be unavailable again after payment? The order will be canceled and refund will be sent to the buyer. No avenue for the Seller to upsell or suggest alternatives. Like I said, one sided focus. Another issue I found about Jumia and most Ecommerce applications (I sampled Jumia, Konga, Amazon, Ebay) is that you can't edit order (add to the quantity or change a variety like colour/size) after payment even before the shipping from the seller is done. What if there is a controlled means to be able to edit order in a way that won't affect the price. Let say change colour for products that have fixed price for all colours. This way, nothing is changing in terms of payments. Even if payment will be tampered, it should be limited to any change that cause INCREASE to price ONLY. Any change that leads to reduction in price will be at the loss of the buyer or will be sent to a wallet for future purchase",
        gettingStartedTexts: "Sampled over 14 known vendors on Jumia to know what they feel about the app in relation to my own detected issues. Also, I asked around both online and offline and I could get responses from 20 regular users of Jumia, 5 from 1-3 times users of Jumia and quite a number of them said something in relations to my concerns",
        snoopAroundTexts: "Of the 14 vendors contacted, 6 people talked aout how frustrating it could be for them not to be able to upsell to customers and most of the issues faced from their end always leads to order cancellation and a bad rating for them afterward. How about them having a means to communicate to buyers even if it is going to be controlled. They believe customers are not always fixated on a particular choice. An alternative could be accepted by the user",
        solutionTexts: [
           "A new edit icon is added to Order list to allow users be able to edit their order within a limited timeframe (controlled editing)",
            "Ability for Seller to send controlled message about an order which prompt a ACTION REQUIRED modal for buyers to review",
            "Ability to accept/reject modifications from the seller",
            "A new label is also added to the order component to signify that there is a need to quickly check the order as modifications has been suggested by the seller",
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
                icon: FaWhatsapp,
                name: "WhatsApp Call"
            },
            {
                icon: DiPhotoshop,
                name: "Photoshop"
            },
            {
                icon: SiGoogle,
                name: "Google Form"
            },
         ],
        colorPallete: ["#090F22", "#F61067", "#2F80ED", "#27AE60", "#E2B93B", "#EB5757"],
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
        snapshotImg: [  onboard, stated, pass, load, success, dash, customize],
    }, //End of a project
    // END OF JUMIA PROJECT
    // END OF JUMIA PROJECT
    // END OF JUMIA PROJECT
    // END OF JUMIA PROJECT
    {
        id: 6,
        title: "Tinder - Modification",
        category: "Re-imagined",
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
        coverImg: coverss,
        problemText: "The dating market is a jungle if you will agree with me. It's even worse when you involve social media or dating sites to foster your search. There are lots of issues such as long distance, mismatch of identity (more like what I ordered for vs what I get situation), Catfishing, time wasters, Hookup girls posing as a wife materials, etc. These and many more are what those who are genuinely searching for match online faces. Tinder is not excluded from this shit. In fact, it happens to be a major stakeholder of these issues. One of the major concern on this platform is time-waster, and catfishes. It will be great if users can checkmate this fishes before spending much time interacting with them. This project is just a short one to showcase the solution I'm suggesting to combat some of the issues I noticed on the Tinder app ",
        gettingStartedTexts: "To start with this project, I have to sign-up on the platform as a regular user. Let say I had to go and search actively for love. One issue I first noticed is the number of fake accounts posing as women. Another thing I noticed is the flow of things on the app especially when searchiing for genuine life partner. And the flow include: Get Matched, chat briefly and plan meetups, meet up and realize he/she have some defects that poses red flag to you.",
        snoopAroundTexts: "I did quite a lot of snooping which involve signing up for the platform, setting up my profile and swipped the hell out the cards. Now, here is the catch. I met quite a handful of people there. Some who are my padi now. But I noticed this drag with communication with these people which I believe would have been great if rather than text, A video call first would have ease the ground and also set as an examination for the new match",
        solutionTexts: [
           "On getting matched, users setup a virtual meeting to talk face to face before opening the chat for further engagement. This should weed out fishes",
           "Also,it will be great if users can only see people within what they are looking for. That is, if my account is LOOKING FOR LOVE, I should only be seeing other people looking for love. Seeing people who are looking for SHORT TERM FUN is a mid approach",
        ],
        toolsIcons: [
            {
                icon: TbBrandFigma,
                name: "Figma"
            },
            {
                icon: FaUnsplash,
                name: "Unsplash"
            },
            {
                icon: SiAdobephotoshop,
                name: "Photoshop"
            },
            
         ],
        colorPallete: ["#090F22", "#F61067", "#2F80ED", "#27AE60", "#E2B93B", "#EB5757"],
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
        snapshotImg: [  onboard, stated, pass, load, success, dash, customize],
    }, //End of a project
    {
        id: 7,
        title: "DWIN Bank Software",
        category: "Freestyle",
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
        coverImg: cover,
        problemText: "Named after the concept of SMOOTH, signifying effortless transactions, Smuut aims to streamline financial interactions. Identity theft, particularly with debit cards, is a pressing concern, with Nigeria experiencing a significant rise in such incidents. According to recent data from the Nigeria Inter-Bank Settlement System (NIBSS), there were over 20,000 reported cases of identity theft involving debit cards in the past year alone. This alarming trend poses a substantial risk to card payments, especially prevalent in online transactions, where users typically opt for card payments. However, the process often involves either storing the card details on the app (a daunting prospect) or tediously entering the lengthy PAN, expiry date, CVV, etc., even for small transactions as low as ₦1,000 (less than $1 USD).\n In-store payments present another challenge. While consumers prefer using cards for purchases at places like local eateries, malls, or convenience stores, issues arise when cards are forgotten at home or network failures occur, leading to declined transactions. Moreover, the inconvenience escalates when transferring funds between different banks, as recipients must wait for credit alerts. Why should users waste time waiting in stores to confirm payments? \nThis inconvenience extends to budding entrepreneurs seeking seamless payment solutions. They seek ways to receive payments without the stress associated with traditional methods. Smuut addresses these pain points, offering a solution for hassle-free financial transactions.",
        gettingStartedTexts: "Embarking on the design journey of Smuut, I immersed myself in understanding payment behaviors and challenges. Recognizing the need for diverse perspectives, I conducted research across ten states in Nigeria, covering all four cardinal regions. Through conversations with individuals from varied backgrounds, I identified key pain points. Here's a summary of our findings from a sample size of 47 individuals",
        snoopAroundTexts: "The survey highlighted widespread concerns about debit card identity theft (60%) and frustrations with the cumbersome card payment process (74%). Network reliability issues affected 38% of users, particularly in regions with unreliable connectivity. Additionally, 53% cited inter-bank transfer delays as a major pain point. These findings underscore the need to address these challenges to enhance the user experience and streamline financial transactions.",
        solutionTexts: [
           "Ability to move cart into the mobile app for payment. I.e instead of using your card, you copy code from the cart and load it on the app for payment.",
            "Ability to generate payment-receiving QR code either for a fixed payment or for a varied payment",
            "Ability to make payment seemlessly either in-store or online without debit card at all",
            "Ability to join monthly contribution among peers and collect contribution based on the numbering",
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
        colorPallete: ["#090F22", "#F61067", "#2F80ED", "#27AE60", "#E2B93B", "#EB5757"],
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
        snapshotImg: [games, bills, home, investment, peer, signup, transfer],
    }, //End of a project
    
]