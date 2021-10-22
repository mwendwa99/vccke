import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AppBar from './components/AppBar';
import Home from './components/Home'
import Impact from './components/Impact';
import OurWork from './components/OurWork';
import About from './components/About';
import Contact from './components/Contact';
import Donate from './components/Donate';
import { AppTheme } from './theme/Theme';
import Footer from './components/Footer';
import ScrollToTop from './components/config/ScrollToTop';
import Volunteer from './components/Volunteer';
import Support from './components/Support';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <AppBar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/impact' component={Impact} />
              <Route path='/our-work' component={OurWork} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/donate' component={Donate} />
              <Route path='/volunteer' component={Volunteer} />
              <Route path='/request support' component={Support} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
