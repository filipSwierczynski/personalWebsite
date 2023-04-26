

import React,{Fragment} from 'react'
import Navbar from './navbar'
import Wrapper from './wrapper'

 function Layout({children}) {
  return (
    <Fragment>
      <Wrapper>
      <Navbar />
        <main>{children}</main>
      </Wrapper>
        
    </Fragment>
    
  )
}
export default Layout