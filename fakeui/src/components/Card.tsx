import React from "react";
import { Typography } from "./Typography";
import grey from "../colors/grey";

interface FUICardProps {
  icon?: React.ReactNode,
  title: string,
  subtitle?: string,
}

/*const StyledCard = styled.div`
   position: 'relative';
   background-color: ${props => props.theme.palette.background.paper};
   border-radius: 4px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   border: 'none';
   width: '100%';
   margin: 5px;
`;*/

export const Card: React.FC<FUICardProps> = (props) => {
  const { title, subtitle} = props;

  return (
    <div>
      <Typography color={"black"} variant={"h4"}>{title}</Typography>
      {subtitle && <Typography color={grey[700]} variant={"body2"}>{subtitle}</Typography>}
    </div>
  );
}