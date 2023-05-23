import React from "react";
import { InputArea, InputNumber } from "../../styles";
import { InputsContainerProps } from "./types";

export function RenderInputContainer({
  pinLength,
  styles,
  code,
}: InputsContainerProps) {
  function stylesForInputFilled() {
    const inputStyles = {
      backgroundColor: styles?.backgroundColorWithValue || "#3aab1d",
      borderWidth: styles?.borderWidthWithValue || 1,
      borderColor: styles?.borderColorWithValue || "#3aab1d",
    };

    return inputStyles;
  }

  return (
    <InputArea>
      {Array.from({ length: pinLength }).map((_, index) => (
        <>
          <InputNumber
            {...styles}
            key={index}
            style={!!code[index] && stylesForInputFilled()}
          />
        </>
      ))}
    </InputArea>
  );
}
