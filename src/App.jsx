import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Layout from './components/Layout/Layout';
import User from './components/Dialogs/User/User';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
 
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route element={<Content />}>
              <Route index element={<Profile posts={props.posts}/>} />
              <Route path="dialogs" element={<Dialogs/>} >
                <Route path=":userId" element={<User />} />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Route>
        </Route>
    </Routes>
  )
}

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

export default App;