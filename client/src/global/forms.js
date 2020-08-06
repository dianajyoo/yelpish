import styled from 'styled-components';

export const Form = styled.form`
  padding: 2rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
`;

export const ExtendedForm = styled(Form)`
  padding: 0 25%;
  margin: 1rem 0;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem 10% 1.5rem 1.5rem;
  margin: 1rem 0;
  background: #f7f7f8;
  border: none;
  border-radius: 7px;

  &.input--mr {
    margin-right: 1rem;
  }
`;
