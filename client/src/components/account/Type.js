import React from 'react';
import { StyledType } from './styles';

const Type = (props) => {
  return (
    <StyledType type='button' onClick={props.setAccount}>
      {props.children}
    </StyledType>
  );
};

export default Type;
