import React from 'react';
import Ho from './Home.module.css';
import Nav from './components/Nav/Nav';
import Main from './components/landing pge/Main';

function Home() {
  return (
    <div>
        <div className={Ho.navbar}>
           <Nav/>
        </div>
        <div className={Ho.mainpage}>
          <Main/>
        </div>
    </div>
  )
}

export default Home