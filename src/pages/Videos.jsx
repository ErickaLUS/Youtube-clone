import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
/* import { Comments } from "../components/Comments"; */
/* import { getValue } from "@mui/system"; */
import { getVideoById } from "../redux/actions/videos.action";
import ShowMoreText from "react-show-more-text";
import { format} from 'timeago.js';

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`
   margin-top: 25px;
  margin-left: 85px;
 
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 85px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
  margin: 20px;
  margin-left: 85px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.textSoft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`

 margin-left: 85px; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;



function Videos() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, channel } = useSelector((state) => state.selectedVideo);
  console.log(video);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="900px"
            height="400"
          ></iframe>
        </VideoWrapper>

        <Title>{video?.snippet?.title}</Title>
        <Details>
          <Info>
            {video?.statistics?.viewCount} views ~
            {format(video?.snippet?.publishedAt)}
          </Info>
         
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={video?.snippet?.thumbnails?.default?.url} />
            <ChannelDetail>
              <ChannelName>{video?.snippet?.title}</ChannelName>
              <ChannelCounter>
                {video?.statistics?.subscriberCount}
                subscribers
              </ChannelCounter>
              <Description>
                <ShowMoreText
                  lines={2}
                  more="VOIR PLUS"
                  less="VOIR MOINS"
                  anchorClass="showMoreText"
                  expanded={false}
                >
                  {video?.snippet?.description}
                </ShowMoreText>
              </Description>
            </ChannelDetail>
          </ChannelInfo>
      
        </Channel>
        <Hr />
      </Content>
      <Recommendation></Recommendation>
    </Container>
  );
}

export default Videos;
