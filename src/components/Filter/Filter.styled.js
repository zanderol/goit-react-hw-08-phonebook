import styled from 'styled-components';

export const Title = styled.h2`
  padding: 15px;
  background-color: grey;
  border-radius: 10px 10px 0 0;
`;

export const Content = styled.div`
  padding: 20px;
  background-color: lightgrey;
  border-radius: 0 0 10px 10px;
`;

export const Input = styled.input`
  height: 20px;
  &:hover,
  &:focus {
    outline: 1px solid orange;
  }
`;

export const LabelTitle = styled.span`
  display: inline-block;
  margin: 5px;
  text-align: start;
  min-width: 80px;
  font-weight: bold;
`;
