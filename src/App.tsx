import './App.css'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Products from './pages/Products'
import News from './pages/News'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <PageLayout showContactInfo={true} showFooter={true}>
          <Home />
        </PageLayout>
      } />
      <Route path="/about" element={
        <PageLayout showContactInfo={false} showFooter={true}>
          <About />
        </PageLayout>
      } />
      <Route path="/team" element={
        <PageLayout showContactInfo={false} showFooter={true}>
          <Team />
        </PageLayout>
      } />
      <Route path="/products" element={
        <PageLayout showContactInfo={false} showFooter={true}>
          <Products />
        </PageLayout>
      } />
      <Route path="/news" element={
        <PageLayout showContactInfo={false} showFooter={true}>
          <News />
        </PageLayout>
      } />
      <Route path="/solutions" element={
        <PageLayout showContactInfo={false} showFooter={true}>
          <Solutions />
        </PageLayout>
      } />
      <Route path="/contact" element={
        <PageLayout showContactInfo={false} showFooter={true}>
          <Contact />
        </PageLayout>
      } />
    </Routes>
  )
}

export default App
