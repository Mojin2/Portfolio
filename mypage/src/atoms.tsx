import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { darkTheme } from "./theme";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export const clickedstate = atom<boolean>({
  key: "clicked",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const themeModestate = atom({
  key: "themeMode",
  default: darkTheme,
  effects_UNSTABLE: [persistAtom],
});

export const navimenustate = atom({
  key: "navimenu",
  default: ["WHO AM I", "MY WORKS", "MY VISION", "MORE ABOUT"],
  // effects_UNSTABLE: [persistAtom],
});

export const menuclickedstate = atom({
  key: "menuclicked",
  default: false,
});

export interface WorkProps {
  id: string;
  title: string;
  content: string;
  gitLink: string;
  isPublic: boolean;
  urlLink: string;
}
export const worksState = atom<WorkProps[]>({
  key: "works",
  default: [
    {
      id: "1",
      title: "Covid Crawler",
      content:
        "Crawl the number of confirmed covid patients with python, provide a search function through the LED board using Raspberry Pi GIPO.",
      gitLink: "https://github.com/Mojin2/Covid_Crawling",
      isPublic: false,
      urlLink: "",
    },
    {
      id: "2",
      title: "CarbonMBIT",
      content:
        "Provides information on carbon emissions and improvement measures in the result window by using the mbti test format.",
      gitLink: "https://github.com/TSJK-MBTI/CarbonMBTI",
      isPublic: false,
      urlLink: "",
    },
    {
      id: "3",
      title: "Hanjan Hae",
      content:
        "Provides information about your alcohol consumption by type of alcohol.",
      gitLink: "https://github.com/sh981013s/hanjan-hae",
      isPublic: false,
      urlLink: "",
    },
    {
      id: "4",
      title: "Salgu Market",
      content: "Used food trading service.",
      gitLink: "https://github.com/SalguMarket/SalguMarket",
      isPublic: false,
      urlLink: "",
    },
    {
      id: "5",
      title: "CoinTracker",
      content: "Cryptocurrency quotes and chart checking application.",
      gitLink: "https://github.com/Mojin2/CoinTracker",
      isPublic: true,
      urlLink: "https://Mojin2.github.io/CoinTracker",
    },
    {
      id: "6",
      title: "ToDo List",
      content: "To do list application using drag and drop.",
      gitLink: "https://github.com/Mojin2/ToDolist",
      isPublic: true,
      urlLink: "https://Mojin2.github.io/ToDolist",
    },
    {
      id: "7",
      title: "Movieflix",
      content: "Netflix clone coding using framer-motion.",
      gitLink: "https://github.com/Mojin2/Movieflix",
      isPublic: true,
      urlLink: "https://Mojin2.github.io/Movieflix",
    },
    {
      id: "8",
      title: "Portfolio",
      content: "Let me introduce myself.",
      gitLink: "https://github.com/Mojin2/Portfolio",
      isPublic: true,
      urlLink: "https://Mojin2.github.io/Portfolio",
    },
  ],
});
