import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/examples/Home';
import About from './components/examples/About';
import Contact from './components/examples/Contact';
import Navbar from './components/examples/Navbar';
import Profile from './components/examples/Profile';
import Profiles from './components/examples/Profiles';
import { useState } from 'react';

function App() {
  const [obj, setObj] = useState({ a: 1, b: 2 });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/profiles'} element={<Profiles />} />
        <Route path={'/profiles/:id'} element={<Profile obj={obj} />} />
        <Route path={'*'} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
- /users - all users
- /users/:id - show specific user by id
- /posts - all posts
- /posts/:id - specific post by id

https://jsonplaceholder.typicode.com/
*/
