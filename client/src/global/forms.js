import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding: 20px 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  padding: 20px;
  margin: 10px;
  flex: 1 1 50%;
  background: #f0f0f0;
  border: none;
  border-radius: 7px;
`;
