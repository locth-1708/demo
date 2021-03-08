import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Screen } from './constants';
import Home from './screen/Home';
import About from './screen/About';
import Header from './layout/Header';
import Footer from './layout/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <li>
        <Link to={Screen.Home}>Home</Link>
      </li>
      <li>
        <Link to={Screen.About}>About</Link>
      </li>
      <Switch>
        <Route path={Screen.About} component={About} exact />
        <Route path={Screen.Home} component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
