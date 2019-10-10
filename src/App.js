import React from 'react';
import './App.css';
import Contacts from './components/Contacts';


function App(props) {
  return (
    <div className="App">
    
     <Contacts name="Jenny Putas" avatar="https://randomuser.me/api/portraits/women/32.jpg" online={true}/>
     <Contacts name="Puree de quête" avatar="https://randomuser.me/api/portraits/men/72.jpg" online={false}/>
     <Contacts name="Bonne Crepe" avatar="https://randomuser.me/api/portraits/women/43.jpg" online={true}/>
    </div>
  );
}

export default App;