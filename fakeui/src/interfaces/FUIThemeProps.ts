type DisabledModel = { border: string, background: string };
type VariantColor = "primary" | "secondary" | "error" | "success" | "warning" | "info" | string;
type ComponentStyleProps<T extends FUIThemeProps = any, P = any> = InputStyles<T, P>;
type ComponentFuncStyleProps<T extends FUIThemeProps = any, P = any> = InputFunctionStyles<T, P>;
type ComponentStyle<T extends FUIThemeProps = any, P = any> =
  ComponentStyleProps<T, P>
  | ComponentFuncStyleProps<T, P>;

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
}

export interface FUIThemeProps {
  //components: ComponentsStyle
  palette: PaletteStyle,
  color: (color?: VariantColor) => ColorStyle,
  window: {width: number, height: number}
}