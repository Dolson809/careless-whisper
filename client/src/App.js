import React , {Component} from 'react';
// import { REPL_MODE_SLOPPY } from 'repl';
import { BrowserRouter, Route, } from 'react-router-dom';
import Blog from './Pages/Main';
import Category from './Pages/Category';
import CreateWhisper from './Components/Whispers/Create';

// import { BrowserRouter, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Route exact path={'/'} component={Blog} />
        <Route exact path={'/whisper'} component={CreateWhisper} />
        <Route exact path={'/category/:category'} component={Category} />
      </BrowserRouter>
    )
  }
}

// export default App;
export default App;
