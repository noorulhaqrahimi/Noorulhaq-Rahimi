import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
import NoorulhaqRahimiCV from "../assets/NoorulhaqRahimiCV.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/noorulhaq-rahimi-843799397/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/noorulhaqrahimi",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:noorulhaqrahimi11@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/Noorulhaq_Rahimi",
        icon: <Telegram />,
    },
    {
        id: 5,
        name: "Resume",
        link: NoorulhaqRahimiCV,
        icon: <Resume />,
        download: true
    }
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icon: <Twitter />,
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icon: <Discord />,
    // },
];

export default contactInfo;