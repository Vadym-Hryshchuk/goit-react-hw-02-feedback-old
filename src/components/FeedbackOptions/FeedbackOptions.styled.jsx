import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Item = styled.li`
  padding: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  width: 100px;
  padding: 5px;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  text-transform: capitalize;
  &:hover {
    background-color: rgb(255, 149, 39);
  }
`;
