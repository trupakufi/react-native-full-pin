import { BasicElementStyles, TextStyle } from "../../types";

export interface ButtonsType {
  text: string;
  value: number;
  type?: "number" | string;
}

export interface ButtonProps {
  styles:
    | {
        button?: BasicElementStyles | undefined;
        buttonText?: TextStyle | undefined;
        deleteButton?: BasicElementStyles | undefined;
        okButton?: BasicElementStyles | undefined;
      }
    | undefined;
  chooseButonFunction: (button: ButtonsType) => void;
}
