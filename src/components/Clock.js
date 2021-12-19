import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import styled from 'styled-components';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function Clock() {
  const [date, setDate] = useState(new Date());

  const getDate = () => {
    setDate(new Date());
  };

  const addZero = (num) => {
    return num < 10 ? '0' + num : '' + num;
  };

  useEffect(() => {
    setInterval(() => getDate(), 1000);
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <Container>
      <CurDate>
        {`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}
        &nbsp;
        {DAYS.filter((i) => i === date.getDay())[0]}요일
        <br />
        {`${addZero(date.getHours())}시 ${addZero(
          date.getMinutes()
        )}분 ${addZero(date.getSeconds())}`}
        초
      </CurDate>
    </Container>
  );
}

export default Clock;

// styled-components
const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;
