import React from './node_modules/react'
import { Header, Footer } from '../../common'
import { Contact } from '../contact'

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