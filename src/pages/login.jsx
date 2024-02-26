import React, {useState} from 'react';
import {
  Page,
  List,
  BlockTitle,
  Button,
  Block,
  ListItem,
} from 'framework7-react';
import {useFormik} from 'formik'
import Cookies from 'js-cookie'

import  {login as loginAPI} from '../api/api'
import  {tokenPath} from '../api/fetch'
import { Input } from '../components/input';
import store from '../js/store';


const LoginPage = (props) => {
  
  const [formError, setFormError] = useState('')

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: async ({login, password}) => {
      try{
        setFormError('')
        const res = await loginAPI(login, password )
        const { token, error } = await res.json()

        if (error) {
          throw Error(error)
        }

        Cookies.set(tokenPath, token, {expires: 90000})
        
        await store.dispatch('setMe')
        
        props.f7router.navigate('/',);

      } catch(e) {
        setFormError(e.message)
      }
      
    },
    onReset: () => {
      formik.resetForm()
    },
  })

  const {handleSubmit, handleReset, isLoading} = formik

  return <Page name="form">
    <Block>
      <BlockTitle>Form Example</BlockTitle>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <List strongIos outlineIos dividersIos>
          <Input label='Login' name='login' placeholder='Your login' type='text' formik={formik}/>
          <Input label='Password' name='password' placeholder='Password' type='password' formik={formik} />
          <ListItem>{formError ?? ''}</ListItem>
          <Button type='submit' disabled={isLoading}>Sign in</Button>
        </List>
      </form>
    </Block>
  </Page>
};

export default LoginPage;
