import styled from 'styled-components';

export const StyledProfile = styled.div`
  padding: 0 7%;
  font: 1.5rem Karla, sans-serif;
  color: #575c70;

  .heading {
    margin-bottom: 8rem;
  }

  .control {
    min-height: 100%;
    position: relative;

    .grid {
      min-height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      position: absolute;
      left: -2rem;

      .grid__div {
        width: calc(100% / 4);
        padding: 1.5rem;
        background: #f7f7f8;
        border-left: 2rem solid #fff;
        border-bottom: 2rem solid #fff;
      }

      .grid__img {
        min-width: 200px;
        width: 100%;
        min-height: 200px;
        margin: 0.5rem 0;
        padding: 1rem;
      }

      .grid__p {
        font-weight: 600;
      }
    }
  }

  @media (max-width: 1111px) {
    .control .grid .grid__div {
      width: calc(100% / 3);
      min-height: 250px;
    }
  }

  @media (max-width: 1024px) {
    .control .grid .grid__div {
      width: calc(100% / 2);
    }
  }

  @media (max-width: 480px) {
    .control .grid .grid__div {
      width: 100%;
    }
  }
`;
