import './App.css';
import Navbar from './Navbar';
import Addemp from './Addemp';
import Gallery from './Gallery';

import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
      <Navbar/>
        <Gallery/>
      </Route>
      <Route path="/Addemp">
        <Navbar/>
        <Addemp/>
      </Route>
      <Route path="/Gallery">
      <Navbar/>
        <Gallery/>
      </Route>
    </BrowserRouter>

  );
}

export default App;
