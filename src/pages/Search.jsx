import styled from "styled-components";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../redux/actions/videos.action";

import { Link } from "react-router-dom";
const Container = styled.div``;
const Image = styled.img`
  width: 90%;
  height: 200px;
  background-color: #9999;
  margin: 25px;
`;
const Description = styled.div``;
const Wrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-top: 35px;
  color: ${({ theme }) => theme.text};
`;
function Search() {
  const { search } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosBySearch(search));
  }, [search, dispatch]);
  const { videos } = useSelector((state) => state.searchedVideos);
  /* console.log("try"); */
  console.log(videos);

  return (
    <Container>
      {videos?.map((video) => (
        <Link
          to={`/videos/${video?.id.videoId}`}
          style={{ textDecoration: "none" }}
          key={video.id}
        >
          <Wrapper>
            <div>
              <Image src={video?.snippet?.thumbnails?.medium?.url} alt="tg" />
            </div>
            <div>
              <Title key={video.id}>{video.snippet.title}</Title>
              {/*  <Description>{video.snippet.description}</Description> */}
              {/*  <p>{video?.snippet?.channelId}</p> */}
            </div>
          </Wrapper>
        </Link>
      ))}
    </Container>
  );
}

export default Search;
