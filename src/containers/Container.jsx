import React, { Component } from 'react'
import BarNav from '../components/BarNav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default class Container extends Component {
    render() {
        return (
            <div>
                <BarNav/>
                <Hero/>
                <Projects/>
                <Services/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}
