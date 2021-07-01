import {FUIThemeProps} from "./FUIThemeProps";

type  InputObjectStyles<P> = ReactStyleDef<ReactStyle, P>;

export interface InputStyles<T extends FUIThemeProps = any, P = any> {
  [className: string]: InputObjectStyles<P>
}
