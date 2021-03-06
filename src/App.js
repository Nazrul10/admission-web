import '@fortawesome/fontawesome-free/css/all.min.css'; 
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Css..
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
function App() {
  return (
    //Router
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
