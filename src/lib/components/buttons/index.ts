import { BUTTON_TYPES } from "../../constants/buttonTypes";
import { ButtonsType } from "./types";

export const Buttons: ButtonsType[] = [
  { text: "1", value: 1 },
  { text: "2", value: 2 },
  { text: "3", value: 3 },
  { text: "4", value: 4 },
  { text: "5", value: 5 },
  { text: "6", value: 6 },
  { text: "7", value: 7 },
  { text: "8", value: 8 },
  { text: "9", value: 9 },
  { text: "<", value: -1, type: BUTTON_TYPES.REMOVE },
  { text: "0", value: 0 },
  { text: "OK", value: -1, type: BUTTON_TYPES.OK },
];
