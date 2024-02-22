import React from 'react';

import {
  Card
} from 'framework7-react';

const Day = ({day}) => {

  const getTime = (time) => {
    const date = new Date(time)
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  }

  return (
    <>
    <Card title={getTime(day.date)} footer={'Записан'} className={'da'}></Card>
    </>
  )
}
export default Day;