import React from 'react'
import './App.css'
import Header from './componenets/Header';
import HeroSec from './componenets/HeroSec';

const App = () => {
  return (
<div className='App'>
<div className='container-fluid'>
<div className='row'>
<div className='col-mid-20 px-0'>
<Header/>
<HeroSec/>
</div>
</div>
</div>
</div>
)}
export default App;