import React, {ButtonHTMLAttributes} from "react";
import {ButtonColor, getColorPrimary} from "../utils/colorUtils";
import {FUIThemeProps} from "../interfaces/FUIThemeProps";
import {createUseStyles, useTheme} from "react-jss";
import clsx from "clsx";


type ButtonSizeType = 'tiny' | 'small' | 'medium' | 'large';

interface ButtonProps {
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
  color?: ButtonColor,
  disabled?: boolean,
  fullWidth?: boolean,
  variant?: 'contained' | 'outlined',
  size?: ButtonSizeType,
}

function getFontSize(size?: ButtonSizeType) {
  switch (size) {
    case "tiny":
      return 8;
    case "small":
      return 12;
    case "medium":
    default:
      return 14;
    case "large":
      return 18;
  }
}

function getPaddingSize(size?: ButtonSizeType) {
  switch (size) {
    case "tiny":
      return 3;
    case "small":
    case "medium":
    default:
      return 5;
    case "large":
      return 10;
  }
}

const useStyles = createUseStyles((theme: FUIThemeProps) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    borderRadius: 8,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    mozAppearance: "none",
    WebkitAppearance: "none", // Reset
    textDecoration: "none",
    ...theme.typography.button,
    fontSize: (props: any) => getFontSize(props.size),
    padding: (props: any) => getPaddingSize(props.size)
  },
  withIcon: {
    position: "relative",
    top: 2,
    left: 0,
    marginLeft: 5,
    marginRight: 5,
  },
  outlined: {
    borderColor: (props: any) => props.color.main,
    '&:hover': {
      borderColor: (props: any) => props.color.dark,
      color: (props: any) => props.color.dark,
    },
    border: "1px solid",
    backgroundColor: "inherit",
    color: (props: any) => props.color.main,
  },
  contained: {
    color:  (props: any) => props.color.text,
    backgroundColor: (props: any) => props.color.main,
    '&:hover': {
      backgroundColor: (props: any) => props.color.dark,
    },
  },
  fullWidth: {
    width: "100%"
  }
}));

export const Button: React.FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const {
    startIcon,
    endIcon,
    children,
    size = "medium",
    color = "primary",
    fullWidth = false,
    variant = "outlined",
    ...rest
  } = props;
  const theme = useTheme<FUIThemeProps>();
  const classes = useStyles({size, color: getColorPrimary(theme, color)});

  return (
    <button className={clsx(classes.root, {
      [classes.outlined]: variant === "outlined",
      [classes.contained]: variant === "contained",
      [classes.fullWidth]: fullWidth
    })} {...rest}>
      {props.startIcon && <div className={classes.withIcon}>{props.startIcon}</div>}
      {props.children}
      {props.endIcon && <div className={classes.withIcon}>{props.endIcon}</div>}
    </button>
  );
}