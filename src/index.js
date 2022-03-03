import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Home} from './home';
import {About} from './about';
import {Pizza} from './pizza';


function App(){
  return <Router>

    <nav>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/pizza'>pizza</Link>

    </nav>

    <Routes>
      
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/pizza' element={<Pizza />}></Route>

    </Routes>
  <footer>
    <p>this is the footer</p>
  </footer>

  </Router>
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)