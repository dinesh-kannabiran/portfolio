import React from 'react'
import Header from './components/Header/Header.jsx'
import TopContainer from './components/TopContainer/TopContainer.jsx'
import SkillContainer from './components/SkillContainer/SkillContainer.jsx'
import CertificateContainer from './components/CertificateContainer/CertificateContainer.jsx'
import AboutContainer from './components/AboutContainer/AboutContainer.jsx'
import ContactContainer from './components/ContactContainer/ContactContainer.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <CertificateContainer />
      <AboutContainer/>
      <ContactContainer/>
      <Footer />
    </div>
  )
}

export default App 