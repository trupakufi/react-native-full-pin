import { BasicElementStyles, InputWithValue } from "../../types";

export interface InputsContainerProps {
  pinLength: number;
  styles?: (BasicElementStyles & InputWithValue) | undefined;
  code: number[];
}
