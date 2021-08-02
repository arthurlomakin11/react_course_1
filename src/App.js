import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Posts } from './components/Posts/posts';
import { Users } from './components/Users/users';
import { Nav } from './components/Nav/Nav'

function App({state}) {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route render={() => <Posts state={state} />} path="/posts"/>
        <Route render={() => <Users state={state} />} path="/users"/>
      </Router>
    </div>
  );
}

export default App;