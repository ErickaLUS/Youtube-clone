import React from "react";
import styled from "@emotion/styled";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVideosByChannel } from "../redux/actions/videos.action";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";
const Container = styled.div``;
const Image = styled.img`
  width: 24%;
  height: 7%;
  background-color: #9999;
`;
const VideoPlayBack = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosByChannel(channelId));
  }, [dispatch, channelId]);
  const navigate = useNavigate();
  const { videos, loading } = useSelector((state) => state.channelVideos);
  console.log(videos[0]?.snippet.resourceId.videoId);
  const handleClick = (id) => {
    navigate(`/videos/${id}`);
  };
  return (
    <Container>
      {videos?.map((video) => (
        <Link to={`/videos/${video.snippet.resourceId.videoId}`}>
          <Container>
            <Image src={video.snippet.thumbnails.medium.url} />
          </Container>
        </Link>
      ))}
    </Container>
  );
};

export default VideoPlayBack;
