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
    { id: "1", title: "first", content: "first content" },
    { id: "2", title: "second", content: "second content" },
    { id: "3", title: "third", content: "third content" },
    { id: "4", title: "fourth", content: "fourth content" },
    { id: "5", title: "fourth", content: "fourth content" },
    { id: "6", title: "fourth", content: "fourth content" },
    { id: "7", title: "fourth", content: "fourth content" },
    { id: "8", title: "fourth", content: "fourth content" },
  ],
});
