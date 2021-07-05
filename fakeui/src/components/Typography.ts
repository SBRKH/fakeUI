import styled from "styled-components";
import {ColorVariant, getColor} from "../utils/colorUtils";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "caption" | "button" | "body1" | "body2" | "overline";
interface FUITypographyProps {
  color?: ColorVariant,
  variant?: TypographyVariant,
}

export const Typography = styled.p<FUITypographyProps>`
  color: ${props => getColor(props.theme, props.color)};  
  ${props => {
    switch (props.variant) {
      case "h1":
        return props.theme.typography.h1;
      case "h2":
        return props.theme.typography.h2;
      case "h3":
        return props.theme.typography.h3;
      case "h4":
        return props.theme.typography.h4;
      case "h5":
        return props.theme.typography.h5;
      case "h6":
        return props.theme.typography.h6;
      case "subtitle1":
        return props.theme.typography.subtitle1;
      case "subtitle2":
        return props.theme.typography.subtitle2;
      case "caption":
        return props.theme.typography.caption;
      case "button":
        return props.theme.typography.button;
      case "body2":
        return props.theme.typography.body2;
      case "overline":
        return props.theme.typography.overline;
      case "body1":
      default:
        return props.theme.typography.body1
    }
  }}
`;