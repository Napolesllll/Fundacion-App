import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './componenets/LandingPage';
import Home  from './componenets/Home';
import Contact from './componenets/Contact'
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/contact' component={Contact} />
    </div>
   </BrowserRouter> 
  );
}

export default App;
