import { atom } from "recoil";

export const userAtom = atom({
    key: "user",
    default: {}
})

export const userTokenAtom = atom({
    key: "token",
    default: ""
})

