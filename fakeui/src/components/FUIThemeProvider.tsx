import * as React from "react";
import {ThemeProvider} from "styled-components";
import {FUIThemeProps} from "../interfaces/FUIThemeProps";
import {defaultTheme} from "../utils/themeUtils";

interface FUIThemeProviderProps {
  theme?: FUIThemeProps;
}

export const FUIThemeProvider: React.FC<FUIThemeProviderProps> = (props) => {
  const { theme: themeProps, children } = props;
  const theme = themeProps ? themeProps : defaultTheme();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}