import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
});

export const clickedstate = atom<boolean>({
  key: "clicked",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
