import React, { useEffect } from 'react';
import {
  f7,
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Block,
  BlockTitle,
  List,
  ListItem,
  useStore
} from 'framework7-react';
import Day from '../components/day';

const HomePage = () => {
  const receptionDays = useStore('receptionDays');
  const loading = useStore('isLoading');

  useEffect(() => {
    f7.store.dispatch('getReceptionDays');
  }, []);


  return (<Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavTitle sliding>My App</NavTitle>
      <NavTitleLarge>My App 222222222222222222222</NavTitleLarge>
    </Navbar>
    {/* Page content */}
    <Block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
  

    {/* <BlockTitle>Modals</BlockTitle>
    <Block className="grid grid-cols-2 grid-gap">
      <Button fill popupOpen="#my-popup">Popup</Button>
      <Button fill loginScreenOpen="#my-login-screen">Login Screen</Button>
    </Block> */}

    {loading ? 'Loading' : receptionDays?.map((day) => {
      return <Day key={day.date} day={day}></Day>
    })}
    
    <List strong inset dividersIos>
      <ListItem
        title="Dynamic (Component) Route"
        
      />
      <ListItem
        title="Default Route (404)"
       
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>
  </Page>)
};
export default HomePage;