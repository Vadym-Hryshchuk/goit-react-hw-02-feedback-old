import { StatisticsList, Item, Name, Value, Total } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <StatisticsList>
        <Item>
          <Name>Good:</Name>
          <Value>{good}</Value>
        </Item>
        <Item>
          <Name>Neutral:</Name>
          <Value>{neutral}</Value>
        </Item>
        <Item>
          <Name>Bad:</Name>
          <Value>{bad}</Value>
        </Item>
      </StatisticsList>
      <Total>
        <Name>Total:</Name>
        <Value>{total}</Value>
      </Total>
      <Total>
        <Name>Positive feedback:</Name>
        <Value>{positivePercentage()}%</Value>
      </Total>
    </>
  );
}
