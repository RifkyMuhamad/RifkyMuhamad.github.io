import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './profile/Profile';
import Article from './article/Article';
import Project from './projects/Project';
import Contact from './contact/Contact';

function App() {

  return (
    <BrowserRouter>
      <div className='m-0 p-0 h-[2000px]'>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App