import React, { useEffect } from 'react';
import {
  Page,
  Preloader
} from 'framework7-react';
import store from '../js/store'

const StartPage = (props) => {

  useEffect(() => {
    (async() => {
        console.log('rendering startpage')
        await store.dispatch('setMe')
        const me = props.f7router.app.store.getters.me.value
        if (me) {
            props.f7router.navigate('/home/')
        } else {
            props.f7router.navigate('/login/')
        }
    })() 
}, [])
   
    return  <Page name="home">
        <Preloader color='red' size={80}></Preloader>
    </Page>
};

export default StartPage;