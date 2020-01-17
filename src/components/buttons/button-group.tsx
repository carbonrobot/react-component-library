import styled from 'styled-components';

export const ButtonGroup = styled.div`
  & > * + * {
    margin-right: 0;
  }

  button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  
  button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
