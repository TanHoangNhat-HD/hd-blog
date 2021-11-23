import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import '../node_modules/antd/dist/antd.css'
import Home from './pages/home/home.page'
import Technology from './pages/technology/technology.page'
import Company from './pages/company/company.page'
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
import SignIn from './pages/signin/signin.page'
import PrivateRoute from './HOC/privateRoute.component'
import ArticlePage from './pages/article/article.page'
import BlogPage from './pages/blog/blog.page'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='blog' element={<BlogPage />}></Route>
        <Route path='blog/:articleId' element={<ArticlePage />} />
        <Route path='/technology' element={<Technology />} />
        {/* <Route path='/company' element={<Company />} /> */}
        <Route path='/sign-in' element={<SignIn />} />
        <Route
          path='/company'
          element={
            <PrivateRoute>
              <Company />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <h1>Content not found!</h1>
            </main>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
