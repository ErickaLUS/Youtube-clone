import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Mastery from "../img/mastery.jpg";
import { Comment } from "./Comment";
import {
  StyleAvatar,
  StyleContainer,
  StyleForm,
  StyleInput,
  StyleNewComment,
} from "./style";
import socketIO from "socket.io-client";
import axios from "axios";

const socket = socketIO.connect("http://localhost:4000");

const name = JSON.parse(sessionStorage.getItem("ytc-user"));

export const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  console.log("my comment", comments);

  const { video, channel } = useSelector((state) => state.selectedVideo);
  const user = useSelector((state) => state.auth.user);

  console.log("MMMM", video?.id);
  console.log("USER", user);

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("out of codition");
    console.log({ username: localStorage.getItem("name") });

    // const newComment = {
    //   comment: comment,
    //   videoId: video?.id,
    //   userName: user.name,
    // };


    if (comment.trim()) {
      console.log("in codition");
      socket.emit(
        "comment",
        {
          name:user.name,
          picture:user.photoURL,
          text: comment,
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id,
        },
        () => {
          console.log({
            socket: {
              name: user.name,
              picture: user.photoURL,
              text: comment,
              id: `${socket.id}${Math.random()}`,
            },
          });
        }
      );
    }
    setComment("");

    axios
      .post("http://localhost:4000/comment", {
        comment: comment,
        videoId: video?.id,
        userName: user.name,
      })
      .then((data) => console.log("DATA", data))
      .catch((err) => console.log(err, "ggg"));
  /*   console.log("BACK RESULT", result) */
  };

  axios
    .get("http://localhost:4000/comment")
    .then((data) => console.log("DATA" , data))
    .catch((error)  => console.log("There was an error!", error)
    ); 

  return (
    <StyleContainer>
      <StyleNewComment>
        <StyleAvatar src={Mastery} />
        <StyleForm onSubmit={handleSendMessage}>
          <StyleInput
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </StyleForm>
      </StyleNewComment>
      <Comment comments={comments} setComments={setComments} />
    </StyleContainer>
  );
};
