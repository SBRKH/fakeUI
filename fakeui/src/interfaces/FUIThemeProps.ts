import {GreyType} from "../colors/grey";
import * as React from "react";

type DisabledModel = { border: string, background: string };
type VariantColor = "primary" | "secondary" | "error" | "success" | "warning" | "info" | string;

interface ColorStyle {
  main: string,
  light: string,
  dark: string,
  text: string
}

interface PaletteStyle {
  primary: ColorStyle,
  secondary: ColorStyle,
  error: ColorStyle,
  success: ColorStyle,
  warning: ColorStyle,
  info: ColorStyle,
  background: { main: string, paper: string },
  disabled: DisabledModel,
  grey: GreyType,
}

interface TypographyProps {
  text: string,
  h1: React.CSSProperties,
  h2: React.CSSProperties,
  h3: React.CSSProperties,
  h4: React.CSSProperties,
  h5: React.CSSProperties,
  h6: React.CSSProperties,
  body1: React.CSSProperties ,
  body2: React.CSSProperties,
  caption: React.CSSProperties,
  button: React.CSSProperties,
  subtitle1: React.CSSProperties,
  subtitle2: React.CSSProperties,
  overline: React.CSSProperties,
}

export interface FUIThemeProps {
  palette: PaletteStyle,
  color: (color?: VariantColor) => ColorStyle,
  typography: TypographyProps
}