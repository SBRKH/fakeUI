import {FUIThemeProps} from "../interfaces/FUIThemeProps";

export type ColorVariant = "primary" | "secondary" | "text" | string;
export type ButtonColor = "primary" | "secondary" | "text";

export function getColor(theme: FUIThemeProps, colorProps?: ColorVariant) {
  switch (colorProps) {
    case "primary":
      return theme.palette.primary.main;
    case "secondary":
      return theme.palette.secondary.main;
    case "text":
      return theme.palette.primary.text
    default:
      return colorProps ? colorProps : theme.palette.primary.main;
  }
}

export function getColorPrimary(theme: FUIThemeProps, colorProps: ButtonColor = "primary") {
  switch (colorProps) {
    case "primary":
    case "text":
    default:
      return theme.palette.primary;
    case "secondary":
      return theme.palette.secondary;
  }
}