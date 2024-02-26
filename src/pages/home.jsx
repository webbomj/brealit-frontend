import React, { useEffect, useState } from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  Block,
  useStore,
} from 'framework7-react';
import Day from '../components/day';
import store from '../js/store'

const HomePage = (props) => {

  const [error, setError] = useState('')

  useEffect(() => {
    const f = async() => {
      // console.log(store.state)
      console.log('rendering home')
      const me = props.f7router.app.store.getters.me?.value
        if (!me) {
          props.f7router.navigate('/login/')
        }
      await store.dispatch('setMe')
      await store.dispatch('setDoctor')
      await store.dispatch('getReceptionDays')
      await store.dispatch('getAppointmentDays')
    }
    f()

  }, [])

  const me = useStore('me')     
  const receptionDays = useStore('receptionDays')     
  const doctor = useStore('doctor')       

  return  <Page name="home">
      <Navbar sliding={false} className='da'>
        <NavTitle sliding>Doctor {doctor ? doctor?.name : ''} - { doctor ? doctor.description : '' }</NavTitle>
      </Navbar>

      <Block className='red'>{error ?? ''}</Block>

      {!me ? <p>Loading</p> : receptionDays?.map((day) => {
        return <Day key={day.date} day={day} setError={setError}></Day>
      })}
      
    </Page>
  
};
export default HomePage;