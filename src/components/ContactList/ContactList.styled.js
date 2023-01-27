import styled from 'styled-components';

export const Title = styled.h2`
  padding: 15px;
  background-color: grey;
  border-radius: 10px 10px 0 0;
`;
export const List = styled.ul`
  padding: 20px;
  background-color: lightgrey;
  border-radius: 0 0 10px 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.ul`
  padding: 20px;
  display: grid;
  grid-template-columns: 70% 30%;
`;

export const ParagraphText = styled.span`
  margin-left: 40px;
  display: inline-block;
  min-width: 110px;
  font-weight: bold;
`;
