
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import BlogPostList from './components/BlogPostList'
import BlogPostDetails from './components/BlogPostDetails'
import BlogPostItem from './components/BlogPostItem'
import Nav from './components/Nav'


function App() {

  return (
   <BrowserRouter>
   {/* <Nav/> */}
   <Routes>
    <Route path='/' element={<BlogPostList/>}></Route>
    <Route path='/items' element={<BlogPostItem/>}></Route>
    <Route path='/post/:id' element={<BlogPostDetails/>}></Route>

   </Routes>
   </BrowserRouter>
  
  )
}

export default App
