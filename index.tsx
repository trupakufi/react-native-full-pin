import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Buttons } from "./data/buttons";
import { ButtonsType } from "./data/types";
import {
  Button,
  ButtonsContainer,
  ButtonText,
  Container,
  InputArea,
  InputNumber,
} from "./styles";
import { FullPinProps } from "./types/props";

const FullPin: React.FC<FullPinProps> = ({ pin, styles }) => {
  const [code, setCode] = useState([] as number[]);

  const InputWithValueStyles = {
    backgroundColor: styles?.input?.backgroundColorWithValue || "#3aab1d",
    borderWidth: styles?.input?.borderWidthWithValue || 1,
    borderColor: styles?.input?.borderColorWithValue || "#3aab1d",
  };

  useEffect(() => {
    pin.onChange(code.toString());

    if (code.length === pin.pinLength) {
      pin.onCompleted(code.toString());
    }
  }, [code]);

  const handleAddNumber = (number: number) => {
    if (code.length < pin.pinLength) {
      setCode([...code, number]);
    }
  };

  const handleRemoveNumber = () => {
    if (code.length > 0) {
      let newPin = code;
      newPin.pop();
      setCode([...newPin]);
    }
  };

  const handleSendPin = () => {
    pin.okFunction();
  };

  return (
    <View>
      <Container>
        <InputArea>
          {Array.from({ length: pin.pinLength }).map((_, index) => (
            <>
              <InputNumber
                {...styles?.input}
                key={index}
                style={
                  code[index] !== null &&
                  code[index] !== undefined &&
                  InputWithValueStyles
                }
              />
            </>
          ))}
        </InputArea>

        <ButtonsContainer>
          {Buttons.map((item: ButtonsType, index: number) => (
            <Button
              {...styles?.button}
              key={index}
              onPress={() => {
                if (item.type === "OK") return handleSendPin();
                else {
                  if (item.type === "remove") return handleRemoveNumber();
                  else return handleAddNumber(item.value);
                }
              }}
            >
              <ButtonText {...styles?.buttonText}> {item.text} </ButtonText>
            </Button>
          ))}
        </ButtonsContainer>
      </Container>
    </View>
  );
};

export default FullPin;
