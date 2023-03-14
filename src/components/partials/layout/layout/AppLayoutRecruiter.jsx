import React from 'react'
import Footer from '../../footer/Footer'
import NavbarRecruiter from '../../appbar/NavbarRecruiter'
import Copyright from '../../copyright/Copyright'

const AppLayoutRecruiter = ({children}) => {
  return (
    <div>
        <NavbarRecruiter/>
        {children}
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default AppLayoutRecruiter
