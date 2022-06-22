import styled, { css } from "styled-components/native";
import { BasicElementStyles, TextStyle } from "../types/props";

export const Container = styled.View`
  padding: 50px 40px 10px;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Button = styled.Pressable`
  margin: 6px 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props: BasicElementStyles) => {
    return css`
      background: ${props.backgroundColor || "#ededed"};
      width: ${props.width || 70}px;
      height: ${props.height || 58}px;
      border-radius: ${props.borderRadius || 20}px;
      border-color: ${props.borderColor || "transparent"};
      border-width: ${props.borderWidth || 1}px;
    `;
  }}
`;

export const ButtonText = styled.Text`
  ${(props: TextStyle) => {
    return css`
      font-family: ${props.fontFamily || "sans-serif"};
      font-style: ${props.fontStyle || "normal"};
      font-weight: ${props.fontWeight || 400};
      font-size: ${props.fontSize || 24}px;
      line-height: ${props.lineHeight || 28}px;
      text-align: ${props.textAlign || "center"};
      color: ${props.textColor || "#232323"};
    `;
  }}
`;

export const InputArea = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 50px auto 35px;
`;

export const InputNumber = styled.Text`
  margin: 3px 7px;

  ${(props: BasicElementStyles) => {
    return css`
      background: ${props.backgroundColor || "rgba(196, 196, 196, 0.29)"};
      width: ${props.width || 19}px;
      height: ${props.height || 19}px;
      border-radius: ${props.borderRadius || 10}px;
    `;
  }}
`;
