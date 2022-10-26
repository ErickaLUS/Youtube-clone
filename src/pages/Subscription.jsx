import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../redux/actions/videos.action";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
const Container = styled.div``;

const Title = styled.div`
  margin-top: 35px;
  color: ${({ theme }) => theme.text};
`;
const Content = styled.div``;
const Image = styled.img`
  width: 250px;
  height: 240px;
  background-color: #9999;
  margin: 25px;
  
`;
const Description = styled.div`
  color: ${({ theme }) => theme.textSoft};
  margin-top: 25px;
`;
const Wrapper = styled.div`
  display: flex;
`;

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
          <Wrapper>
            <div>
              <Image src={video?.snippet?.thumbnails?.medium?.url} alt="tg" />
            </div>
            <div>
              <Title key={video.id}>{video.snippet.title}</Title>
              <Description>{video.snippet.description}</Description>
       {/*        <p>{video?.snippet?.channelId}</p> */}
            </div>
          </Wrapper>
        </Link>
      ))}
    </Container>
  );
};

export default Subscription;
