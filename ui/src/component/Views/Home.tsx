import React from 'react'
import { Header, Footer } from '../Layout'
import { Contact } from '../Contact'

const Home: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  )
}

export  default Home;