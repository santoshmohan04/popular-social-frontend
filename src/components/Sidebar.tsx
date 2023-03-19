import React from "react";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

interface IProps {}

const SidebarWrapper = styled.div``;

let Sidebar: React.FC<IProps> = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <React.Fragment>
      <SidebarWrapper>
        <SidebarRow src={user.photoURL} title={user.displayName} Icon="" />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
          src=""
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" src="" />
        <SidebarRow Icon={PeopleIcon} title="Friends" src="" />
        <SidebarRow Icon={ChatIcon} title="Messenger" src="" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" src="" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" src="" />
        <SidebarRow Icon={ExpandMoreOutlined} title="More" src="" />
      </SidebarWrapper>
    </React.Fragment>
  );
};
export default Sidebar;
