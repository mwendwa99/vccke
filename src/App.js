import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AppBar from './components/AppBar';
import Home from './components/Home'
import { AppTheme } from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <div className="App">
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route to='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
