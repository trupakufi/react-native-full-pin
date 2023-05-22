import React from "react";
import { Buttons } from ".";
import { Button, ButtonText, ButtonsContainer } from "../../styles";
import { ButtonProps, ButtonsType } from "./types";

export function RenderButtonsContainer({
  styles,
  chooseButonFunction,
}: ButtonProps) {
  return (
    <ButtonsContainer>
      {Buttons.map((button: ButtonsType, index: number) => (
        <Button
          {...styles?.button}
          key={index}
          onPress={() => chooseButonFunction(button)}
        >
          <ButtonText {...styles?.buttonText}> {button.text} </ButtonText>
        </Button>
      ))}
    </ButtonsContainer>
  );
}
