import styled from "styled-components";
import React from "react";

interface FUICardProps {
  icon: React.ReactNode,
  title: string,
  subtitle: string,
}

const StyledCard = styled.div`
   position: 'relative';
   backgroundColor: ${props => props.theme.palette.background.paper};
   borderRadius: 4,
   boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
   border: 'none',
   width: '100%',
`;

export const Card: React.FC<FUICardProps> = (props) => {

  return (
    <StyledCard>

    </StyledCard>
  );
}