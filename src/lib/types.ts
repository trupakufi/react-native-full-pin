export interface BasicElementStyles {
  backgroundColor?: string;
  width?: number;
  height?: number;
  borderWidth?: number;
  borderColor?: string;
  borderStyle?: string;
  borderRadius?: number;
  className?: string;
  id?: string;
}

export interface TextStyle {
  textColor?: string;
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontSize?: number;
  lineHeight?: number;
  textAlign?: string;
  className?: string;
  id?: string;
}

export interface InputWithValue {
  backgroundColorWithValue?: string;
  borderWidthWithValue?: number;
  borderColorWithValue?: string;
  borderStyleWithValue?: string;
}

export interface FullPinProps {
  pin: {
    code: string;
    pinLength: 4 | 6 | 8;
    onChange: (e: string) => void;
    onCompleted?: (e: string) => void;
    okFunction?: (e: string) => void | undefined;
  };
  styles?: {
    container?: {
      backgroundColor?: string;
      buttonSpacement?: number;
      inputSpacement?: number;
      className?: string;
    };
    input?: BasicElementStyles & InputWithValue;
    button?: BasicElementStyles;
    buttonText?: TextStyle;
    deleteButton?: BasicElementStyles;
    okButton?: BasicElementStyles;
  };
}
