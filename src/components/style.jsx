import styled from "@emotion/styled";

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
export const StyleForm = styled.form``;

export const StyleInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
 
`;