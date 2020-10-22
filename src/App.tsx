import React from 'react';
import {Wrapper} from './components/Wrapper';
import {Navbar} from './components/Navbar';
import './App.css';
import { useRoutes } from 'hookrouter';
import {Home} from './pages/Home'
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';

const routes = {
  '/': () => <Home />,
  '/about/*': () => <About />,
  '/contact/:name': ({name}:{[key:string]:any}) => <Contact name={name} />
}

function App() {
  const match = useRoutes(routes);
  return (
    
      <Wrapper>
        <Navbar />
        { match || <NotFound/>}
      </Wrapper>
     
    
  );
}

export default App;
