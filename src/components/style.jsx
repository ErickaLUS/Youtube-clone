import styled from "styled-components";
export const StyleContainer = styled.div``;

export const StyleNewComment = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;
 
`;

export const StyleAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 85px;
`;
export const StyleForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleInput = styled.input`
  color: ${({ theme }) => theme.text};
  display: flex;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export const StyleSend = styled.button`
  display: flex;
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  margin-left: 200px;
  padding: 10px 20px;
  cursor: pointer;
`;
