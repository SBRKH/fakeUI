import {FUIThemeProvider} from "../components/FUIThemeProvider";
import {TestView} from "./TestView";
import * as React from "react";

export const MainView: React.FC = () => {
  return (
    <FUIThemeProvider>
      <TestView />
    </FUIThemeProvider>
  );
}