

import React,{Fragment} from 'react'
import Navbar from './navbar'
import Wrapper from './wrapper'

 function Layout({children}) {
  return (
    <Fragment>
      <Wrapper>
     
        <main>
          <div className='box_container'>
          <Navbar />
            <div className='section_container'>
            {children}
            </div>
            
          </div>
          
          </main>
      </Wrapper>
        
    </Fragment>
    
  )
}
export default Layout