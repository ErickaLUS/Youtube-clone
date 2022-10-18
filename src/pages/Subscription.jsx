import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../redux/actions/videos.action";
import { useEffect } from "react";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
import { style } from "@mui/system";

const Container = styled.div``;
const Hr = styled.hr`
  margin-left: 0px;
  border: 3px solid ${({ theme }) => theme.soft};
`;
const Title = styled.div``;
const Content = styled.div``;
const Image = styled.img`
  width: 24%;
  height: 7%;
  background-color: #9999;
`;
const Description = styled.div`
  margin-left: 35px;
`;

const Subscription = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.subscriptionsChannel);
  console.log(videos);

  return (
    <Container>
      {videos?.map((video) => (
        <div key={video.id}>
          <Image src={video?.snippet?.thumbnails?.medium?.url} alt="tg" />

          <div key={video.id}>{video.snippet.title}</div>
          <Description>{video.snippet.description}</Description>
        </div>
      ))}
    </Container>
  );
};

export default Subscription;
