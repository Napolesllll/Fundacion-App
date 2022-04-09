import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './componenets/LandingPage';
import Home  from './componenets/Home';
import Contact from './componenets/Contact';
import Ludopata from './componenets/Ludopata';
import PageProfile from './componenets/login/PageProfile';
import './App.css';

function App() {
  
  return (

   <BrowserRouter>
    <div className="App">

      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/ludopata' component={Ludopata} />
      <Route path='/profile' component={PageProfile} />
    </div>
   </BrowserRouter> 
  );
}

export default App;
