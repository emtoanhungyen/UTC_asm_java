import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/view/Footer'
import Header from '../components/view/Header'

type Props = {}

const Container = (props: Props) => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Container