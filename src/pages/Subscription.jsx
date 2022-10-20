import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../redux/actions/videos.action";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
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
const Description = styled.div``;

const Subscription = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.subscriptionsChannel);
  console.log(videos);
  /*  const handleClick = (channelId) => {
    isVideo: navigateTo(`/channel/${channelId}`);
    console.log(channelId);
  };
 */
  return (
    <Container>
      {videos?.map((video) => (
        <Link
          to={`/videoplayback/${video?.snippet?.resourceId?.channelId}`}
          style={{ textDecoration: "none" }}
          key={video.id}
        >
          <div>
            <Image src={video?.snippet?.thumbnails?.medium?.url} alt="tg" />

            <div key={video.id}>{video.snippet.title}</div>
            <Description>{video.snippet.description}</Description>
            <p>{video?.snippet?.channelId}</p>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default Subscription;
