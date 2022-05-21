import logo from './logo.svg';

import Ccomponent from './Ccomponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Ccomponent /> 
     
       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Справочник Телефонный
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
    Справочник Телефонный
        </a>
      </header>
    </div>
  );  
}

export default App;
