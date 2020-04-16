import styled from "styled-components";

export const Form = styled.form`
  padding: 3% 10%;
  box-shadow: 0 0 20px 0 #333;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.section`
  display: flex;
  margin: 20px 0;
`;

export const InputLabel = styled.label`
  width: 100px;
`;

export const InputText = styled.input`
  width: 200px;
  border-color: lightgray;
  border-style: solid;
  border-width: 1px;
`;

export const InputTextArea = styled.textarea`
  width: 200px;
  border-color: lightgray;
`;

export const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 30px;
  border-radius: 3px;
`;
