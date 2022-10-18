import styled from "@emotion/styled";
import Mastery from "../img/mastery.jpg";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 90%;
  height: 200px;
  background-color: #9999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  margin-top: 2px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin: 10px 0px;
  color: ${({ theme }) => theme.textSoft};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

function Cards({ video }) {
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

  return (
    <Container onClick={handleClick}>
      <Image src={medium.url} />
      <Details>
        <ChannelImage />
        <Texts>
          <Title>{title}</Title>
          <ChannelName>{channelTitle}</ChannelName>
          <Info>660,998 views . day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
}

export default Cards;
