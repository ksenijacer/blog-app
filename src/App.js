import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import AppPosts from './pages/AppPosts';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <div>
    <Router>
      <Link to='/posts'>Posts</Link>
      <Route path='/posts'>
       <AppPosts />
      </Route>
      <Link to='/single-post'>Single Post</Link>
      <Route path='/post/:id'>
       <SinglePost />
      </Route>
    </Router>
  </div>
  );
}

export default App;
