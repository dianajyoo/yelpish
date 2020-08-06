import styled from 'styled-components';

export const StyledAccount = styled.div`
  min-height: 100%;
  background: #b9ccfc;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
  box-shadow: 10px 10px 10px 5px rgba(00, 00, 00, 0.1);
`;

export const FormWrapper = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  margin: 0;
  position: absolute;

  @media (max-width: 768px) {
    width: 0;
  }
`;

export const StyledType = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  background: transparent;
  border: none;
  cursor: pointer;
`;
