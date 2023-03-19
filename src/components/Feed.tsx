import React, { useEffect, useState } from "react";
import axios from "../axios";
import Stories from "./Stories";
import styled from "styled-components";
import Messager from "./Messenger";
import Post from "./Post";
import Pusher from "pusher-js";
const pusher = new Pusher("894b768214bb3e496101", {
  cluster: "ap2",
});

interface IProps {}

const FeedWrapper = styled.div`
  flex: 1;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

let Feed: React.FC<IProps> = () => {
  const [postsData, setPostsData] = useState([]);
  const syncFeed = () => {
    axios.get("/posts").then((res) => {
      console.log(res.data);
      setPostsData(res.data);
    });
  };
  useEffect(() => {
    const channel = pusher.subscribe("posts");
    channel.bind("inserted", (data) => {
      syncFeed();
    });
  }, []);
  useEffect(() => {
    syncFeed();
  }, []);
  return (
    <React.Fragment>
      <FeedWrapper>
        <Stories />
        <Messager />
        {postsData.map((entry) => (
          <Post
            profilePic={entry.avatar}
            message={entry.text}
            timestamp={entry.timestamp}
            imgName={entry.imgName}
            username={entry.user}
          />
        ))}
      </FeedWrapper>
    </React.Fragment>
  );
};

export default Feed;
