import styled from 'styled-components';

export const Navbar = styled.header`
  padding: 10px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  .link {
    text-decoration: none;
    color: #575c70;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  }

  .link--mr {
    margin-right: 1rem;
  }
`;

export const Account = styled.div`
  display: flex;
  font-family: 'Karla', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #302f36;
`;
