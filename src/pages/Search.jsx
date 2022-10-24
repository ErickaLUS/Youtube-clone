import styled from "styled-components";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../redux/actions/videos.action";
import Mastery from "../img/mastery.jpg";
import { Title } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Container = styled.div``;
const Image = styled.img`
  width: 24%;
  height: 7%;
  background-color: #9999;
`;
const Description= styled.div``;

function Search() {
  const { search } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideosBySearch(search));
  }, [search, dispatch]);
  const { videos } = useSelector((state) => state.searchedVideos);
  console.log("try");
  console.log(videos);

  return (
    <Container>
      {videos?.map((video) => (
        <Link
          to={`/search/${video?.snippet?.channelId}`}
          style={{ textDecoration: "none" }}
          key={video.id}
        >
          <div>
            <Image src={video?.snippet?.thumbnails?.medium?.url} alt="tg" />

            <div key={video.id}>{video.snippet.title}</div>
          {/*   <Description>{video.snippet.description}</Description> */}
           {/*  <p>{video?.snippet?.channelId}</p> */}
          </div>
        </Link>
      ))}
    </Container>
  );
}

export default Search;
