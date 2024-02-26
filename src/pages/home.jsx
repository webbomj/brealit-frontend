import React, { useEffect } from 'react';
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

  useEffect(() => {
    const f = async() => {
      console.log('rendering home')
      const me = props.f7router.app.store.getters.me.value
        if (!me) {
          props.f7router.navigate('/login/')
        }
      await store.dispatch('setMe')
      await store.dispatch('getReceptionDays')
    }
    f()

  }, [])

  const me = useStore('me')     
  const receptionDays = useStore('receptionDays')     

  return  <Page name="home">
      <Navbar sliding={false} className='da'>
        <NavTitle sliding>Doctor</NavTitle>
      </Navbar>

      <Block>{me ? me?.id : 'null'}</Block>

      {!me ? <p>Loading</p> : receptionDays?.map((day) => {
        return <Day key={day.date} day={day}></Day>
      })}
      
    </Page>
  
};
export default HomePage;