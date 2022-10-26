import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
/* import { getValue } from "@mui/system"; */
import { getVideoById } from "../redux/actions/videos.action";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span``;

const Button = styled.div``;

const Buttons = styled.div``;

const Recommendation = styled.div`
  flex: 2;
`;

function Videos() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video } = useSelector((state) => state.selectedVideo);
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
            width="100%"
            height="400"
          ></iframe>
        </VideoWrapper>

        <Title>{video?.snippet?.title}</Title>
        <Details>
          <Info></Info>
        </Details>
      </Content>
      <Recommendation></Recommendation>
    </Container>
  );
}

export default Videos;
