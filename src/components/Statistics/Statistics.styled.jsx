import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
  font-size: 24px;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Name = styled.span`
  margin-right: 10px;
`;
export const Value = styled.span`
  color: rgb(23, 62, 204);
`;
export const Total = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: green;
`;
