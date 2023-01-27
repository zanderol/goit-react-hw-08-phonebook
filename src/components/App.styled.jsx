import styled from 'styled-components';

export const Container = styled.div`
  width: 560px;
  margin: 15px auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
`;

export const Button = styled.button`
  display: block;
  width: 110px;
  height: 40px;
  padding: 0px 10px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  border: 3px solid grey;

  &:hover {
    background-color: orange;
  }
`;
