import React from 'react';

import {
  Card,
  useStore,
  Block,
  BlockTitle,
  BlockFooter 
} from 'framework7-react';
import store from '../js/store';
import { appointmentPatient } from '../api/api';

const Day = ({day, setError}) => {

  const appointmentDays = useStore('appointmentDays') 
  
  const [appointmentText, setAppointmentText] = React.useState('')

  

  React.useEffect(() => {
    setAppointmentText(() => {
      return isAppointment()  ? 'Записан' : 'Не записан'
    })
  }, [appointmentDays.length])

  const getTime = (time) => {
    const date = new Date(time)
    return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  }

  const isAppointment = () => {
    let result = false
    for (let index = 0; index < appointmentDays.length; index += 1) {
      const element = appointmentDays[index];
      if (element.receptionDay.id === day.id) {
        result = true
        break;
      }
    }
    return result
  }

  const appointment = async () => {
    try{
      const res = await appointmentPatient(day.id)
      const data = await res.json()
      if (data.error) {
        setError(data.error + ' ' + getTime(day.date))
      }
    } catch(e) {
      setError(e.message + ' ' + getTime(day.date))
    }
    finally {
      await store.dispatch('getAppointmentDays')
      await store.dispatch('getReceptionDays')
    }
    
  }

  return (
    <div onClick={() => appointment()}>
      <Block>
        <BlockTitle >{getTime(day.date)}</BlockTitle>
        <BlockFooter className={isAppointment() ? 'green' : ''}>{appointmentText + ' ' + day.numberOfPatients  + ' / ' + day.quantity}</BlockFooter>
      </Block >
    </div>
  )
}
export default Day;