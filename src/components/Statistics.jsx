// import React, { Component } from 'react';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul>
        <li>
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
      </ul>
      <p>
        <span>Total:</span>
        <span>{total}</span>
      </p>
      <p>
        <span>Positive feedback:</span>
        <span>{positivePercentage()}%</span>
      </p>
    </>
  );
}
