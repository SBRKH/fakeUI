import {FUIThemeProps} from "../interfaces/FUIThemeProps";
import grey from "../colors/grey";

export const defaultTheme = (): FUIThemeProps => {
  return ({
    palette: {
      primary: {
        main: "#5369EE",
        light: "#8596ff",
        dark: "#4B5FD8",
        text: "#fff"
      },
      secondary: {
        main: "#DD639D",
        light: "#ff94c7",
        dark: "#db5a97",
        text: "#222222"
      },
      error: {
        main: "#ef476f",
        dark: "#ff003d",
        light: "#ff7596",
        text: "#FFFFFF"
      },
      success: {
        main: "#06d6a0",
        dark: "#009971",
        light: "#32fcc8",
        text: "#FFFFFF"
      },
      warning: {
        main: "#ffd166",
        light: "#fadb93",
        dark: "#ffb200",
        text: "#FFFFFF"
      },
      info: {
        main: "#118ab2",
        dark: "#005e7d",
        light: "#00bfff",
        text: "#FFFFFF"
      },
      background: {
        main: '#FFF',
        paper: "#FFF"
      },
      disabled: {
        border: "",
        background: ""
      },
      grey: grey
    },
    typography: {
      h1: {
        display: "block",
        fontSize: "2em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
      },
      h2: {
        display: "block",
        fontSize: "1.5em",
        marginTop: "0.83em",
        marginBottom: "0.83em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
      },
      h3: {
        display: "block",
        fontSize: "1.17em",
        marginTop: "1em",
        marginBottom: "1em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
      },
      h4: {
        display: "block",
        fontSize: "1em",
        marginTop: "1.33em",
        marginBottom: "1.33em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
      },
      h5: {
        display: "block",
        fontSize: ".83em",
        marginTop: "1.67em",
        marginBottom: "1.67em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
      },
      h6:{
        display: "block",
        fontSize: ".67em",
        marginTop: "2.33em",
        marginBottom: "2.33em",
        marginLeft: 0,
        marginRight: 0,
        fontWeight: "bold",
      },
      body1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.43,
        letterSpacing: "0.01071em",
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1.66,
        letterSpacing: "0.03333em"
      },
      button: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.75,
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.75,
        letterSpacing: "0.00938em"
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.57,
        letterSpacing: "0.00714em",
      },
      overline: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 2.66,
        letterSpacing: "0.08333em",
        textTransform: "uppercase"
      },
    }
  }) as FUIThemeProps;
}