import {ColorVariant, getColor, getColorPrimary} from "../utils/colorUtils";
import React from "react";
import {FUIThemeProps} from "../interfaces/FUIThemeProps";
import {createUseStyles} from "react-jss";
import clsx from "clsx";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "caption" | "button" | "body1" | "body2" | "overline";
interface FUITypographyProps {
  color?: ColorVariant,
  variant?: TypographyVariant,
  className?: any,
}

function getTypographyStyle(variant: TypographyVariant, theme: FUIThemeProps) {
  console.log("variant==", variant, "theme===", theme);
  switch (variant) {
    case "h1":
      return theme.typography.h1;
    case "h2":
      return theme.typography.h2;
    case "h3":
      return theme.typography.h3;
    case "h4":
      return theme.typography.h4;
    case "h5":
      return theme.typography.h5;
    case "h6":
      return theme.typography.h6;
    case "subtitle1":
      return theme.typography.subtitle1;
    case "subtitle2":
      return theme.typography.subtitle2;
    case "caption":
      return theme.typography.caption;
    case "button":
      return theme.typography.button;
    case "body2":
      return theme.typography.body2;
    case "overline":
      return theme.typography.overline;
    case "body1":
    default:
      return theme.typography.body1
  }
}

const useStyles = createUseStyles((theme: FUIThemeProps) => {
  return ({
    root: {
      color: (props: any) => getColor(theme, props.color),
      ...(props: any) => () => getTypographyStyle(props.variant, theme),
    },
  });
});

export const Typography: React.FC<FUITypographyProps> = (props) => {
  const { children, variant, color, className } = props;
  const classes = useStyles({variant, color});

  return (
    <p className={clsx(classes.root, className)}>
      {children}
    </p>
  )
}