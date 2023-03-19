import React from "react";
import styled from "styled-components";

interface IProps {}

let Widget: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <WidgetWrapper>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="340"
          height="1500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </WidgetWrapper>
    </React.Fragment>
  );
};

const WidgetWrapper = styled.div``;

export default Widget;
