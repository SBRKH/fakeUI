import * as React from "react";
import {Button} from "../components/Button";
import {Typography} from "../components/Typography";
import {FaAccusoft, FaBeer} from "react-icons/all";

export const TestView: React.FC = () => {
  return (
    <>
      TYPOGRAPHY :
      <Typography color={"secondary"} variant={"h1"}>Test H1</Typography>
      <Typography color={"primary"} variant={"h2"}>Test H2</Typography>
      <Typography color={"text"} variant={"h3"}>Test H3</Typography>
      <Typography color={"#e9c46a"} variant={"h4"}>Test H4</Typography>
      <Typography color={"red"} variant={"h5"}>Test H5</Typography>
      <Typography variant={"h6"}>Test H6</Typography>
      <Typography variant={"subtitle1"}>Test SUBTITLE2</Typography>
      <Typography variant={"subtitle2"}>Test SUBTITLE1</Typography>
      <Typography variant={"caption"}>Test CAPTION</Typography>
      <Typography variant={"button"}>Test BUTTON</Typography>
      <Typography variant={"body1"}>Test BODY1</Typography>
      <Typography variant={"body2"}>Test BODY2</Typography>
      <Typography variant={"overline"}>Test OVERLINE</Typography>
      <Typography>Test DEFAULT</Typography>


      <Button color={"primary"} startIcon={<FaBeer />} endIcon={<FaAccusoft />} size={"tiny"}>SAUVEGARDER 1</Button>
      <Button color={"secondary"} startIcon={<FaBeer />} endIcon={<FaAccusoft />} size={"small"}>SAUVEGARDER 1</Button>
      <Button color={"primary"} startIcon={<FaBeer />} endIcon={<FaAccusoft />} variant={"contained"} size={"medium"}>SAUVEGARDER 1</Button>
      <Button color={"secondary"} startIcon={<FaBeer />} endIcon={<FaAccusoft />} size={"large"}>SAUVEGARDER 1</Button>
      <Button color={"primary"} startIcon={<FaBeer />} endIcon={<FaAccusoft />}>SAUVEGARDER 1</Button>

      <Button color={"secondary"} startIcon={<FaBeer />} endIcon={<FaAccusoft />} fullWidth={true}>SAUVEGARDER</Button>
    </>
  );
}