import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  margin-top: 15px;
  width: 90%;
  height: 200px;
  background-color: #9999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const Texts = styled.div``;

const Title = styled.h1`
  margin-top: 2px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0px;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
`;

function Cards({ video, channel }) {
  const navigate = useNavigate();
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      viewCount,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;
  const handleClick = () => {
    navigate(`/videos/${id}`);
  };
  console.log(id);
  return (
    <Container onClick={handleClick}>
      <Image src={medium.url} />
      <Details>
        <Texts>
          <Title>{title}</Title>
          <ChannelName>{channelTitle}</ChannelName>
          <Info>{publishedAt}</Info>
        </Texts>
      </Details>
    </Container>
  );
}

export default Cards;
