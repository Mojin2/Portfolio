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
