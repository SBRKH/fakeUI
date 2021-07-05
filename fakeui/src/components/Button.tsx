import styled from "styled-components";
import {ButtonColor, getColorPrimary} from "../utils/colorUtils";
import React from "react";

interface StyledButtonProps {
  color?: ButtonColor,
  disabled?: boolean,
  fullWidth?: boolean,
  variant?: 'contained' | 'outlined',
  size?: 'tiny' | 'small' | 'medium' | 'large'
}

interface ButtonProps extends StyledButtonProps {
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode,
}

const StyledButton = styled.button.attrs<StyledButtonProps>(props => ({
  color: getColorPrimary(props.theme, props.color),
  disabled: props.disabled || false,
  fullWidth: props.fullWidth || false,
  variant: props.variant || 'outlined',
  size: props.size || 'medium',
}))<any>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0;
  border: 0;
  margin: ; // Remove the margin in Safari
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none; // Reset
  -webkit-appearance: none; // Reset
  text-decoration: none;
  ${props => props.theme.typography.button}
  ${(props) => props.fullWidth && ` width: 100%;`}
  ${(props) => {
  switch (props.variant) {
    case "outlined":
      return `border-color: ${props.color.main};
            &:hover {
              border-color: ${props.color.dark};
              color: ${props.color.dark} !important;
            };
            border: 1px solid;
            background-color: inherit;
            color: ${props.color.main} !important;
            `;
    case "contained":
      return `background-color: ${props.color.main};
            &:hover {
              background-color: ${props.color.dark};
            };`;
  }
}};
  color: ${props => props.theme.palette.primary.text};
   ${(props) => {
  switch (props.size) {
    case "tiny":
      return `
          font-size: 8px;
          padding: 3px;
        `;
    case "small":
      return `
          font-size: 12px;
          padding: 5px;
        `;
    case "medium":
      return `
        font-size: 14px;
        padding: 5px;
        `;
    case "large":
      return `
        padding: 10px;
        font-size: 18px;
        `;
  }
}
}`;

const WithIcon = styled.div`
  position: relative;
  top: 2px;
  left: 0px;
  margin-left: 5px;
  margin-right: 5px;
  `;


export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {
        props.startIcon &&
        <WithIcon>
          {props.startIcon}
        </WithIcon>
      }
      {props.children}
      {
        props.endIcon &&
        <WithIcon>
          {props.endIcon}
        </WithIcon>
      }
    </StyledButton>
  );
}