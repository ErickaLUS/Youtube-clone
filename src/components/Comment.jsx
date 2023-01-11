import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Mastery from "../img/mastery.jpg";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  flex-direction: column;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 85px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  margin-left: 85px;
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.textSoft};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Date = styled.span`
  font-size: 13px;
  font-weight: 500px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;
const Reponse = styled.p`
  font-size: 14px;
`;

export const Comment = ({ comments, setComments }) => {
  // const socket = useRef();
  // setComment([...comment, data])
 /*  const getComment = () => {
    socket.emit()
  } */

  console.log("suhhh", comments);

  useEffect(() => {
    socket?.on("messageResponse", (data) => setComments([...comments, data]));
  }, [socket, comments]);

  return (
    <Container>
      {comments?.map((item) => {
        return (
          <>  
            <Avatar src={item?.picture} />
            <Details>
              <Name>
              {item?.name}<Date>1 ago day</Date>
              </Name>
              <Text>{item?.text}</Text>
              <Buttons>
                <Button>
                  <ThumbUpOffAltIcon /> 123
                </Button>
                <Button>
                  <ThumbDownOffAltIcon />
                  Dislike
                </Button>
                <Reponse>Answer</Reponse>
              </Buttons>
            </Details>
          </>
        );
      })}
    </Container>
  );
};
