import React from "react";
import { View } from "react-native";
import { RenderButtonsContainer } from "./components/buttons/renderButtonsContainer";
import { ButtonsType } from "./components/buttons/types";
import { RenderInputContainer } from "./components/inputs/renderInputContainer";
import { Container } from "./styles";
import { FullPinProps } from "./types";
import { BUTTON_TYPES } from "./constants/buttonTypes";

function FullPin({ pin, styles }: FullPinProps) {
  const { code, onChange, okFunction, onCompleted, pinLength } = pin;

  if (code.length === pin.pinLength) {
    onCompleted?.(code);
  }

  function addNumberToPin(number: number): void {
    if (code.length < pin.pinLength) {
      onChange?.([...code, number].join(""));
    }
  }

  function removeNumberFromPin(): void {
    if (code.length > 0) {
      let newPin = code.slice(0, code.length - 1);
      onChange(newPin);
    }
  }

  function sendPin(): void {
    okFunction?.(code);
  }

  function chooseButonFunction(button: ButtonsType): void {
    if (button.type === BUTTON_TYPES.OK) {
      return sendPin();
    }

    if (button.type === BUTTON_TYPES.REMOVE) {
      return removeNumberFromPin();
    }

    return addNumberToPin(button.value);
  }

  return (
    <View>
      <Container>
        {RenderInputContainer({
          pinLength,
          styles: styles?.input,
          code,
        })}
        {RenderButtonsContainer({ styles, chooseButonFunction })}
      </Container>
    </View>
  );
}

export default FullPin;
