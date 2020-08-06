import styled from 'styled-components';
import image from '../../images/mae-mu-8Vh6ulKc50o.jpg';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff997c;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 10px 10px 10px 5px rgba(00, 00, 00, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Hero = styled.div`
  width: 80%;
  height: 100%;
  background: url(${image});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
    flex: 1;
  }
`;

export const Title = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 30px;
  letter-spacing: 2.2px;
`;
