import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

interface IProps {
  src: string;
  Icon: any;
  title: string;
}

let SidebarRow: React.FC<IProps> = ({ src, Icon, title }) => {
  return (
    <React.Fragment>
      <SidebarRowWrapper>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <p>{title}</p>
      </SidebarRowWrapper>
    </React.Fragment>
  );
};

const SidebarRowWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
    border-radius: 10px;
  }
  p {
    margin-left: 20px;
    font-weight: 600;
  }
  .MuiSvgIcon-root {
    font-size: xx-large;
    color: #2e81f4;
  }
`;

export default SidebarRow;
