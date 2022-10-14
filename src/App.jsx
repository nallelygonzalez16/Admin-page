
//Importaciones de terceros
import { BrowserRouter } from 'react-router-dom'

//Importaciones propias
import { Router } from './routes/Router'

import './App.css';
import { UserProvider } from './context/UserProvider';


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Router />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
