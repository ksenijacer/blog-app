import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import AppPosts from './pages/AppPosts';

function App() {
  return (
    <div>
    <Router>
      <Link to='/posts'>Posts</Link>
      <Route path='/posts'>
       <AppPosts />
      </Route>
    </Router>
  </div>
  );
}

export default App;
