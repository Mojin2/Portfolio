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
  default: ["WHO AM I", "MY WORKS", "MY VISION", "MORE DETAILS"],
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
}
export const worksState = atom<WorkProps[]>({
  key: "works",
  default: [
    { id: "1", title: "1st", content: "1st content" },
    { id: "2", title: "2nd", content: "2nd content" },
    { id: "3", title: "3rd", content: "3rd content" },
    { id: "4", title: "4th", content: "4th content" },
    { id: "5", title: "5th", content: "5th content" },
    { id: "6", title: "6th", content: "6th content" },
    { id: "7", title: "7th", content: "7th content" },
    { id: "8", title: "8th", content: "8th content" },
  ],
});
