import styled from "@emotion/styled";
import React from "react";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopularVideos } from "../redux/actions/videos.action";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  console.log(videos);
  /* const fetchData = () => {
  if (activeCategory === "All") dispatch(getPopularVideos());
  else {
    dispatch(getVideosByCategory(activeCategory));
  }
}; */

  return (
    <Container>
      {videos.map((video) => (
        <Cards video={video} key={video.id} />
      ))}

      
    </Container>
  );
}

export default Home;
